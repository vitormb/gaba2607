import React, { useState, useEffect, createContext } from 'react';
import { PacienteContextProvider, usePacienteContext } from './PacienteContext';
import axios from 'axios';
import { 
  Column,
  Table as ReactTable,
  PaginationState,
  getFilteredRowModel,
  Row,
  getPaginationRowModel,
  OnChangeFn,
  createColumnHelper,
  flexRender,
  ColumnDef,
  getSortedRowModel,
  SortingState,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
 
type Paciente = {
  id: number;
  nome: string;
  nome_completo: string;
  idade: number;
  genero: string;
  selecionar: string;
  nomeCompleto: string; // adicionar propriedade
  dataNascimento: string; // adicionar propriedade
  data_nascimento: string;
  enderecos: Enderecos[];
};

type Enderecos = {
  cidade: string;
}

const calculateAge = (birthdate: string) => {
  const currentDate = new Date();
  const parsedBirthdate = new Date(birthdate);
  let age = currentDate.getFullYear() - parsedBirthdate.getFullYear();

  const currentMonth = currentDate.getMonth();
  const birthdateMonth = parsedBirthdate.getMonth();

  if (birthdateMonth > currentMonth || (birthdateMonth === currentMonth && parsedBirthdate.getDate() > currentDate.getDate())) {
    age--;
  }

  return age;
};

const fixNomeCompleto = (nomeCompleto: string) => {
  const nome_completo = nomeCompleto;
}

const ListagemDePacientes: React.FC = () => {
  const { selectedData, setSelectedData } = usePacienteContext();
  const [users, setUsers] = useState<Paciente[]>([]);
  const [data, setData] = useState<Paciente[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [cidade, setCidade] = useState<string>('');

  const [exportedData, setExportedData] = useState<Paciente | null>(null);    
  const rerender = React.useReducer(() => ({}), {})[1];
  const refreshData = () => setData(() => users);
  const columnHelper = createColumnHelper<Paciente>();
  
  const handleSelect = (row: Row<Paciente>) => {
    const { nomeCompleto, nome_completo, id, dataNascimento, genero, enderecos } = row.original;
    const idade = calculateAge(dataNascimento);
    const objetoSelecionado: Paciente = {
      nomeCompleto, // usar nomeCompleto diretamente aqui
      nome_completo,
      id,
      idade,
      genero,
      selecionar: '',            
      enderecos: enderecos,
      nome: '',
      dataNascimento: dataNascimento,
      data_nascimento: dataNascimento
    };
    
    setSelectedData(objetoSelecionado);
    console.log('Objeto selecionado:', objetoSelecionado);    
  };

  const columns = React.useMemo<ColumnDef<Paciente>[]>(
    () => [
      {
        accessorKey: 'id',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row.nomeCompleto,
        id: 'nomeCompleto',
        cell: info => info.getValue(),
        header: () => <span>Nome Completo</span>,
        footer: props => props.column.id,
      },      
      {
        accessorFn: row => row.genero,
        id: 'genero',
        cell: info => info.getValue(),
        header: () => <span>Gênero</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => calculateAge(row.dataNascimento),
        id: 'idade', 
        cell: info => info.getValue(),
        header: () => <span>Idade</span>,
        footer: props => props.column.id,
      },
      {
        id: 'selecionar',
        cell: (info) => (
          <a className='btn btn-primary btn-sm' data-bs-dismiss="modal" onClick={() => handleSelect(info.row)}>Selecionar</a>
        ),
        header: () => <span>Selecionar</span>,
        footer: (props) => props.column.id,
      },
    ],
    []
  );
  
  const table = useReactTable({
    data: React.useMemo(() => data, [data]),
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // Pipeline    
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //    
    debugTable: true,
  })

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://127.0.0.1:3333/pacientes');
  
        // Mapeie a resposta para criar uma nova versão onde a propriedade 'nome_completo'
        // é copiada para 'nomeCompleto' e 'data_nascimento' para 'dataNascimento'.
        const updatedData = response.data.map((paciente: Paciente) => {
          // Extrair os componentes da data
          const [year, month, day] = paciente.data_nascimento.split("-");
          
          // Reformatar a data
          const dataNascimento = `${year}-${month}-${day}`;
  
          return {
            ...paciente,
            nomeCompleto: paciente.nome_completo,
            dataNascimento: dataNascimento, // aqui está a nova propriedade
          };
        });
  
        setUsers(updatedData);
        setData(updatedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, []);

  const btnPrevPg = !table.getCanPreviousPage();
  const btnNextPg = !table.getCanNextPage();
  return (
    <div className='table-responsive table-loading'>      
      <div className='mb-5 row justify-content-between align-items-center'>
        <div className='col-3'>
        {table.getHeaderGroups().map(headerGroup => (
          <div key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              return (
                <div key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div className='holdall text-uppercase'>
                      {header.column.id === 'nome_completo' && header.column.getCanFilter() ? (
                        <Filter column={header.column} table={table} />
                      ) : null}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>         
        <div className='col-2'>        
          <select
            className='form-select form-select-solid'
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>          
        </div>
        {/*
        <div className='pt-2'>
          <span className='text-right'>Mostrando {table.getRowModel().rows.length} pacientes</span>
        </div>
        */}
      </div>
      <div className={`table-loading-message ${loading}`}>Carregando...</div>      
      <table className="table table-rounded table-striped table-bordered gy-4 gs-4">             
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr className="bg-black bg-opacity-25 hoverable fw-bold fs-6 text-gray-800 border-bottom border-gray-200" key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div className='holdall text-uppercase'>                       
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr className='bg-hover-secondary text-hover-inverse-secondary align-middle' key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>        
      </table>
      <div className='col-2 text-start text-gray-600'>
        Página: {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
      </div>
      <div className="flex items-center gap-2 mb-15">
        <ul className="pagination">
          <li className={`${btnPrevPg ? 'disabled' : 'enabled'} page-item previous`}>
            <a className="page-link" onClick={() => table.setPageIndex(0)}>
              <i className="previous"></i>
            </a>
          </li>
          {Array.from({ length: table.getPageCount() }, (_, index) => (
            <li key={index} className={`page-item ${index === table.getState().pagination.pageIndex ? 'active' : ''}`}>
              <a className="page-link" onClick={() => table.setPageIndex(index)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li className={`${btnNextPg ? 'disabled' : 'enabled'} page-item next`}>
            <a className="page-link" onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
              <i className="next"></i>
            </a>
          </li>
        </ul>
      </div>
      {/** Debug
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
       */}
    </div>
  )
}
function Filter({
  column,
  table,
}: {
  column: Column<any, any>
  table: ReactTable<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2" hidden>
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={e =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={e =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={(columnFilterValue ?? '') as string}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Nome do paciente`}
      className="form-control form-control-lg form-control-solid"
    />
  )
}

export default ListagemDePacientes;