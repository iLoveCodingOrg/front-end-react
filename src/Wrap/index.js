import React from 'react'

import Banner from '../Banner'
import Footer from '../Footer'
import Header from '../Header'
// import withAuth from '../withAuth'

export default function Wrap({ children }) {
  // const BannerHOC = withAuth(Banner, false, <></>)
  return (
    <>
      <Banner />
      {/* <BannerHOC /> */}
      <Header />
      {children}
      <Footer />
    </>
  )
}
