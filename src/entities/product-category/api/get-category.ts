export const getAllProductNotFilter = async (id: string) => {
  // Получение колличества всех товаро в группе + минмальная и максимальная цена товаров в группу  без фильтрации

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
}
