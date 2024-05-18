'use client'
import { useWindowSize } from '@/src/shared/hook/useWindowSize'

import { ButtonGroupProp } from '../model/button.type'

export const ButtonMain = ({
  text,
  icon,
  action,
  style,
  styleIcon,
  textStyle,
}: ButtonGroupProp) => {
  const { width } = useWindowSize()

  return (
    <>
      <button onClick={() => action && action()} className={style}>
        <span className={styleIcon}>{icon}</span>
        {width > 900 && <h6 className={textStyle}>{text}</h6>}
      </button>
    </>
  )
}
