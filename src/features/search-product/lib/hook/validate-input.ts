import debounce from 'lodash.debounce'
import { useState } from 'react'
import { z } from 'zod'
import { useSearch } from './get-search-product'

const combinedRegex = /^(?!.*[#$&+=@"'()|.?><%$*!:;~])[а-яА-Яa-zA-Z1-9\s]+$/
const inputValidation = z
  .string()
  .min(3)
  .max(25)
  .regex(combinedRegex, 'Введите только буквы или цифры')

export const useValidate = () => {
  const [input, setInput] = useState<string>('')
  const [errorValidate, setErrorValidate] = useState<string>('')
  const { getResult } = useSearch(input)
  const timer = debounce(() => getResult(), 2000)

  const handleSearch = (event: string) => {
    setInput(event)
    const validation = inputValidation.safeParse(event)
    if (validation.success) {
      setErrorValidate('')
      timer()
    } else {
      setErrorValidate(validation.error.format()._errors[0])
    }
  }

  return { handleSearch, setInput, input, errorValidate }
}
