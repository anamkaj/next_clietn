export const SearchServices = {
  async dataSearch(params: string) {
    try {
      const data = await fetch(
        `https://tmk-v.ru:8080/api/searchData?` +
          new URLSearchParams({
            input: params,
          }),
      )
      if (data.ok) {
        return data.json()
      } else {
        throw new Error('Failed to fetch data')
      }
    } catch (error) {
      throw new Error('Ошибка ответа сервера')
    }
  },
}
