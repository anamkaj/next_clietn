
import ReactMarkdown from 'react-markdown'
import { ICategory } from '../../model/type.category'

export default async function Description({
  category,
  categoryId,
}: {
  category: ICategory[]
  categoryId: string
}) {
  return (
    <div className=' mt-5 mb-8 p-2'>
      <h2 className=' font-normal text-xs lg:text-sm'>
        {category?.map((e) => {
          if (e.id == Number(categoryId))
            return (
              <div key={e.id}>
                {e.description !== null ? (
                  <ReactMarkdown>{e.description}</ReactMarkdown>
                ) : (
                  ''
                )}
              </div>
            )
        })}
      </h2>
    </div>
  )
}
