import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { DisciplineCard } from '../components/DisciplineCard'
import { Title } from '../components/Title'
import {
  StyledFlatList,
  StyledScrollView,
  StyledText,
  StyledView,
} from '../styles'
import { IconAction } from '../components/IconAction'
import { MyRewardCard } from '../components/MyRewardsCard'
import { defaultUser } from '../constants/user'
import { useDisciplines } from '../contexts/DisciplinesContext'

export function Home() {
  const navigation = useNavigation()

  const { disciplines } = useDisciplines()
  console.log(disciplines)

  return (
    <StyledView className='flex-1 bg-white'>
      <StyledView className='flex-none flex-row justify-between bg-cyan-700 px-12 py-20 items-center'>
        <StyledView className='flex-none flex-col'>
          <StyledText className='text-md text-gray-100'>APPostila</StyledText>
          <StyledText className='text-xl text-gray-100'>
            Olá,{' '}
            <StyledText className='font-bold text-md text-gray-100'>
              {defaultUser.name}
            </StyledText>
          </StyledText>
        </StyledView>
        <IconAction
          onPress={() => navigation.navigate('Profile' as never)}
          icon='user'
          color='white'
        />
      </StyledView>

      <StyledView className='flex-1 px-8'>
        <MyRewardCard
          onPress={() => navigation.navigate('MyRewards' as never)}
        />
        <StyledView className='my-8' />

        <StyledFlatList
          showsVerticalScrollIndicator={false}
          data={disciplines}
          className='flex-2'
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<Title text='Disciplinas' />}
          renderItem={({ item }) => (
            <DisciplineCard
              discipline={item.displayName}
              icon='divide'
              onPress={() =>
                navigation.navigate('Discipline', {
                  title: item.displayName,
                  icon: 'divide',
                  discipline: item.name,
                })
              }
            />
          )}
        />
      </StyledView>
    </StyledView>
  )
}
