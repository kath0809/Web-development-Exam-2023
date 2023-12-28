import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainNavigation from '../shared/MainNavigation'
import { HomePage, QuizPage, RacesPage, TeamsPage, ManageTeamPage, DriversPage } from '../pages'


const RoutingMain = () => {
    return (
        <BrowserRouter>
        <header>
            <MainNavigation></MainNavigation>
        </header>

        <main className='container'>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='drivers' element={<DriversPage/>}/>
    <Route path='teams' element={<TeamsPage/>}/>
    <Route path='races' element={<RacesPage/>}/>
    <Route path='manageTeam' element={<ManageTeamPage/>}/>
    <Route path='quiz' element={<QuizPage/>}/>
    
  </Routes>    
        </main>
        </BrowserRouter>
    )
}

export default RoutingMain;