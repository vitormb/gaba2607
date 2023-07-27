import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
/*import {MenuTestPage} from '../pages/MenuTestPage'*/
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
/*import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'*/
import { ListagemPacientes } from '../pages/ListagemPaciente'
import { PacienteIndividual } from '../pages/PacienteIndividual'
import { EditarPaciente } from '../pages/PacienteEdit'
import { useParams } from 'react-router-dom';
import { DDbaseWrapper } from '../pages/drag-and-drop/ddmain';
import { PDFembedPage } from '../pages/pdf/pdfview';

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))  
  const WizardCadastroLaudo = lazy(() => import('../modules/wizards/WizardCadastroLaudo'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))

  /* const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage')) */
  
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Listagem abaixo das páginas criadas */}        
        
        
        <Route path="/Listagem-Pacientes" element={<ListagemPacientes />} />  

        <Route path="/DDbase" element={<DDbaseWrapper />} />          
        <Route path="/pdfbase" element={<PDFembedPage />} />     
        
        <Route 
          path="/paciente-editar/:id"
          element={<PacienteEditWrapper />} 
        />

        <Route 
          path="/pagina-paciente/:id"
          element={<PacienteIndividualWrapper />} 
        />
        

        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        
        {/* Lazy Modules */}
        
        
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />             
        {/* Criar a página de wizard do add Paciente */}          
        <Route
          path='formularios/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />        
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

function PacienteIndividualWrapper() {
  const { id } = useParams();
  return <PacienteIndividual id={Number(id)} />
}

function PacienteEditWrapper() {
  const { id } = useParams();
  return <EditarPaciente id={Number(id)} />
}



const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
