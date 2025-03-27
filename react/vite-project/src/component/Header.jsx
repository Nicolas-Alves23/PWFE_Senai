import estilos from './Header.module.css'


// Estrutura básica de componentes
export function Header(){
    return(
        <header className={estilos.conteiner}>
            
            <h1>NicoFlix</h1>
            <h3>Vem que aqui temos o melhor catálogo de filmes</h3>
        </header>
    )
}