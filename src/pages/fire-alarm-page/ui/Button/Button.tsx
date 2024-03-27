import React, { ReactNode } from 'react'

type BtnLandingPage = {
  text?: string
  icon?: ReactNode
  action?: () => void
  styleBtn?: string
}

export default function Button({
  text,
  icon,
  action,
  styleBtn,
}: BtnLandingPage) {
  return (
    <>
      <button onClick={() => action && action()} className={styleBtn}>
        <span>{icon}</span>
        <h6>{text}</h6>
      </button>
    </>
  )
}
