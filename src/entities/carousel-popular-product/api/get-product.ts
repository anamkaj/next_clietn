export const CarouselService = {
  async popularProduct() {
    try {
      const data = await fetch(`https://tmk-v.ru:8080/api/popularProduct`)

      if (data.ok) {
        return data.json()
      } else {
        throw new Error('Failed to fetch data')
      }
    } catch (error) {
      console.log(error)
    }
  },
}
