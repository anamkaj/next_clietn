export const SliderService = {
  async getReviewsCarousel() {
    try {
      const data = await fetch(`https://tmk-v.ru:8080/api/reviewsAll`)
      if (data.ok) {
        return data.json()
      } else {
        throw new Error('Failed to fetch data')
      }
    } catch (error) {
      console.log(error)
    }
  },

  async getSingleProduct(id: number) {
    try {
      const data = await fetch(`https://tmk-v.ru:8080/api/one?id=${id}`)
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
