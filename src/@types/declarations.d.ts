import { ImageSourcePropType } from 'react-native'

declare module '*.png' {
  const content: ImageSourcePropType | string
  export default content
}

declare module '*.jpeg' {
  const content: ImageSourcePropType | string
  export default content
}
