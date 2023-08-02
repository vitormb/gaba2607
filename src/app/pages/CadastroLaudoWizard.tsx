import React, { FC, useEffect, useRef, useState } from 'react'
import { ICreateLaudos, createLaudosSchemas, inits } from './passos-laudo/LaudoWizardHelper'
import './customcss/estilos.css'
import { StepperComponent } from '../../_metronic/assets/ts/components'
import { KTIcon } from '../../_metronic/helpers'
import { SideBarLaudo } from './passos-laudo/sidebarWizard'
import { Gerais } from './passos-laudo/functionsGerais'
import { Passo1 } from './passos-laudo/passo1'
import { Passo2 } from './passos-laudo/passo2';
import { Passo3 } from './passos-laudo/passo3'
import { Passo4 } from './passos-laudo/passo4'
import { Passo5 } from './passos-laudo/passo5'
import { Passo6 } from './passos-laudo/passo6'
import { Passo7 } from './passos-laudo/passo7'
import { Passo8 } from './passos-laudo/passo8'
import { Passo9 } from './passos-laudo/passo9'
import { Passo10 } from './passos-laudo/passo10'
import { Passo11 } from './passos-laudo/passo11'
import { Passo12 } from './passos-laudo/passo12'
import { Passo13 } from './passos-laudo/passo13'
import { Passo14 } from './passos-laudo/passo14'
import { Passo15 } from './passos-laudo/passo15'
import { Passo16 } from './passos-laudo/passo16'
import { PacienteContextProvider } from './passos-laudo/PacienteContext'
import { SelectedTestesProvider } from './passos-laudo/TesteContext'
import axios, { AxiosError } from 'axios'
import { Form, Formik, FormikValues, useFormikContext, useField, FieldInputProps, FormikContext } from 'formik'
import { number } from 'yup'

