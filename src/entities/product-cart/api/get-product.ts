export const ProductServices = {
  // Получение продуктов для каталога и пагинации + фильтрация из head

  async getProductFilterHead(
    id: string,
    page: string,
    searchParams: { [key: string]: string },
  ) {
    const pageNumber = (Number(page) - 1) * 25
    try {
      const data = await fetch(
        `https://tmk-v.ru:8080/api/all/sort?` +
          new URLSearchParams({
            id: id,
            skip: pageNumber.toString(),
            take: '25',
            priceMin: searchParams.price_min || '1',
            priceMax: searchParams.price_max || '10000000',
            brand: searchParams.brand || '',
            paramFilter: searchParams.paramfilter || '',
            sortParams: searchParams.sort || 'popularity_desc',
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
}
