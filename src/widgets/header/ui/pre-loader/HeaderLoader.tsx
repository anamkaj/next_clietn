
import ContentLoader from 'react-content-loader'

export default function HeaderLoader() {
  return (
    <ContentLoader
      speed={3}
      width={1366}
      height={58}
      viewBox='0 0 1366 58'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      className='container mx-auto'
    >
      <rect x='10' y='10' rx='10' ry='10' width='1366' height='58' />
    </ContentLoader>
  )
}
