import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stelthcontent from './components/Stelthcontent';
import Movingcontent from './components/Movingcontent';
import Navbar from './components/Navbar';

import Homepage from './components/Homepage/Homepage';
import Headsec from './components/Headsec';
import Deaprtment from './components/Deaprtment';
import Principlemsg from './components/Principalmsg';
import Deptnavbar from './components/department/Deptnavbar';
import Abouthod from './components/Abouthod';
import Branches from './components/Branches';
import Deptabout from './components/department/Deptabout';
import Welcomedept from './components/Welcomedept';

function App() {
    return (
        <Router>
            <div className='App'>
                <Stelthcontent />
                <Switch>
                    <Route exact path='/'>
                        <Homepage />
                    </Route>
                    <Route exact path='/Home'>
                        <Headsec />
                        <div className='stelthcontent'>
                            <Navbar />
                        </div>
                        <Movingcontent />
                    </Route>
                    <Route exact path='/Department'>
                        <Headsec />
                        <Navbar />
                        <Branches />
                    </Route>
                    <Route exact path='/principalmsg'>
                        <Headsec />
                        <Navbar />
                        <div className=' movingcontent'>
                            <Principlemsg />
                        </div>
                    </Route>
                    <Route exact path='/Abouthod'>
                        <Headsec />
                        <Deptnavbar />
                        <div className=' movingcontent'>
                            <Abouthod />
                        </div>
                    </Route>
                    <Route exact path='/computerengineering'>
                        <Headsec />
                        <Deptnavbar />
                        <div className=' movingcontent'>
                            <Welcomedept />
                        </div>
                    </Route>
                    <Route exact path='/deptabout'>
                        <Headsec />
                        <Deptnavbar />
                        <div className=' movingcontent'>
                            <Deptabout />
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
