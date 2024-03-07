import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ActiveFolders from "../pages/ActiveFolders";
import Users from "../pages/Users";
import NewUser from '../pages/NewUser';

const CustomRouter = () => {
    return(
        <Router>
            <Routes>
                {/*<Route path='*' element={<Page404 />} />*/}
                <Route path='/' element={<ActiveFolders/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/newuser' element={<NewUser/>}/>
            </Routes>
        </Router>
    )
}

export default CustomRouter