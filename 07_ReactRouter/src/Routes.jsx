import React from 'react'
import { Header, Footer } from './components'
import { Outlet } from 'react-router'

export default function Routes() {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

