import estilos from './Navbar.module.css'

export function Navbar(){
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}