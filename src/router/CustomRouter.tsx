import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ActiveFolders from "../pages/ActiveFolders";
import Users from "../pages/Users";
import NewUser from '../pages/NewUser';
import Tests from '../pages/Tests';

const CustomRouter = () => {
    return(
        <Router>
            <Routes>
                {/*<Route path='*' element={<Page404 />} />*/}
                <Route path='/' element={<ActiveFolders/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/newuser' element={<NewUser/>}/>
                <Route path='/tests' element={<Tests/>}/>
                <Route path='*' element={<ActiveFolders/>}/>
            </Routes>
        </Router>
    )
}

export default CustomRouter