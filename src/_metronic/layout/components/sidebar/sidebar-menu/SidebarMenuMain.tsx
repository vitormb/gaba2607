/* eslint-disable react/jsx-no-target-blank */
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='home'
        title='Página inicial'
      />
      
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Pacientes</span>
        </div>
      </div>
      
      <SidebarMenuItemWithSub
        to='/'
        title='Gerenciar pacientes'
        icon='people'
      >
          <SidebarMenuItem 
          to='/formularios/cadastrar-paciente'
          icon='user-tick'
          fontIcon='bi-app-indicator'
          title='Adicionar paciente'
          hasBullet={false} />
          <SidebarMenuItem 
          to='/Listagem-Pacientes'
          icon='profile-user'
          fontIcon='bi-app-indicator'
          title='Listar pacientes'
          hasBullet={false} />
      </SidebarMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Laudos</span>
        </div>
      </div>
      
      <SidebarMenuItemWithSub
        to='/x'
        title='Gerenciar laudos'
        icon='tablet-text-down'
      >
          <SidebarMenuItem 
          to='/formularios/cadastrar-laudo'
          icon='add-notepad'
          title='Novo laudo'
          hasBullet={false} />
          <SidebarMenuItem 
          to='/#link'
          icon='questionnaire-tablet'
          fontIcon='bi-app-indicator'
          title='Listar laudos'
          hasBullet={false} />
          <SidebarMenuItem 
          to='/#link'
          icon='file-down'
          fontIcon='bi-app-indicator'
          title='Baixar laudo'
          hasBullet={false} />
          <SidebarMenuItem 
          to='/#link'
          icon='chart-pie-3'
          title='Visualizar gráficos'
          hasBullet={false} />
          <SidebarMenuItem 
          to='/ddbase'
          icon='bi bi-arrows-move'
          title='Ajustar elementos'
          hasBullet={false} />
          <SidebarMenuItem 
          to='/pdfbase'
          icon='bi bi-arrows-move'
          title='PDF Base'
          hasBullet={false} />
      </SidebarMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Minha conta</span>
        </div>
      </div>
      <SidebarMenuItem 
          to='/#link'
          icon='badge'
          title='Financeiro'
          hasBullet={false} />
      <SidebarMenuItem 
          to='/#link'
          icon='setting-2'
          title='Configurações'
          hasBullet={false} />
      <SidebarMenuItem 
          to='/#link'
          icon='question-2'
          title='Suporte'
          hasBullet={false} />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>DEV</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/crafted/pages'
        title='DEV'
        fontIcon='bi-archive'
        icon='element-plus'
      > 
      <SidebarMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='element-plus'
      > 
        <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <SidebarMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <SidebarMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <SidebarMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='profile-circle'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub to='/error' title='Errors' fontIcon='bi-sticky' icon='cross-circle'>
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='element-7'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='message-text-2'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='User management'
        fontIcon='bi-layers'
      />
      </SidebarMenuItemWithSub>      
    </>
  )
}

export {SidebarMenuMain}
