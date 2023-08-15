import { Suspense, lazy } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import * as PATH from './constants'
import Main from '../pages/Main/Main'
import { CATALOG } from './constants'

function RouterConfig() {
  return (
    <Suspense>
      <Routes>
        <Route path={PATH.ROOT} element={<Outlet />}>
          <Route path={PATH.ROOT} element={<Main />} />
          {/* <Route path={PATH.CATALOG} element={<Dashboard />} />*/}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default RouterConfig
