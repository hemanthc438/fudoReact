import {useRouteError,Link} from 'react-router-dom'
const ErrorPage = () =>{
    const error=useRouteError()
    return (
        <div>
            <h1>{error.status} {error.statusText}</h1>
            <p>{error.data}</p>
            <button><Link to={'/'}>Home</Link></button>
        </div>
    )
}

export default ErrorPage;