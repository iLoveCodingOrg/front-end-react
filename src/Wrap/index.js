import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Banner from '../Banner'
import withAuth from '../withAuth'

export default function Wrap({ children }) {
  // const BannerHOC = withAuth(Banner, false, <></>)
  return (
    <>
      {/* <BannerHOC /> */}
      <Header />
      {children}
      <Footer />
    </>
  )
}
