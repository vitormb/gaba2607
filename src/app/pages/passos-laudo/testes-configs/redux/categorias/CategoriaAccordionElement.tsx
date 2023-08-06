import React, {FC, useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'
import TestesList from '../testes/testesList'
import Teste from '../testes/testesSlice'
let indexdata = 1

interface CategoriaAccordionElementProps {
  icon: string
  title: string
  friendlytitle: string
  categoriaId: string
}

export const CategoriaAccordionElement: React.FC<CategoriaAccordionElementProps> = ({
  icon,
  title,
  friendlytitle,
  categoriaId,
}) => {
  const accordionKey = friendlytitle.replace(/\s+/g, '')
  const [isExpanded, setIsExpanded] = useState<{[key: string]: boolean}>({})
  let numeroAccordion = 0
  var accordionId = `accordion_${indexdata++}`

  const testes = useSelector((state: RootState) =>
    state.testes.testes.filter((teste) => teste.categoriaId === categoriaId)
  )

  return (
    <div className='accordion' id={accordionId}>
      <div className='col'>
        <div className='card'>
          <div className='accordion-item col-12'>
            <h2 className='accordion-header'>
              <button
                className={`accordion-button fs-4 fw-bold ${
                  isExpanded[accordionKey] ? '' : 'collapsed'
                }`}
                type='button'
                onClick={() =>
                  setIsExpanded((prevState) => ({
                    ...prevState,
                    [accordionKey]: !prevState[accordionKey],
                  }))
                }
                aria-expanded={isExpanded[accordionKey] ? 'true' : 'false'}
                aria-controls={`kt_accordion_selecoes_body_${title}`}
              >
                <i className={icon}></i>
                <span className='ps-5'>{title}</span>
              </button>
            </h2>
            <div
              id={`kt_accordion_selecoes_body_${title}`}
              className={`accordion-collapse ${isExpanded[accordionKey] ? 'show' : 'collapse'}`}
              data-bs-parent={`#kt_accordion_selecoes_${title}`}
            >
              <div
                className={`accordion-collapse-${title} ${
                  isExpanded[accordionKey] ? '' : 'collapsed'
                }`}
              >
                <TestesList categoriaId={categoriaId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
