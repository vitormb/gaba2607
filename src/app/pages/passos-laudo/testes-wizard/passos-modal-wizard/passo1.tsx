/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext, FormikValues } from 'formik';
import { Link } from 'react-router-dom'
import handleDadosModal, {TestesProps} from '../modal-base';

import ContainerPrincipalTestes from '../container-principal-testes'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'

  interface Teste {
    nome: string;
    descricao: string;
    pontuacao: number;
  }

  const defaultData: Teste[] = [
    {
    nome: 'Exemplo de teste',
    descricao: 'Exemplo de descrição',
    pontuacao: 10,
    },
    {
    nome: 'Exemplo de teste',
    descricao: 'Exemplo de descrição',
    pontuacao: 10,
    },
    {
    nome: 'Exemplo de teste',
    descricao: 'Exemplo de descrição',
    pontuacao: 10,
    },
    {
    nome: 'Exemplo de teste',
    descricao: 'Exemplo de descrição',
    pontuacao: 10,
    }
]
const columnHelper = createColumnHelper<Teste>()
const columns = [    
    columnHelper.accessor(row => row.nome, {
      id: 'nome',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Nome do Teste</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.descricao, {
        id: 'descricao',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Descrição</span>,
        footer: info => info.column.id,
    }),
      columnHelper.accessor(row => row.pontuacao, {
        id: 'pontuacao',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Pontuação</span>,
        footer: info => info.column.id,
    })
  ]
  function TabelaTeste() {
    const [data, setData] = React.useState(() => [...defaultData])
    const rerender = React.useReducer(() => ({}), {})[1]
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
  
    return (
      <div className="p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="h-4" />
        <button onClick={() => rerender()} className="border p-2">
          Rerender
        </button>
      </div>
    )
  }

  interface TabelaTesteProps {
    value: string;
  }

const Passo1: FC = () => {   
  
    const handleValueChange = (value: string) => {
      console.log('Novo valor:', value);
      // Faça o que for necessário com o novo valor (por exemplo, enviar para outra página)
    };

    const titulo = 'Passo1'
    const handleDadosModal = (dados: TestesProps) => {
        // Faça o processamento dos dados recebidos aqui
        console.log(dados);
      }
    return (
        <div className='container'>
            <div className='mt-5 col-12 mb-5'>
                <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
                    <i className='bi bi-arrow-right-circle-fill ms-2 fs-4x me-4 text-color-primary'
                        data-bs-toggle='tooltip'
                        title='Dados do Paciente'
                    ></i>
                    {titulo}
                </h2>
                <div className='text-gray-400 fw-bold fs-6'>
                    Marque os encaminhamentos para este paciente: <button className='btn btn-primary' ></button>                  
                </div>
            </div>
            <div className='progresso col-12'>
                <button className='btn btn-primary'></button>
                <ContainerPrincipalTestes initialValue="Valor inicial" onValueChange={handleValueChange}>
                  asd                 
                </ContainerPrincipalTestes>
            </div>

            <div className='fv-row'>
                <div className='row'>
                    <div className='col-lg-12 mt-10'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Passo1 }