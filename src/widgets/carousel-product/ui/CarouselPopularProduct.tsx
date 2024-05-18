
import CarouselProduct from '@/src/entities/carousel-popular-product/ui/Carousel'

export default async function CarouselPopularProduct({
  text,
}: {
  text?: string
}) {
  return (
    <div className='container mx-auto'>
      <div className=' mt-12 mb-6'>
        <p className=' font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
          {text}
        </p>
      </div>
      <CarouselProduct />
    </div>
  )
}
