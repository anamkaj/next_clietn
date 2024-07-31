export const PostServices = {
  async singlePost(id: number) {
    try {
      const data = await fetch(`https://tmk-v.ru:8080/api/post/${id}`)
      if (data.ok) {
        return data.json()
      }
    } catch (error) {
      console.log(error)
    }
  },
}
