import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { DisciplineCard } from '../components/DisciplineCard'
import { Title } from '../components/Title'
import { StyledFlatList, StyledText, StyledView } from '../styles'
import { IconAction } from '../components/IconAction'
import { MyRewardCard } from '../components/MyRewardsCard'
import { defaultUser } from '../constants/user'
import { useDisciplines } from '../contexts/DisciplinesContext'
import { SkeletonDisciplineCard } from '../components/Skeletons/SkeletonDisciplineCard'

export function Home() {
  const navigation = useNavigation()

  const { disciplines, isLoading } = useDisciplines()

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

        {isLoading ? (
          <StyledView className='flex-2 flex'>
            <Title text='Disciplinas' />
            <StyledFlatList
              data={Array(11).fill({})}
              renderItem={({ item }) => <SkeletonDisciplineCard />}
            />
          </StyledView>
        ) : (
          <StyledFlatList
            showsVerticalScrollIndicator={false}
            data={disciplines}
            className='flex-2'
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<Title text='Disciplinas' />}
            renderItem={({ item }) => (
              <DisciplineCard
                discipline={item.displayName}
                icon={item.icon}
                onPress={() =>
                  navigation.navigate('Discipline', {
                    title: item.displayName,
                    icon: item.icon,
                    discipline: item.name,
                  })
                }
              />
            )}
          />
        )}
      </StyledView>
    </StyledView>
  )
}
