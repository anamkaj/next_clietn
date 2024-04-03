'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { rules } from '../lib/helper/rules'

export type ErrorType = {
  errors: {
    name: string
    type: string | undefined
  }
}

export default function ErrorInput({ errors }: ErrorType) {
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
