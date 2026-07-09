import { useState } from "react";
import { AppContainer } from "./App.styled";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/Filter/Filter";

function App() {
  const [filtros, setFiltros] = useState<string[]>([]);

  const AtualizarValorDeFiltros = (array: string[]) => {
    setFiltros(array);
  }

  const RemoverFiltroDoArray = (item: string) => {
    const novoArray = [...filtros]
    const novoArraySemOItem = novoArray.filter(valor => valor != item);
    setFiltros(novoArraySemOItem)
  };

  const RemoverTodosOsFiltros = () => {
    setFiltros([]);
  };

  return (
    <>
      <Navbar />
      <AppContainer>
        <Filter filtros={filtros}
          RemoverFiltroDoArray={RemoverFiltroDoArray}
          RemoverTodosOsFiltros={RemoverTodosOsFiltros}
        />
        <Card AtualizarValorDeFiltros={AtualizarValorDeFiltros} filtros={filtros} />
      </AppContainer>
    </>
  )
}

export default App
