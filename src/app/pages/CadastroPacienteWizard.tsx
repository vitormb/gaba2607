import React, { FC, useEffect, useRef, useState } from 'react'
import { createPacienteSchemas, ICreatePaciente, inits } from './passos-cadastro-paciente/CadastrarPacienteWizardHelper'
import { StepperComponent } from '../../_metronic/assets/ts/components'
import { Form, Formik, FormikValues } from 'formik'
import { KTIcon } from '../../_metronic/helpers'
import { Passo1 } from './passos-cadastro-paciente/passo1'
import { Passo2 } from './passos-cadastro-paciente/passo2'
import { Passo3 } from './passos-cadastro-paciente/passo3'
import { Passo4 } from './passos-cadastro-paciente/passo4'
import { Passo5 } from './passos-cadastro-paciente/passo5'
import axios, { AxiosError } from 'axios';


const CadastroPacienteWiz: FC = () => {
  const [cadastroConcluido, setCadastroConcluido] = useState(false);
  const [cadastroCallback, setCadastroCallback] = useState('Aguardando...');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skin, setSkin] = useState('loading');    
  
  const handleCloseModal = () => setCadastroConcluido(false);
  
  // eslint-disable-next-line
  const [showModal, setShowModal] = useState(false); 
  // eslint-disable-next-line
  const [apiResponse, setApiResponse] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(''); 
  // eslint-disable-next-line
  const [success, setSuccess] = useState(''); 
  // eslint-disable-next-line
  const [show, setShow] = useState(false); 
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createPacienteSchemas[0])
  const [initValues] = useState<ICreatePaciente>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
 
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  } 

  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    stepper.current.goPrev()
    setCurrentSchema(createPacienteSchemas[stepper.current.currentStepIndex - 1])
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)
  } 

  const postData = async (data: ICreatePaciente) => {
    
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

  /* Faz um loop dos passos e enfim invoca o SubmitStep
  const submitForm = (values: ICreatePaciente, actions: FormikValues) => {
    if (showModal) {
      submitStep(values, actions);
    }
  };
  */

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
        setCadastroCallback('Cadastro realizado com sucesso!');
        setSkin('sucesso');
        //toastr.success("New order has been placed!");
        setTimeout(() => {
          setCadastroCallback('Redirecionando...');
          setCadastroConcluido(true);
          document.location.href = '/Listagem-Pacientes'
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
    setCurrentSchema(createPacienteSchemas[stepper.current.currentStepIndex - 1])
  } 

  const definirskin =
  skin === 'loading'
    ? 'bg-primary text-white'
    : skin === 'error'
    ? 'bg-danger text-white'
    : skin === 'sucesso'
    ? 'bg-success text-white'
    : 'Skin inválido';

    const definiralerta =
  skin === 'loading'
    ? 'Alerta'
    : skin === 'error'
    ? 'Erro'
    : skin === 'sucesso'
    ? 'Sucesso!'
    : 'Erro desconhecido';

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
      <div className="modal fade" id="kt_modal_sucesso" tabIndex={-1} aria-labelledby="kt_modal_sucesso" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className={`modal-header ${definirskin}`}>
              <h5 className="modal-title" id="kt_modal_sucesso">{definiralerta}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div dangerouslySetInnerHTML={{__html: cadastroCallback}}></div>
            </div>
            <div className="modal-footer">              
              <button type="button" data-bs-dismiss="modal" aria-label="Close" className={`btn text-white ${definirskin}`}>Ok</button>
            </div>
          </div>
        </div>
      </div>
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
                {isSubmitButton ? (
                  <button 
                  className='btn btn-lg btn-success me-3'
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
                  className='btn btn-lg btn-primary me-3'                  
                  type="submit">
                    <span className='indicator-label'>Avançar</span>
                  </button>
                )}   
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
      <div className=''>
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