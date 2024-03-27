export const MenuServices = {
  async getMainCategory() {
    try {
      const data = await fetch(
        'https://tmk-v.ru:8080/api/category/null-category',
      )
      if (data.ok) {
        return data.json()
      } else {
        throw new Error('Failed to fetch data')
      }
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  },
}
