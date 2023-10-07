import React from 'react'
import ContentLoader from 'react-content-loader'

interface LoadingProps {
  width: string  | number,
  height: string | number,
  x: string,
  y: string,
  rx: string,
  ry: string,
  reactWidth: string,
  reactHeight: string,
  style?: any,
  viewBox?: string
}
const SearchInformationLoding = ({ width, height, x, y, rx, ry, reactWidth, reactHeight, style, viewBox }: LoadingProps) => {
  return (
    <ContentLoader
    width={width}
    height={height}
    speed={1}
    backgroundColor={'#74716E'}
    foregroundColor={'#DFDFDF'}
    viewBox={viewBox ? viewBox: "0 0 200 70"}
    style={style}
  >
    {/* Only SVG shapes */}
    <rect x={x} y={y} rx={rx} ry={ry} width={reactWidth} height={reactHeight} />
  </ContentLoader>
  )
}

export default SearchInformationLoding