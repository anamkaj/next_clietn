import { addCartStore } from '@/src/shared/reused-type/redax'


export const ProductSum = ({ product }: { product: addCartStore }) => {
  const totalSum = () => {
    return (product.price * product.totalCount).toFixed(2)
  }
  return (
    <div className=' flex flex-col items-center'>
      <div className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {product.totalCount && (
          <p className=' font-semibold text-xl'>{totalSum()} руб.</p>
        )}
      </div>
      <div className=''>
        <p className=' text-slate-400 font-thin'>
          {product.price} руб. за 1 шт.{' '}
        </p>
      </div>
    </div>
  )
}
