import React from 'react'
import { withRouter } from 'react-router-dom'
import Banner from '../Banner'
import Footer from '../Footer'
import Header from '../Header'
import { SHOW_PATH_DECISION_BANNER } from '../config'
// import withAuth from '../withAuth'

function Wrap({ children, location }) {
  const isHomePage = location && location.pathname === '/'
  const hideGlobalNavOnHome = isHomePage && SHOW_PATH_DECISION_BANNER

  // const BannerHOC = withAuth(Banner, false, <></>)
  return (
    <>
      {!hideGlobalNavOnHome && <Banner />}
      {/* <BannerHOC /> */}
      {!hideGlobalNavOnHome && <Header />}
      {children}
      <Footer />
    </>
  )
}

export default withRouter(Wrap)
