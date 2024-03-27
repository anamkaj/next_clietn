// Получение одного товара
export const getSingleProduct = async (id: number) => {
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
}
// Запрос товаров для Site map
export const getAllProductBySiteMap = async () => {
  try {
    const data = await fetch(`https://tmk-v.ru:8080/api/sitemap`)
    if (data.ok) {
      return data.json()
    } else {
      throw new Error('Failed to fetch data')
    }
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}
