
import ServicesBtn from '../../../entities/tab-info-single-product/ui/button-tab/ServicesBtn'
import { countViewIncrement } from '@/src/entities/tab-info-single-product/lib/hook/count.view.inc'
import { CallSingleCart } from '@/src/widgets/call-specialist'
import { HeadSingleProduct } from '@/src/entities/single-product-head'
import { CarouselImage } from '@/src/entities/single-product-images'
import { IProduct } from '@/src/shared/reused-type/product'
import { TablePropsProduct } from '@/src/entities/short-param-single-prod'
import {
  TabInformation,
  TabSingleCart,
} from '@/src/entities/tab-info-single-product'
import { CartPrice } from '@/src/entities/single-product-price'
import { AddProductStore } from '@/src/features/add-to-cart'
import { OrderOneClick } from '@/src/entities/order-one-click'
import ModelLayout from './ModelLayout'
import { getSingleProduct } from '@/src/shared/api'

export default async function SingleProduct({ slug }: { slug: string }) {
  const data = await getSingleProduct(Number(slug[2]))
  const product: IProduct = { ...data }[0]
  countViewIncrement(product.id)

  return (
    <div className='container mx-auto p-4 mt-1 lg:mt-5'>
      {/* <Crumbs id={product[0].categoryId} /> */}
      <h1 className='font-bold text-2xl mt-5'>{product.title}</h1>

      <div className='grid grid-cols-1 gap-4 items-start md:grid-cols-2 xl:grid-cols-3'>
        {/*Артикул и количество отзывов Слайд с фото  */}
        <div>
          <HeadSingleProduct product={product} />
          <CarouselImage product={product} />
        </div>

        {/*Характеристики*/}

        <div className=' hidden xl:block mt-20  '>
          <h2 className='font-light'>Технические характеристики</h2>
          <TablePropsProduct product={product} />
          <TabInformation />
        </div>

        {/*Карточка добавления в корзину (справа)*/}
        <div className='w-full shadow-lg border rounded-lg p-4'>
          <CartPrice product={product} />

          {/*кнопка добавить в корзину */}
          <AddProductStore product={product} price={product.price} />
          {/* Заказ в один клик */}

          <OrderOneClick />

          <CallSingleCart />
        </div>
      </div>

      {/*описание и характеристики TAB*/}
      <div>
        <TabSingleCart product={product} />
      </div>

      {/*Модальное окно/ Добавление в корзину */}
      <ModelLayout product={product} />
    </div>
  )
}