const CadastroLaudoWiz: FC = () => {

  const [cadastroConcluido, setCadastroConcluido] = useState(false);
  const [cadastroCallback, setCadastroCallback] = useState('Aguardando...');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);

  const toggleFullWidth = () => {
    setIsFullWidth(!isFullWidth);
  };
  const {
    skin,
    setSkin,
    definirskin,
    definiralerta,
  } = Gerais();

  const handleCloseModal = () => setCadastroConcluido(false);
  // eslint-disable-next-line
  const [apiResponse, setApiResponse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState('');
  // eslint-disable-next-line
  const [success, setSuccess] = useState('');
  // eslint-disable-next-line
  const showIndex = useState<StepperComponent | null>(null);
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createLaudosSchemas[0])
  const [initValues] = useState<ICreateLaudos>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement);
  }


  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    stepper.current.goPrev();
    setCurrentSchema(createLaudosSchemas[stepper.current.currentStepIndex - 1])
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)
  }

  const postData = async (data: ICreateLaudos) => {

    try {
      setCadastroCallback('Validando cadastro...');
      setSkin('loading');
      setIsSubmitting(true);

      const response = await axios.post('http://127.0.0.1:3333/pacientes', data);
      console.log(response.data); // Handle the successful response as needed         

    } catch (error) {
      if ((error as AxiosError).response) {
        // The request was made and the server responded with a status code
        setIsModalOpen(true);
        setIsSubmitting(false);
        const axiosError = error as AxiosError;
        setCadastroCallback(`<h4>Erro ao cadastrar paciente:</h4><span class="text-danger">${axiosError.response?.data.errors[0].message}</span>`);
        setSkin('error');
        console.error('Error in postData:', axiosError.response?.data);
        console.error('Status code:', axiosError.response?.status);
        console.error('Response headers:', axiosError.response?.headers);

      } else if ((error as AxiosError).request) {
        // The request was made but no response was received
        console.error('Houve um problema em sua conexão com o servidor.', (error as AxiosError).request);
        setSkin('error');
        setCadastroCallback('Houve um problema em sua conexão com o servidor. Caso o erro persista, entre em contato com nosso suporte.');
      } else {
        // Something happened in setting up the request that triggered an error
        const genericError = error as Error;
        setSkin('error');
        console.error('Error during request setup:', genericError.message);
      }
      throw error;
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const submitStep = async (values: ICreateLaudos, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext();

      console.log(stepper.current.currentStepIndex);
    } else {
      try {
        await postData(values);
        setCadastroCallback('Cadastro realizado com sucesso!');
        setSkin('sucesso');
        //toastr.success("New order has been placed!");
        setTimeout(() => {
          setCadastroCallback('Redirecionando...');
          setCadastroConcluido(true);
          window.location.reload();
        }, 2000);


      } catch (error) {
        // Handle form submission error
        if ((error as AxiosError).response) {
          console.log('houve erro');
        } else if ((error as AxiosError).request) {
          // The request was made but no response was received
          console.error('No response received:', (error as AxiosError).request);
          setError('No response received from the server.');
        } else {
          // Something happened in setting up the request that triggered an error
          const genericError = error as Error;
          console.error('Error during request setup:', genericError.message);
          setError('An error occurred during form submission.');
        }
      }
    }
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)
    setCurrentSchema(createLaudosSchemas[stepper.current.currentStepIndex - 1])
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
      <div className={isFullWidth ? 'fullW-on' : 'fullW-off'}>
        <SideBarLaudo />
      </div>
      <div className='d-flex flex-row-fluid flex-start bg-body rounded'>
        <div className="modal fade" id="kt_modal_sucesso" tabIndex={-1} aria-labelledby="kt_modal_sucesso" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className={`modal-header ${definirskin}`}>
                <h5 className="modal-title" id="kt_modal_sucesso">{definiralerta}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div dangerouslySetInnerHTML={{ __html: cadastroCallback }}></div>
              </div>
              <div className="modal-footer">
                <button type="button" data-bs-dismiss="modal" aria-label="Close" className={`btn text-white ${definirskin}`}>Ok</button>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className="position-relative">
            <button onClick={toggleFullWidth} type="button" className="bi bi-arrows-fullscreen app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"></button>
          </div>
          <div className=''>
            
          <PacienteContextProvider>  
            <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep} status={apiResponse} enableReinitialize={true}>
              {(formikProps) => (
                
                <Form className='col-lg-12 p-5' id='kt_create_account_form'>
                  <div className='current card card-custom card-stretch' data-kt-stepper-element='content' >                    
                      <Passo7 />                    
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

                  <div data-kt-stepper-element='content'>
                    <Passo6 />
                  </div>
                  
                  <div data-kt-stepper-element='content' >                  
                    <Passo1 />                    
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Passo8 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Passo9 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Passo10 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Passo11 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Passo12 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Passo13 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Passo14 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Passo15 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Passo16 />
                  </div>

                  <div className='d-flex flex-stack mt-5 mb-10 px-3'>
                    <div className='mr-2'>
                      <button
                        onClick={prevStep}
                        type='button'
                        className='btn btn-lg btn-light-primary me-3'
                        data-kt-stepper-action='previous'
                      >
                        <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                        Voltar
                      </button>
                    </div>
                    <div>
                      {isSubmitButton ? (
                        <button
                          className='btn btn-lg btn-success'
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_sucesso"
                          type="submit">
                          <span className='indicator-label'>
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                          </span>
                          <KTIcon iconName="arrow-right"
                            className="fs-3 ms-2 me-0" />
                        </button>
                      ) : (
                        <button
                          className='btn btn-lg btn-primary'
                          type="submit">
                          <span className='indicator-label'>Avançar</span>
                        </button>
                      )}
                    </div>
                  </div>                  
                  <pre>{JSON.stringify(formikProps, null, 2)}</pre>
                </Form>
              )}

            </Formik>
            </PacienteContextProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
export { CadastroLaudoWiz }

/* Progress bar */
type LoadingBar = {
  className: string
  color: string
  progress: string
  title: string
  description: string
}



const ProgressBarra: React.FC<LoadingBar> = ({ className, color, title, description, progress }) => {
  return (
    <div className={`${className}`}>
      {/* begin::Body */}
      <div className='card-body my-3'>
        <div className={`progress h-7px bg-${color} bg-opacity-50 mt-7`}>
          <div
            className={`progress-bar bg-${color}`}
            role='progressbar'
            style={{ width: progress }}
          />
        </div>
      </div>
      {/* end:: Body */}
    </div>
  )
}
export { ProgressBarra }
/* Progress bar */