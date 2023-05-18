import { useEffect, useRef, useState } from 'react'
import { KTIcon } from '../../../../_metronic/helpers'
import { Passo1 } from './laudo/Passo1'
import { Passo2 } from './laudo/Passo2'
import { Passo3 } from './laudo/Passo3'
import { Passo4 } from './laudo/Passo4'
import { Passo5 } from './laudo/Passo5'

import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import { useForm } from 'react-hook-form';



const WizzardLaudo = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const submitStep = () => {
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
    }
  }



  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])  

  return (
    <div
      ref={stepperRef}
      className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
      id='kt_create_account_stepper'
    >
      {/* begin::Aside*/}
      <div className='card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
        {/* begin::Wrapper*/}
        <div className='card-body px-6 px-lg-10 px-xxl-15 py-20'>
          {/* begin::Nav*/}
          <div className='stepper-nav'>
            {/* begin::Step 1*/}
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>1</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Informações Básicas</h3>

                  <div className='stepper-desc fw-semibold'>Dados, Introdução, Justificativa</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 1*/}

            {/* begin::Step 2*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>2</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Critérios diagnósticos</h3>
                  <div className='stepper-desc fw-semibold'>Metodologia, Anamnese, Testes</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 2*/}

            {/* begin::Step 3*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>3</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Dados</h3>
                  <div className='stepper-desc fw-semibold'>Dados dos Testes</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 3*/}

            {/* begin::Step 4*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>4</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Finalização</h3>
                  <div className='stepper-desc fw-semibold'>Conclusão, Encaminhamentos, Anexos, Bibliografia</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 4*/}

            {/* begin::Step 5*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>5</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Completed</h3>
                  <div className='stepper-desc fw-semibold'>Woah, we are here</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}
            </div>
            {/* end::Step 5*/}
          </div>
          {/* end::Nav*/}
        </div>
        {/* end::Wrapper*/}
      </div>
      {/* begin::Aside*/}

      <div className='py-9 d-flex flex-row-fluid align-items-start bg-body rounded'>
      
        <form onSubmit={submitStep}>
        
          <div className='current' data-kt-stepper-element='content'>
            <Passo1 />
          </div>

          <div data-kt-stepper-element='content'>
            <Passo2 />
          </div>

          <div data-kt-stepper-element='content'>
            <Passo3 />
          </div>

          <div data-kt-stepper-element='content'>
            <Passo4 />
          </div>

          <div data-kt-stepper-element='content'>
            <Passo5 />
          </div>

          <div className='d-flex flex-stack pt-10'>
            <div className='mr-2'>
              <button
                onClick={prevStep}
                type='button'
                className='btn btn-lg btn-light-primary me-3'
                data-kt-stepper-action='previous'
              >
                <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                Back
              </button>
            </div>

            <div>
              <button type='submit' className='btn btn-lg btn-primary me-3'>
                <span className='indicator-label'>
                  {stepper.current?.currentStepIndex !==
                    stepper.current?.totalStepsNumber! - 1 && 'Continue'}
                  {stepper.current?.currentStepIndex ===
                    stepper.current?.totalStepsNumber! - 1 && 'Submit'}
                  <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                </span>
              </button>
            </div>
          </div>
          </form>
      </div>
    </div>
  )
}

export { WizzardLaudo }
