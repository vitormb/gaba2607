/* eslint-disable react/jsx-no-target-blank */
import {useEffect} from 'react'
import { KTSVG } from "../../../helpers";
import {ILayout, useLayout} from '../../core'

const Footer = () => {
  const {config} = useLayout()
  useEffect(() => {
    updateDOM(config)
  }, [config])
  return (
    <>
      <span><KTSVG path="/media/icons/duotune/general/gen030.svg" className="svg-icon-primary svg-icon-1hx " /> GABA </span>
      <div className='text-dark order-2 order-md-1'>
        <span className='ml-2 text-muted fw-semibold me-1'> - 
          {new Date().getFullYear().toString()}&copy;
        </span>        
      </div>
    </>
  )
}

const updateDOM = (config: ILayout) => {
  if (config.app?.footer?.fixed?.desktop) {
    document.body.classList.add('data-kt-app-footer-fixed', 'true')
  }

  if (config.app?.footer?.fixed?.mobile) {
    document.body.classList.add('data-kt-app-footer-fixed-mobile', 'true')
  }
}

export {Footer}
