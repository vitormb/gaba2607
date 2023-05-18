import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Geral'

import {PacienteHeader} from './PacienteHeader' 

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Pacientes',
    path: '/Listagem-Pacientes',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const PacientePage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <PacienteHeader />
          </>
        }
      >
        <Route index element={<Navigate to='/pages/paciente' />} />
      </Route>
    </Routes>
  )
}

export default PacientePage
