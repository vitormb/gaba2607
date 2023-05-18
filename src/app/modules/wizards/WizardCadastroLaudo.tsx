import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {WizzardLaudo} from './components/CadastroLaudo'

const wizardsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Cadastro de Laudo',
    path: 'x',
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

const WizardsPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='WizzardLaudo'
        element={
          <>
            <PageTitle breadcrumbs={wizardsBreadCrumbs}>Cadastro de Laudo</PageTitle>
            <WizzardLaudo />
          </>
        }
      />
      <Route index element={<Navigate to='x' />} />
    </Route>
  </Routes>
)

export default WizardsPage
