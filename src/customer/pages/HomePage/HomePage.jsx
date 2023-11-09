import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
      <MainCrosel/>

      <div className='space-y-1 py-5 flex flex-col justify-center'>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
      </div>
    </div>
  )
}

export default HomePage
