import React from 'react'
import bannerimage from '../../assets/images/bannerimage.png'

const RightBanner = () => {
  return (
    <div className='w-1\2 flex justify-center items-center relative'>
    <img className='w-[400px] h-[500px] z-10' 
    src={bannerimage}
    alt='BannerImage'
    />
    <div className='absolute bottom-0 w-[450px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>
    </div>
  </div>
  )
}

export default RightBanner