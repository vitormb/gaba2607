import React, {FC, useState} from 'react'
let indexdata = 1
interface AccordionElementProps {
  icon: string
  title: string
  cogarea: string
  friendlytitle: string
  content: React.ReactNode
}

export const CreateAccordionElement: React.FC<AccordionElementProps> = ({
  icon,
  title,
  cogarea,
  friendlytitle,
  content,
}) => {
  const accordionKey = friendlytitle.replace(/\s+/g, '')
  const [isExpanded, setIsExpanded] = useState<{[key: string]: boolean}>({})
  let numeroAccordion = 0
  var accordionId = `accordion_${indexdata++}`
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
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
