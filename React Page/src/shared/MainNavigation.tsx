import { Link } from 'react-router-dom'

const MainNavigation = () => {
    return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid navbar-expand-lg'>
      <a className='navbar-brand text-danger'> <img id="nav-bar-logo" src="/images/icon1.png" alt=""/>F1</a>
      <ul className='nav justify-content-end flex-nowrap'>
        <li className='nav-item p-2'><Link className='link-underline link-underline-opacity-0 link-danger fs-3 white-on-hover' to='/'> Home </Link></li>
        <li className='nav-item p-2'><Link className='link-underline link-underline-opacity-0 link-danger fs-3 white-on-hover' to='drivers'> Drivers </Link></li>
        <li className='nav-item p-2'><Link className='link-underline link-underline-opacity-0 link-danger fs-3 white-on-hover' to='teams'> Teams </Link></li>
        <li className='nav-item p-2'><Link className='link-underline link-underline-opacity-0 link-danger fs-3 white-on-hover' to='races'> 2023 Races </Link></li>
        <li className='nav-item p-2'><Link className='link-underline link-underline-opacity-0 link-danger fs-3 white-on-hover' to='manageTeam'>Manage Teams</Link></li>
        <li className='nav-item p-2'><Link className='link-underline link-underline-opacity-0 link-danger fs-3 white-on-hover' to='quiz'>Quiz</Link></li>
      </ul>
      </div>
    </nav>
    )
}

export default MainNavigation