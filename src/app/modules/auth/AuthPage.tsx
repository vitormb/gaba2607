/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    document.body.classList.add('bg-body')
    return () => {
      document.body.classList.remove('bg-body')
    }
  }, [])

  const objStyle = { 
    marginRight: '33%',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',

  };

  return (
    <div
      className='d-flex flex-column align-center flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'      
    >
      <video style={{               
        zIndex: -1,       
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        left: `0`,
        right: `0`,
        top: `0`,
        bottom: `0`,
        clipPath: 'circle(55% at 80% 53%)',
        position: 'fixed',        
      }} id="vbg" autoPlay loop muted poster="/media/login/loginalt.jpg">
      <source src={toAbsoluteUrl('/media/login/gabalogin.mp4')} type="video/mp4" />
      </video>
      
      {/* begin::Content */}
      <div className='d-flex justify-content-space-evenly flex-center flex-column flex-column-fluid p-10 pb-lg-20'>        
        {/* begin::Wrapper */}
        <div style={objStyle} className='bg-opacity-75 w-lg-500px rounded shadow-sm p-10 p-lg-15'>          
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      
      {/* end::Footer */}
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
