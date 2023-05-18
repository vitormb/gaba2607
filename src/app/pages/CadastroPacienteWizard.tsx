import React, { FC, useEffect, useRef, useState } from 'react'
import { Passo1 } from './passos-cadastro-paciente/passo1'
import { Passo2 } from './passos-cadastro-paciente/passo2'
import { Passo3 } from './passos-cadastro-paciente/passo3'
import { Passo4 } from './passos-cadastro-paciente/passo4'
import { Passo5 } from './passos-cadastro-paciente/passo5'
import { KTIcon } from '../../_metronic/helpers'
import { StepperComponent } from '../../_metronic/assets/ts/components'
import { Form, Formik, FormikHelpers, ErrorMessage, FormikValues } from 'formik'
import { createPacienteSchemas, ICreatePaciente, inits } from './passos-cadastro-paciente/CadastrarPacienteWizardHelper'
import axios, { AxiosError } from 'axios';
import * as Yup from 'yup';

const CadastroPacienteWiz: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [show, setShow] = useState(false);
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createPacienteSchemas[0])
  const [initValues] = useState<ICreatePaciente>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
 
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    stepper.current.goPrev()
    setCurrentSchema(createPacienteSchemas[stepper.current.currentStepIndex - 1])
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)
  }

  async function test() {
    console.log('start timer');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('after 1 second');
  }

  const postData = async (data: ICreatePaciente) => {
    
    try {
      const response = await axios.post('http://127.0.0.1:3333/pacientes', data);      
      console.log(response.data); // Handle the successful response as needed    
      alert('Cadastro realizado com sucesso!');
      setIsModalOpen(true);      
    } catch (error) {
      if ((error as AxiosError).response) {
        // The request was made and the server responded with a status code
        setIsModalOpen(true);
        const axiosError = error as AxiosError;
        console.error('Error in postData:', axiosError.response?.data);
        console.error('Status code:', axiosError.response?.status);
        console.error('Response headers:', axiosError.response?.headers);
        alert(axiosError.response?.data.errors[0].message);
        
      } else if ((error as AxiosError).request) {
        // The request was made but no response was received
        console.error('No response received:', (error as AxiosError).request);
      } else {
        // Something happened in setting up the request that triggered an error
        const genericError = error as Error;
        console.error('Error during request setup:', genericError.message);
      }
      throw error;
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitForm = (values: ICreatePaciente, actions: FormikValues) => {
    if (showModal) {
      submitStep(values, actions);
    }
  };

  const submitStep = async (values: ICreatePaciente, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext();
      console.log(stepper.current.currentStepIndex);
    } else {
      try {
        await postData(values);
        setSuccess('Form submitted successfully.'); // Set the success message
      } catch (error) {
        // Handle form submission error
        if ((error as AxiosError).response) {
          
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
    setCurrentSchema(createPacienteSchemas[stepper.current.currentStepIndex - 1])
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
                  <h3 className='stepper-title'>Dados do novo paciente</h3>
                  <div className='stepper-desc fw-semibold'>Informações gerais</div>
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
                  <h3 className='stepper-title'>Endereço</h3>
                  <div className='stepper-desc fw-semibold'>Informações de residência</div>
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
                  <h3 className='stepper-title'>Informações de contato</h3>
                  <div className='stepper-desc fw-semibold'>Contatos</div>
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
                  <h3 className='stepper-title'>Responsável legal</h3>
                  <div className='stepper-desc fw-semibold'>Opcional</div>
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
                  <h3 className='stepper-title'>Conclusão</h3>
                  <div className='stepper-desc fw-semibold'>Revisão e cadastro</div>
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

      <div className='d-flex flex-row-fluid flex-center bg-body rounded'>
         {isModalOpen && (  
        <div className="modal fade" tabIndex={-1} id={`kt_modal_erro`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10">
                <i className="ki-duotone ki-question fs-5x text-danger">
                  <i className="path1"></i>
                  <i className="path2"></i>
                  <i className="path3"></i>
                </i>
                <div className="text-center">
                  <h5 className="fw-bolder fs-1 mb-5"></h5>
                  <div className="separator separator-dashed border-danger opacity-25 mb-5"></div>
                  <div className="mb-9">
                    ERRO ERRO ERRRO  <span className="close" onClick={closeModal}>XX</span>
                  </div>
                  <div className="d-flex flex-center flex-wrap"> 
                    <button data-bs-dismiss="modal" aria-label="Cancelar" className="btn btn-outline btn-outline-danger btn-active-danger m-2">Cancelar</button>
                    <button data-bs-dismiss="modal" aria-label="Apagar" className="btn btn-danger m-2">Ok, apagar</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>)}
        
        <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep} status={apiResponse}>
          {(formikProps) => (
            <Form className='col-lg-12 p-5' noValidate id='kt_create_account_form'>
              <div className='current' data-kt-stepper-element='content'>
                <Passo1 />
              </div>

              <div data-kt-stepper-element='content'>
                <Passo2 {...formikProps} />
              </div>

              <div data-kt-stepper-element='content'>
                <Passo3 {...formikProps} />
              </div>

              <div data-kt-stepper-element='content'>
                <Passo4 {...formikProps} />
              </div>

              <div data-kt-stepper-element='content'>
                <Passo5 {...formikProps} />
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
                    Voltar
                  </button>
                </div>

                <div>

                  <button
                    type={isSubmitButton ? 'submit' : 'submit'} 
                    className='btn btn-lg btn-primary me-3'                    
                  >
                    <span className="indicator-label">
                      {isSubmitButton ? 'Enviar' : 'Continuar'}
                      <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0" />
                    </span>
                  </button>                  
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export { CadastroPacienteWiz }

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