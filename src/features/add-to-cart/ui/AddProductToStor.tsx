import { useAppDispatch } from '@/src/app/Redux/storeHook'

import { AddToCartType } from '../model/type/button-type'
import { addToCart } from '@/src/app/Redux/Product/cartSliсe'

export default function AddProductToStor({
  product,
  price,
  setActive,
}: AddToCartType) {
  const dispatch = useAppDispatch()
  const addProduct = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: price,
        img: product.imgLink[0],
        imgFolder: product.imgFolder,
        totalCount: 1,
        sale: product.discount,
      }),
    )
    setActive(() => true)
  }

  return (
    <button
      className='w-full uppercase mt-10 rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 focus:outline-none'
      onClick={() => addProduct()}
    >
      Добавить в корзину
    </button>
  )
}
