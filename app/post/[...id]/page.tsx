
import { PostServices, PostType, PostComponent } from '@/src/entities/post'

export default async function PostPage({ params }: { params: { id: string } }) {
  const data: PostType[] = await PostServices.singlePost(Number(params.id))

  return (
    <>
      <PostComponent data={data} />
    </>
  )
}
