'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

export type ErrorType = {
  errors: {
    name: string
    type: string | undefined
  }
}

export default function ErrorInput({ errors }: ErrorType) {
  const [typeErrors, setTypeErrors] = useState<string>('')
  const rules: {
    [key: string]: {
      [key: string]: string
    }
  } = {
    phone: {
      required: 'Это обязательное поле заполнения',
      pattern: 'Проверьте правильность ввода номера',
    },
    name: {
      pattern: 'Используйте только буквы, без пробелов',
      maxLength: 'Превышена максимальная длина',
      minLength: 'Слишком коротко',
    },
  }

  const key = errors.name
  const errorMessage = errors?.type !== undefined && rules[key][errors.type]

  return (
    <div>
      <AnimatePresence>
        {errorMessage && (
          <motion.p
            className='absolute bg-white p-2 rounded-lg border text-red-500 text-sm'
            initial={{ opacity: 0, x: '90%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, x: '100%' }}
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
