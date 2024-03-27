import { getMainCategory } from '@/src/entities/category/api/get.category'
import { getAllProductBySiteMap } from '@/src/shared/api/api-product/get-product'
import { ICategory } from '@/src/shared/reused-type/category'
import { IProduct } from '@/src/shared/reused-type/product'
import slug from 'slug'

export default async function sitemap() {
  const category: ICategory[] = await getMainCategory()
  const product: IProduct[] = await getAllProductBySiteMap()

  const categoryMap = category.map((cat) => {
    const catObj = {
      url: `https://tmk-v.ru/category/${cat.slug}/${cat.id}`,
      lastModified: new Date(),
    }

    const filterProduct = product.filter((prod) => cat.id === prod.categoryId)

    const prodObj = filterProduct.map((prod) => ({
      url: `https://tmk-v.ru/product/${cat.slug}/${slug(prod.title)}/${
        prod.id
      }`,
      lastModified: new Date(),
    }))

    return [...prodObj, catObj]
  })

  return [
    {
      url: `https://tmk-v.ru/videonablyudenie`,
      lastModified: new Date(),
    },
    {
      url: `https://tmk-v.ru/pozharnaya-ohrana`,
      lastModified: new Date(),
    },
    {
      url: `https://tmk-v.ru/post/1`,
      lastModified: new Date(),
    },
    {
      url: `https://tmk-v.ru/post/2`,
      lastModified: new Date(),
    },
    {
      url: `https://tmk-v.ru/post/3`,
      lastModified: new Date(),
    },
    {
      url: `https://tmk-v.ru/post/4`,
      lastModified: new Date(),
    },
    {
      url: `https://tmk-v.ru/post/5`,
      lastModified: new Date(),
    },
    {
      url: `https://tmk-v.ru/post/6`,
      lastModified: new Date(),
    },
    ...categoryMap.flat(),
  ]
}
