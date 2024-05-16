export const time = () => {
  const date = new Date()

  const formattedTime = `${date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  })}`

  return formattedTime
}
