import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useFormRequest } from '../lib/hook/send-form'
import { AgreementForm } from '@/src/shared/ui/privacy-policy'
import { Person } from '@/src/shared/reused-type/form-type/form-person'
import { useGoalYandexMetrika } from '@/src/shared/hook/goal.metrika'
import { IProduct } from '@/src/shared/reused-type/product'
import { EmailInput, NameInput, PhoneInput } from '@/src/shared/ui/form-element'

type PropForm = {
  status?: boolean
  product?: IProduct
  setFastOrderModel: React.Dispatch<React.SetStateAction<boolean>>
  price?: number
}

// Форма быстрый заказ , кнопка в карточку товара "Заявка на покупку товара"

export const FormPerson = ({
  status,
  product,
  setFastOrderModel,
  price,
}: PropForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Person>()

  //Отправка форм обратной связи на сервер
  const { onSubmitFastOrder, response } = useFormRequest({ product, price })

  // Отправка достижения цели в Яндекс метрику
  const { sendGoal } = useGoalYandexMetrika({ isValid, reset })

  useEffect(() => {
    if (response?.status == 200) {
      setTimeout(() => {
        reset()
        return setFastOrderModel(false)
      }, 2000)
    }
  }, [response])

  return (
    <div className=' mt-4'>
      <>
        <form onSubmit={handleSubmit(onSubmitFastOrder)}>
          <div className=' flex flex-col gap-2'>
            <NameInput register={register} errors={errors} />
            <PhoneInput register={register} errors={errors} />
            {!status && <EmailInput register={register} errors={errors} />}
            <button
              onClick={() => sendGoal('Event_24')}
              className=' w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
            >
              Отправить
            </button>
          </div>
        </form>
      </>

      {response && (
        <p className=' font-light text-sm mt-3 text-center'>{response.state}</p>
      )}

      <div>
        <AgreementForm />
      </div>
    </div>
  )
}
