export const defaultUser = {
  name: 'Murilo',
  lastName: 'de Jesus Santos Silva',
  email: 'murilojssilva@outlook.com',
  username: 'murilojssilva',
  points: {
    math: [30, 0],
    portuguese: [0, 0],
    english: [0, 0],
    chemistry: [0, 0],
    physics: [0, 0],
    philosophy: [0, 0],
    history: [0, 0],
    geography: [0, 0],
    biology: [0, 0],
    sociology: [0, 0],
    spanish: [0, 0],
  },
  created_at: '',
  updated_at: '',
}

export const totalPoints = Object.values(defaultUser.points).reduce(
  (acc, pointsArray) => acc + pointsArray[0],
  0
)
