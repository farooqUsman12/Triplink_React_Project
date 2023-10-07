import React from 'react'
import ContentLoader from 'react-content-loader'

const PackagesLodingSM = () => {
  return (
    <ContentLoader
    width={100}
    height={100}
    speed={3}
    backgroundColor={'#eee'}
    foregroundColor={'#999'}
    // viewBox="0 0 100 70"
    style={{width:"100%",height:"100%",marginTop:"15px"}}
>
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="570" height="250" />
    <rect x="0" y="270" rx="4" ry="4" width="100" height="10" />
    <rect x="0" y="300" rx="3" ry="3" width="100" height="10" />
    <rect x="120" y="300" rx="3" ry="3" width="100" height="10" />
    <rect x="250" y="300" rx="3" ry="3" width="100" height="10" />
    <rect x="0" y="330" rx="3" ry="3" width="350" height="10" />
    <rect x="0" y="350" rx="3" ry="3" width="320" height="10" />
    <rect x="0" y="380" rx="3" ry="3" width="150" height="10" />
</ContentLoader>
  )
}

export default PackagesLodingSM