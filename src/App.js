import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Member from './components/pages/Member';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/members' component={Member} />
          <Route path='/EDD' component={() => { window.location = 'https://drive.google.com/file/d/1FnoS75wGjpmN-BD4MXKzMir52gCQuoUD/view?usp=sharing'; return null;} }/>
          <Route path='/demo' component={() => { window.location = 'https://drive.google.com/file/d/1U6FwbblKZm2_XxCVVH59AsPC4qASDSVO/view?usp=sharing'; return null;} }/>
          <Route path='/TD' component={() => { window.location = 'https://drive.google.com/file/d/1BUMIyzzBqS-pyWbEEHBY0JYAshU6HgZv/view?usp=sharing'; return null;} }/>
          <Route path='/harry' component={() => { window.location = 'https://www.linkedin.com/in/harry-zhou-408374125/'; return null;} }/>
          <Route path='/chris' component={() => { window.location = 'https://www.linkedin.com/in/christopher-williams-299904100/'; return null;} }/>
          <Route path='/zack' component={() => { window.location = 'https://www.linkedin.com/in/zachary-houghton-10a187174/'; return null;} }/>
          <Route path='/ling' component={() => { window.location = 'https://www.linkedin.com/in/liling810/'; return null;} }/>
          <Route path='/nghi' component={() => { window.location = 'https://www.linkedin.com/in/ethan-le-ba8482123/'; return null;} }/>
          <Route path='/nath' component={() => { window.location = 'https://www.linkedin.com/in/nathanshangkala/'; return null;} }/>
          <Route path='/kaushik' component={() => { window.location = 'https://www.linkedin.com/in/kaushik-vishwanath/'; return null;} }/>
          <Route path='/github' component={() => { window.location = 'https://github.com/ViZDoomBot/stable-baselines-agent'; return null;} }/>
        
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
