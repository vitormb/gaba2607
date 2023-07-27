import { FC } from 'react'
const SideBarLaudo: FC = () => {
    return (
      <div       
      className='card stretch d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
      {/* begin::Wrapper*/}
      <div
      data-kt-sticky="true"
      data-kt-sticky-name="sticky-menu"
      data-kt-sticky-offset="{default: false, xl: '300px'}"
      data-kt-sticky-width="{lg: '250px', xl: '300px'}"
      data-kt-sticky-left="auto"
      data-kt-sticky-top="40px"
      data-kt-sticky-animation="true"
      data-kt-sticky-zindex="1"
      className='card-body px-5 px-lg-8 px-xxl-10 py-15'>        
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
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title fs-5 align-middle'>Dados do paciente</h3>                  
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}

            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
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
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Introdução</h3>                  
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
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
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Descrição da demanda</h3>                  
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
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
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Procedimentos</h3>                  
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
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
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Anamnese</h3>                  
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 5*/}
          

          {/* begin::Step 6*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>6</span>
              </div>
              {/* end::Icon*/}

              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Atitude do paciente</h3>                  
              </div>
              {/* end::Label*/}
            </div>
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
            {/* end::Wrapper*/}
          </div>
          {/* end::Step 6*/}

          {/* begin::Step 7*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>7</span>
              </div>
              {/* end::Icon*/}

              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Testes</h3>
                
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 7*/}

          {/* begin::Step 8*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>8</span>
              </div>
              {/* end::Icon*/}
              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Testes projetivos</h3>                
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 8*/}

          {/* begin::Step 9*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>9</span>
              </div>
              {/* end::Icon*/}
              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Resultados</h3>                
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 9*/}

          {/* begin::Step 10*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>10</span>
              </div>
              {/* end::Icon*/}
              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Tabela Geral</h3>                
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 10*/}

          {/* begin::Step 11*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>11</span>
              </div>
              {/* end::Icon*/}
              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Conclusões</h3>                
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 11*/}

          {/* begin::Step 12*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>12</span>
              </div>
              {/* end::Icon*/}
              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Encaminhamentos</h3>                
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 12*/}
          
          {/* begin::Step 13*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>13</span>
              </div>
              {/* end::Icon*/}
              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Sugestões para a escola</h3>                
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 13*/}
          
          {/* begin::Step 14*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>14</span>
              </div>
              {/* end::Icon*/}
              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Anexos</h3>                  
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 14*/}

          {/* begin::Step 15*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>15</span>
              </div>
              {/* end::Icon*/}
              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Bibliografia</h3>                  
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
            {/* begin::Line*/}
            <div className='stepper-line h-10px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 15*/}

          {/* begin::Step 16*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>16</span>
              </div>
              {/* end::Icon*/}
              {/* begin::Label*/}
              <div className='stepper-label mt-2'>
                <h3 className='stepper-title  fs-5 align-middle'>Publicar laudo</h3>                  
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}
          </div>
          {/* end::Step 16*/}

        </div>
        {/* end::Nav*/}
      </div>
      {/* end::Wrapper*/}
    </div>    
  )
}

export { SideBarLaudo }