'use client'
export const BannerSlider = ({ data }: { data: string }) => {
  return (
    <div className='p-4 w-[30vw] lg:w-[15vw]'>
      <img
        src={`https://tmk-v.ru:8081/img/brand_banner/${data}`}
        alt='brandCCTV'
      />
    </div>
  )
}
