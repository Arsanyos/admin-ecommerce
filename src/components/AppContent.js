import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { DataContextProvider } from 'src/context/DbContext'
import { Data } from 'src/context/DbContext'
// routes config
import routes from '../routes'

const AppContent = () => {
  return (
    <DataContextProvider>
      <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              )
            })}
            <Route path="/" element={<Navigate to="dashboard" replace />} />
          </Routes>
        </Suspense>
      </CContainer>
    </DataContextProvider>
  )
}

export default React.memo(AppContent)
