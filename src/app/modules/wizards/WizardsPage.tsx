import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Vertical} from './components/Vertical'
import {Horizontal} from './components/Horizontal'
import {CadastroPacienteWiz} from '../../pages/CadastroPacienteWizard'
import {CadastroLaudoWiz} from '../../pages/CadastroLaudoWizard'

const wizardsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Página inicial',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },  
  {
    title: 'Cadastrar paciente',
    path: '/cadastrar-paciente',
    isSeparator: true,
    isActive: true,
  },
  {
    title: 'Criar Laudo',
    path: '/criar-laudo',
    isSeparator: true,
    isActive: true,
  },
]

const WizardsPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='horizontal'
        element={
          <>
            <PageTitle breadcrumbs={wizardsBreadCrumbs}>Horizontal</PageTitle>
            <Horizontal />
          </>
        }
      />
      <Route
        path='cadastrar-paciente'
        element={
          <>
            <PageTitle breadcrumbs={wizardsBreadCrumbs}>Cadastrar novo Paciente</PageTitle>
            <CadastroPacienteWiz />
          </>
        }
      />
      <Route
        path='cadastrar-laudo'
        element={
          <>
            <PageTitle breadcrumbs={wizardsBreadCrumbs}>Cadastrar novo Laudo</PageTitle>
            <CadastroLaudoWiz />
          </>
        }
      />
      <Route
        path='vertical'
        element={
          <>
            <PageTitle breadcrumbs={wizardsBreadCrumbs}>Vertical</PageTitle>
            <Vertical />
          </>
        }
      />
      <Route index element={<Navigate to='/formularios/' />} />
    </Route>
  </Routes>
)

export default WizardsPage
