import { FilterContainer } from './Filter.styled';
import { FaPlus } from "react-icons/fa";

interface DadosInterface {
  filtros: string[];
  RemoverTodosOsFiltros: () => void;
  RemoverFiltroDoArray: (item: string) => void;
}

export default function Filter({ filtros, RemoverTodosOsFiltros, RemoverFiltroDoArray }: DadosInterface) {

  return (
    <>
      {filtros.length === 0 ? (
          <></>
        ) : (
        
        <FilterContainer>
          <div className='filtros-div'>
            {filtros.map((item, index) => (
              <div key={index} className='filtro-button-div'>
                <span className='filtro-button'>
                  {item}
                </span>
                <div onClick={() => { RemoverFiltroDoArray(item) }} className='x-button-div'>
                  <FaPlus />
                </div>
              </div>
            ))}
          </div>
          <a className='clear-button' onClick={RemoverTodosOsFiltros}>Clear</a>
        
        </FilterContainer >
      )
}
    </>
  )
}