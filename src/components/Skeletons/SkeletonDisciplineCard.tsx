import { StyledAnimatedView } from '../../styles'
import { useColorSkeletonTransition } from '../../hooks/useColorSkeletonTransition'

export function SkeletonDisciplineCard() {
  const backgroundColor = useColorSkeletonTransition()
  return (
    <StyledAnimatedView
      className='flex-2 flex-row py-12 rounded-xl my-2'
      style={{ backgroundColor }}
    />
  )
}
