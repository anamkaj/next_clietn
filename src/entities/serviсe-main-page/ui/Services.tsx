import Link from 'next/link'
import { listService } from '../model/data/list-servise'

export default function Services() {
  return (
    <>
      <div className=' mt-10 mb-4 '>
        <h2 className='font-bold text-xl lg:text-2xl text-slate-600 uppercase'>
          {' '}
          Услуги кампании{' '}
        </h2>
      </div>
      <div className=' grid md:grid-cols-3 gap-4 '>
        {listService.map((x, index) => (
          <div
            key={index}
            className=' w-full border shadow-md p-4 rounded-md flex flex-col items-center gap-2 bg-slate-50'
          >
            <div className=' h-[100px]'>
              <p className=' font-semibold uppercase text-sm text-center'>
                {x.description}
              </p>
            </div>
            <div className=' mb-2 mt-auto'>
              <Link
                className=' uppercase font-light text-white bg-gradient-to-r from-fuchsia-600 to-purple-600  rounded-full text-sm px-5 py-2.5 text-center mb-2  '
                href={`post/${x.id}`}
              >
                Узнать подробнее...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
