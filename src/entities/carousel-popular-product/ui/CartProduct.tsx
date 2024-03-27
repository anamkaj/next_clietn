'use client'
import { ProviderStor } from '@/src/app/provider'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'
import {
  HiOutlineArrowTrendingUp,
  HiOutlineChatBubbleBottomCenterText,
} from 'react-icons/hi2'
import { ButtonCart } from '../../product-cart/ui/other-components/ButtonCart'
import slug from 'slug'
import { IProduct } from '@/src/shared/reused-type/product'

export const PopularProduct = ({ cart }: { cart: IProduct }) => {
  return (
    <div
      className='flex flex-col items-center cursor-pointer border +
     border-gray-200 px-4 py-2 rounded-lg shadow-lg bg-white box-border h-[380px]'
    >
      <div className=' flex w-full justify-between'>
        <p className='  whitespace-nowrap right-12 font-light text-xs mt-0 bg-gray-100 p-1 rounded-sm'>
          <span className=' text-blue-500'>Артикул</span> : {cart.article}
        </p>
        <p className='hidden left-14 lg:inline-block py-0.5 px-1.5 leading-none whitespace-nowrap font-medium bg-gray-100 text-black text-[10px] rounded'>
          В наличии
          <span className='inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-light bg-red-600 text-white rounded ml-2'>
            {cart.quantity}
          </span>
        </p>
      </div>

      {/* Изображение товара  */}

      <Link
        href={{
          pathname: `/product/popular/${slug(cart.title)}/${cart.id}`,
        }}
        className='mb-4 w-[150px] h-[150px]'
      >
        <Image
          height={250}
          width={250}
          src={`https://tmk-v.ru:8080/img/${cart.imgFolder}/${cart.imgLink[0]}`}
          alt={cart.altImg}
        />
      </Link>

      <Link
        href={{
          pathname: `/product/popular/${slug(cart.title)}/${cart.id}`,
        }}
        className=' flex font-light text-black text-sm text-center mb-2 h-8'
      >
        {cart.title.length > 50 ? cart.title.slice(0, 44) + '...' : cart.title}
      </Link>

      {/* Счетчики отзывов  */}

      <div className='flex items-center mt-6 lg:mt-2 '>
        {/*Счетчик просмотров*/}
        <div className=' flex items-center'>
          <div className=' font-light text-xs rounded-l-lg  flex items-center'>
            <span className=' mr-2 '>
              <FaEye className=' w-5 h-5' />
            </span>
          </div>
          <div className='bg-white font-light text-xs rounded-r-lg hover:text-blue-500'>
            {cart.watchProduct}
          </div>
        </div>

        {/*Счетчик Рейтинг и отзывы*/}
        <div>
          <div className='flex items-center p-2'>
            {cart.rating > 2 ? (
              <p className=' flex ml-2 text-sm font-bold text-red-500'>
                <span className=' mr-2 '>
                  <HiOutlineArrowTrendingUp className=' w-5 h-5' />
                </span>
                {cart.rating}
              </p>
            ) : (
              <p className=' flex ml-2 text-sm font-bold text-violet-400'>
                <span className=' mr-2 '>
                  <HiOutlineArrowTrendingUp className=' w-5 h-5' />
                </span>
                {cart.rating}
              </p>
            )}
            <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full '></span>
            <div className='hidden md:block'>
              {cart.countReviews !== 0 ? (
                <Link
                  href={''}
                  className='flex text-sm font-light underline hover:no-underline '
                >
                  <span className=' mr-2 '>
                    <HiOutlineChatBubbleBottomCenterText className=' w-5 h-5' />
                  </span>
                  {cart.countReviews} Отзыва{' '}
                </Link>
              ) : (
                <span className='text-xs lg:text-sm font-light '>
                  Нет отзывов
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <SalesBadges data={data} /> */}

      {/* Блок с ценами и кнопка */}
      <div className='flex w-full items-center mt-auto mb-0 justify-between'>
        <div className='flex space-x-8 md:space-x-6 lg:space-x-2 items-center flex-wrap'>
          <div>
            <p className=' font-bold text-sm md:text-xl'>
              {Math.round(cart.price * (cart.discount / 11)).toLocaleString(
                'ru',
              )}{' '}
              ₽
            </p>
          </div>
          <div className=' bg-gray-100 rounded-lg  py-0 p-2'>
            <span className={'font-light text-sm  md:text-xl line-through'}>
              {cart.price.toLocaleString('ru')} ₽
            </span>
          </div>
        </div>

        {/*Добавить в корзину*/}
        <ProviderStor>
          <ButtonCart key={cart.id} product={cart} />
        </ProviderStor>
      </div>
    </div>
  )
}
