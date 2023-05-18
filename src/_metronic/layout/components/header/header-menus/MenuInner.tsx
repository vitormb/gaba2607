/* eslint-disable jsx-a11y/anchor-is-valid */
import {KTIcon} from '../../../../helpers'

const ToolbarClassic = () => {
  return (
    <div className='d-flex align-items-center gap-2 gap-lg-3'>
        <a
              href='#'
              className='btn btn-sm btn-flex fw-bold'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
            >
              <KTIcon iconName='filter' className='fs-6 text-muted me-1' />
              Página inicial
            </a>
    </div>
  )
}

export function MenuInner() {
  
  return (
  <ToolbarClassic/> 
  )
}
