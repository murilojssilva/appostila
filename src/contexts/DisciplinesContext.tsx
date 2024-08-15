import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Discipline {
  id: string
  name: string
  displayName: string
}

interface DisciplinesContextData {
  disciplines: Discipline[]
  fetchDisciplines: () => Promise<void>
  createDiscipline: (name: string, displayName: string) => Promise<void>
  isLoading: boolean
  updateDiscipline: (
    id: string,
    name: string,
    displayName: string
  ) => Promise<void>
  deleteDiscipline: (id: string) => Promise<void>
}

const DisciplinesContext = createContext<DisciplinesContextData | undefined>(
  undefined
)

export const DisciplinesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [disciplines, setDisciplines] = useState<Discipline[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchDisciplines = async () => {
    setIsLoading(true)
    try {
      const response = await api.get('/disciplines')
      setDisciplines(response.data.disciplines)
    } catch (error) {
      console.error('Failed to fetch disciplines:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const createDiscipline = async (name: string, displayName: string) => {
    try {
      await api.post('/disciplines', { name, displayName })
      await fetchDisciplines() // Refresh the list after creating a discipline
    } catch (error) {
      console.error('Failed to create discipline:', error)
    }
  }

  const updateDiscipline = async (
    id: string,
    name: string,
    displayName: string
  ) => {
    try {
      await api.put(`/disciplines/${id}`, { name, displayName })
      await fetchDisciplines() // Refresh the list after updating a discipline
    } catch (error) {
      console.error('Failed to update discipline:', error)
    }
  }

  const deleteDiscipline = async (id: string) => {
    try {
      await api.delete(`/disciplines/${id}`)
      await fetchDisciplines() // Refresh the list after deleting a discipline
    } catch (error) {
      console.error('Failed to delete discipline:', error)
    }
  }

  useEffect(() => {
    fetchDisciplines()
  }, [])

  return (
    <DisciplinesContext.Provider
      value={{
        disciplines,
        isLoading,
        fetchDisciplines,
        createDiscipline,
        updateDiscipline,
        deleteDiscipline,
      }}
    >
      {children}
    </DisciplinesContext.Provider>
  )
}

export const useDisciplines = () => {
  const context = useContext(DisciplinesContext)
  if (!context) {
    throw new Error('useDisciplines must be used within a DisciplinesProvider')
  }
  return context
}
