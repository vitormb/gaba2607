import React, { FC, useState, useEffect, useRef } from 'react';
import { KTSVG, KTIcon, toAbsoluteUrl } from '../../../../_metronic/helpers';
import { Formik, Form, Field, ErrorMessage, useFormikContext, FormikValues } from 'formik';
import { Link } from 'react-router-dom';

import { Passo1 } from './passos-modal-wizard/passo1';
import { Passo2 } from './passos-modal-wizard/passo2';
import { Passo3 } from './passos-modal-wizard/passo3';

import { wizModalcreateTesteSchemas, CreateTesteProperties, inits } from './wizard-base-helper';

import { StepperComponent } from '../../../../_metronic/assets/ts/components';

const ModalComWizardForm: FC = () => {

    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const [currentSchema, setCurrentSchema] = useState(wizModalcreateTesteSchemas[0])
    const [initValues] = useState<CreateTesteProperties>(inits)
    const [isSubmitButton, setSubmitButton] = useState(false)

    const loadStepperWiz = () => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    }
    const prevStepWiz = () => {
        if (!stepper.current) {
            return
        }
        stepper.current.goPrev()
        setCurrentSchema(wizModalcreateTesteSchemas[stepper.current.currentStepIndex - 1])
        setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)
    }

    const nextStepWiz = () => {
        if (!stepper.current) {
            return
        }
        stepper.current.goNext()
        setCurrentSchema(wizModalcreateTesteSchemas[stepper.current.currentStepIndex + 1])
    }

    const submitStepWiz = (values: CreateTesteProperties, actions: FormikValues) => {
        if (!stepper.current) {
            return
        }
        if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
            stepper.current.goNext()
        } else {
            stepper.current.goto(1)
            actions.resetForm()
        }
        setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)
        setCurrentSchema(wizModalcreateTesteSchemas[stepper.current.currentStepIndex - 1])
    }

    useEffect(() => {
        if (!stepperRef.current) {
            return
        }
       loadStepperWiz()
    }, [stepperRef])

    return (
        <div className='card'>
            <div className='card-body'>
                <div
                    ref={stepperRef}
                    className='stepper stepper-links d-flex flex-column pt-15'
                    id='kt_wizard_modal_stepper'>
                    
                    
                    <div className='current' data-kt-stepper-element='content'>
                        <Passo1/>
                    </div>
                    <div data-kt-stepper-element='content'>
                        <Passo2 />
                    </div>
                    <div data-kt-stepper-element='content'>
                        <Passo3 />
                    </div>
                    
                    <div className='d-flex flex-stack pt-15'>
                        <div className='mr-2'>
                            <button
                                onClick={prevStepWiz}
                                type='button'
                                className='btn btn-lg btn-light-primary me-3'
                                data-kt-stepper-action='previous'
                            >
                                <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                                Voltar
                            </button>
                            <button
                                onClick={nextStepWiz}
                                type='button'
                                className='btn btn-lg btn-light-primary me-3'
                                data-kt-stepper-action='next'
                            >
                                <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                                Avançar
                            </button>
                        </div>
                        <div>
                            <button type='submit' className='btn btn-lg btn-primary me-3'>
                                <span className='indicator-label'>
                                    {!isSubmitButton && 'Continue'}
                                    {isSubmitButton && 'Submit'}
                                    <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComWizardForm;