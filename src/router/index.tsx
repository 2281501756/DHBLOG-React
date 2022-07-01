import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('../layout/index'))

function RouteView() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout></Layout> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteView