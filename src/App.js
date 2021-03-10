import logo from './logo.svg';
import './App.css';
import Events from './components/Events/Events';
import { Route, Switch } from 'react-router';
import EventPage from './components/Events/EventPage';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Events} />
          <Route path="/event/:id" component={EventPage} />
      </Switch>
      
    </div>
  );
}

export default App;
