import CatalogProductPage from '@/src/views/product-catalog-page'


type PropCategoryUpLevel = {
  params: { slug: string[] }
  searchParams: { [key: string]: string }
}

export default async function CatalogProductCart({
  params,
  searchParams,
}: PropCategoryUpLevel) {
  return (
    <>
      <CatalogProductPage params={params} searchParams={searchParams} />
    </>
  )
}
