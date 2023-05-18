/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {ListsWidget2} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
      <div className='row gy-12 g-xl-12'>
          <div className='col-xl-12'>
            <ListsWidget2 className='card-xl-stretch mb-xl-12' />
          </div>
      </div>
  </>
)

const DashboardWrapper: FC = () => {
  
  return (
    <>
      <PageTitle breadcrumbs={[]}>Menu principal</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
