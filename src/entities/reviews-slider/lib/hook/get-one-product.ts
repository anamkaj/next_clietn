import useSWR from 'swr'
import { SliderService } from '../../api/get-reviews'
import { IProduct } from '../../model/type/reviews-type'

export const useSingleProduct = (id: number) => {
  const { data, isLoading } = useSWR<IProduct[]>('singleProduct', () =>
    SliderService.getSingleProduct(id),
  )
  return { data, isLoading }
}
