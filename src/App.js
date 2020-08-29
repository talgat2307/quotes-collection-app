import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/Home/Home';
import StarWars from './containers/Categories/StarWars';
import FamousPeople from './containers/Categories/FamousPeople';
import Motivational from './containers/Categories/Motivational';
import Humour from './containers/Categories/Humour';
import Saying from './containers/Categories/Saying';
import Add from './containers/Add/Add';
import Nav from './containers/Nav';
import Menu from './containers/Menu';
import Edit from './containers/Edit/Edit';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <div className='main-block'>
          <Menu/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/quotes/star-wars' component={StarWars}/>
            <Route path='/quotes/famous-people' component={FamousPeople}/>
            <Route path='/quotes/motivational' component={Motivational}/>
            <Route path='/quotes/humour' component={Humour}/>
            <Route path='/quotes/saying' component={Saying}/>
            <Route path='/add-quote' component={Add}/>
            <Route path='/quotes/:id/edit' component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
