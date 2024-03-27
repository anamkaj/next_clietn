export const FilterServices = {
  async getFilterParamsProduct(
    id: string,
    searchParams: { [key: string]: string },
  ) {
    try {
      const data = await fetch(
        `https://tmk-v.ru:8080/api/filterParamsProduct?` +
          new URLSearchParams({
            id: id,
            priceMin: searchParams.price_min || '1',
            priceMax: searchParams.price_max || '10000000',
            brand: searchParams.brand || '',
            paramFilter: searchParams.paramfilter || '',
          }),
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

  async getAllProductNotFilter(id: string) {
    try {
      const data = await fetch(`https://tmk-v.ru:8080/api/notFilter?id=${id}`)
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
