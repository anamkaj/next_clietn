import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { z } from 'zod'
import { DataType } from '../../model/type/search-type'
import { SearchServices } from '../../api/get-search'

export const useSearch = (input: string) => {
  const [errorValidate, setErrorValidate] = useState<string[]>([])
  const forbiddenCharactersRegex = /[#$&+=@"'()|.?><%$*!:;~]/
  const allowedCharactersRegex = /^[а-яА-Яa-zA-Z1-9\s]+$/

  const inputValidation = z
    .string()
    .max(25)
    .min(4, 'минимальная длинна запроса 4 символов')
    .refine(
      (data) =>
        allowedCharactersRegex.test(data) &&
        !forbiddenCharactersRegex.test(data),
      (data) => ({
        message: `${data} нельзя использовать подобные знаки "#$&+=@"`,
      }),
    )
    .safeParse(input)

  const {
    data: data,
    isLoading: isLoadingData,
    error: errorData,
    mutate: getData,
  } = useSWR<DataType>('dataSearch', () => {
    if (inputValidation.success) {
      return SearchServices.dataSearch(input)
    } else {
      return Promise.resolve([])
    }
  })

  useEffect(() => {
    if (!inputValidation.success) {
      setErrorValidate(inputValidation.error.format()._errors)
      getData()
    } else {
      getData()
    }
  }, [input])

  const { category = [], product = [] } = data || {}

  return { errorData, category, product }
}
