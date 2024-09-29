export default function Phone() {
  return (
    <div className='flex flex-col whitespace-nowrap'>
      <div className='flex items-center gap-2'>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M18.35 14.85L16.9 13.4q.3-.275.463-.637t.162-.763q0-.4-.162-.763T16.9 10.6l1.45-1.45q.575.575.875 1.313t.3 1.537q0 .8-.3 1.538t-.875 1.312m2.45 2.45l-1.4-1.4q.775-.775 1.2-1.775T21.025 12q0-1.125-.425-2.125T19.4 8.1l1.4-1.4q1.075 1.05 1.65 2.425T23.025 12q0 1.5-.575 2.875T20.8 17.3M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413T17 23zm0-3v1h10v-1zM7 4h10V3H7zm0 0V3zm0 16v1z'
            />
          </svg>
        </span>
        <a href='tel:+79002689360' className='text-black text-normal font-bold'>
          8 (861) 298-34-28
        </a>
      </div>
      <div className='flex items-center gap-2'>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M18.35 14.85L16.9 13.4q.3-.275.463-.637t.162-.763q0-.4-.162-.763T16.9 10.6l1.45-1.45q.575.575.875 1.313t.3 1.537q0 .8-.3 1.538t-.875 1.312m2.45 2.45l-1.4-1.4q.775-.775 1.2-1.775T21.025 12q0-1.125-.425-2.125T19.4 8.1l1.4-1.4q1.075 1.05 1.65 2.425T23.025 12q0 1.5-.575 2.875T20.8 17.3M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413T17 23zm0-3v1h10v-1zM7 4h10V3H7zm0 0V3zm0 16v1z'
            />
          </svg>
        </span>
        <a href='tel:+79002689360' className='text-black text-normal font-bold'>
          8 (900) 268-93-60
        </a>
      </div>
    </div>
  )
}
