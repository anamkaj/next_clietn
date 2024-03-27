export const getAllCategory = async (id: string) => {
  try {
    const data = await fetch(
      `https://tmk-v.ru:8080/api/category/all-category?id=${id}`,
    )
    if (data.ok) {
      return data.json()
    } else {
      throw new Error('Failed to fetch data')
    }
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}
