import { Suspense, lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import * as PATH from './constants'
import { Main } from '../pages/Main'
import { Catalog } from '../pages/Catalog'

function RouterConfig() {
  return (
    <Suspense>
      <Routes>
        <Route path={PATH.ROOT} element={<Outlet />}>
          <Route path={PATH.ROOT} element={<Main />} />
          <Route path={PATH.CATALOG} element={<Catalog />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default RouterConfig
