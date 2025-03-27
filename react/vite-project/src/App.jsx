// modificamos o nome do 'app.module.css' para estilos, ou seja podemos modificar o nome para qualquer que quisermos 
import estilos from './App.module.css';
import { Header } from './component/Header';
import { Navbar } from './component/navbar';
import { Conteudo } from './component/Conteudo';
import { Fimpag } from './component/Fimpag';


// A estrutura básica do React é a utilização de funções 
function App() {
  // para trazer o resultado da função eu coloco o que eu quero no Return que deve ter apenas 1 componente
  return (
    // // Modificamos o nome do arquivo css, e puxamos a class que criamos dentro do CSS
    // // estilos é o arquivo css que criamos
    // // Tags fantasmas são usadas para aplicarmos duas ou mais tags no mesmo componente 
    // <>
    //   <h1 className={estilos.titulo}>DS 16</h1>
    //   <h3>O melhor</h3>
    // </>
    <>
    <Header/>
    <Navbar/>
    <Conteudo/>
    <Fimpag/>
    </>


  )
}

export default App
