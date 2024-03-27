
import { useWindowSize } from '@/src/shared/hook/useWindowSize'
import ContentLoader from 'react-content-loader'

export const ProductLoader = () => {
  const { size } = useWindowSize()

  return (
    <div className=''>
      {size.width < 768 ? (
        <ContentLoader
          speed={2}
          width={400}
          height={800}
          viewBox='0 0 500 1000'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <circle cx='96' cy='90' r='84' />
          <rect x='13' y='190' rx='0' ry='0' width='177' height='19' />
          <rect x='14' y='228' rx='0' ry='0' width='177' height='26' />
          <rect x='15' y='267' rx='0' ry='0' width='177' height='21' />
          <rect x='13' y='319' rx='0' ry='0' width='177' height='35' />
          <rect x='158' y='-2' rx='0' ry='0' width='43' height='17' />
          <rect x='-3' y='-1' rx='0' ry='0' width='43' height='17' />
          <rect x='120' y='390' rx='0' ry='10' width='60' height='35' />

          <circle cx='340' cy='90' r='84' />
          <rect x='250' y='190' rx='0' ry='0' width='177' height='19' />
          <rect x='250' y='228' rx='0' ry='0' width='177' height='26' />
          <rect x='250' y='267' rx='0' ry='0' width='177' height='21' />
          <rect x='250' y='319' rx='0' ry='0' width='177' height='35' />
          <rect x='250' y='-2' rx='0' ry='0' width='43' height='17' />
          <rect x='400' y='-1' rx='0' ry='0' width='43' height='17' />
          <rect x='370' y='390' rx='0' ry='10' width='60' height='35' />
        </ContentLoader>
      ) : (
        <ContentLoader
          speed={2}
          width={800}
          height={800}
          viewBox='0 0 800 800'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <circle cx='96' cy='90' r='84' />
          <rect x='13' y='190' rx='0' ry='0' width='177' height='19' />
          <rect x='14' y='228' rx='0' ry='0' width='177' height='26' />
          <rect x='15' y='267' rx='0' ry='0' width='177' height='21' />
          <rect x='13' y='319' rx='0' ry='0' width='177' height='35' />
          <rect x='158' y='-2' rx='0' ry='0' width='43' height='17' />
          <rect x='-3' y='-1' rx='0' ry='0' width='43' height='17' />
        </ContentLoader>
      )}
    </div>
  )
}
