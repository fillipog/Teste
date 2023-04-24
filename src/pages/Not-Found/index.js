import './error.scss'

function NotFound(){
    return(
        <div className="error-page">
            <h1>Página não encontrada</h1>
            <a href='/'>Pagina inicial</a>
        </div>
    )
}

export default NotFound;