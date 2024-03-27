import React from 'react'
import ContentLoader from 'react-content-loader'

export default function FilterLoader() {
  return (
    <div className='container mx-auto p-4 '>
      <ContentLoader
        speed={2}
        width={200}
        height={800}
        viewBox='0 0 200 800'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='0' y='13' rx='3' ry='3' width='180' height='26' />
        <rect x='3' y='80' rx='3' ry='3' width='69' height='25' />
        <rect x='123' y='79' rx='3' ry='3' width='61' height='25' />
        <rect x='1' y='50' rx='3' ry='3' width='131' height='18' />
        <rect x='4' y='112' rx='3' ry='3' width='181' height='18' />
        <rect x='1' y='174' rx='3' ry='3' width='125' height='18' />
        <rect x='0' y='203' rx='3' ry='3' width='112' height='18' />
        <rect x='1' y='232' rx='3' ry='3' width='125' height='18' />
        <rect x='0' y='261' rx='3' ry='3' width='103' height='18' />
        <rect x='2' y='289' rx='3' ry='3' width='120' height='18' />
        <rect x='1' y='318' rx='3' ry='3' width='107' height='18' />
        <rect x='2' y='347' rx='3' ry='3' width='115' height='18' />
        <rect x='1' y='376' rx='3' ry='3' width='127' height='18' />
        <rect x='5' y='438' rx='3' ry='3' width='173' height='18' />
        <rect x='4' y='467' rx='3' ry='3' width='156' height='18' />
        <rect x='5' y='496' rx='3' ry='3' width='173' height='18' />
        <rect x='4' y='525' rx='3' ry='3' width='161' height='18' />
        <rect x='7' y='553' rx='3' ry='3' width='173' height='18' />
        <rect x='5' y='582' rx='3' ry='3' width='145' height='18' />
        <rect x='7' y='611' rx='3' ry='3' width='164' height='18' />
        <rect x='5' y='640' rx='3' ry='3' width='163' height='18' />
        <rect x='8' y='667' rx='3' ry='3' width='173' height='18' />
        <rect x='7' y='696' rx='3' ry='3' width='156' height='18' />
        <rect x='8' y='725' rx='3' ry='3' width='173' height='18' />
        <rect x='7' y='754' rx='3' ry='3' width='161' height='18' />
      </ContentLoader>
    </div>
  )
}
