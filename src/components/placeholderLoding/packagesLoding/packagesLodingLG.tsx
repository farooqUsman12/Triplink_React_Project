import React from 'react'
import ContentLoader from 'react-content-loader'

const PackagesLodingLG = () => {
  return (
    <ContentLoader
    width={100}
    height={100}
    speed={3}
    backgroundColor={'#eee'}
    foregroundColor={'#999'}
    // viewBox="0 0 100 70"
    style={{width:"100%",height:"100%",marginTop:'15'}}
>
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="570" height="300" />
    <rect x="0" y="320" rx="4" ry="4" width="100" height="10" />
    <rect x="0" y="350" rx="3" ry="3" width="150" height="10" />
    <rect x="170" y="350" rx="3" ry="3" width="150" height="10" />
    <rect x="350" y="350" rx="3" ry="3" width="150" height="10" />
    <rect x="0" y="380" rx="3" ry="3" width="570" height="10" />
    <rect x="0" y="410" rx="3" ry="3" width="570" height="10" />
    <rect x="0" y="440" rx="3" ry="3" width="150" height="10" />
</ContentLoader>
  )
}

export default PackagesLodingLG