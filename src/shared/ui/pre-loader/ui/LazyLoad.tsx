'use client'


import ContentLoader from 'react-content-loader'
import { ClipLoader, FadeLoader } from 'react-spinners'
import { BeatLoader } from 'react-spinners'

export const LazyLoad = () => {
  return (
    <div className=' container mx-auto  '>
      <div className=' flex justify-center items-center '>
        <FadeLoader color='#757575' />
      </div>
    </div>
  )
}

export const MiniSpinner = () => {
  return (
    <div className=' flex justify-start items-center w-1/12 container mx-auto '>
      <BeatLoader color='#757575' size={8} />
    </div>
  )
}

export const LineWaveSpinner = () => {
  return (
    <div className=' container mx-auto'>
      <div className=' flex justify-center items-center'>
        <ClipLoader color='#36d7b7' />
      </div>
    </div>
  )
}
