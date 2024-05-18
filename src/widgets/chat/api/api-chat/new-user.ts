type User = {
  name: string
  tel: string
}

export const postNewUserChat = async (user: User) => {
  try {
    const data = await fetch(`https://tmk-v.ru:5011/api/registration`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    if (data.ok) {
      return data.json()
    }
  } catch (error) {
    throw new Error('Failed to fetch data !!!')
  }
}
