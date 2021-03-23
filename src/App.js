import "./App.css";
import Home from "./pages/home/home";
import AboutUs from "./pages/about-us/aboutUs";
import ContactUs from "./pages/contactUs/contactUs";
import Register from "./pages/register/register";
import { Switch, Route } from "react-router-dom";
import Events from "./pages/Events/Events";
import EventPage from "./pages/Events/EventPage";
import ProEvents from "./pages/ProEvents/ProEvents";
import ProEventPage from "./pages/ProEvents/ProEventsPage";
import RegistrationSuccess from "./pages/registerSuccess/registerSuccess";
import GuardedRoute from "./components/guardedRoute/guardedRoute";

function App() {
  console.log(localStorage.getItem("auth"));
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home className="home-page" />
          <AboutUs />
          <Events />
          <ProEvents />
          <ContactUs />
        </Route>
        <Route path="/event/:id">
          <EventPage />
        </Route>
        <Route path="/proevent/:id">
          <ProEventPage />
        </Route>
        <Route path="/registeration/:id">
          <Register />
        </Route>
        <GuardedRoute
          exact
          path="/registeration-success"
          component={RegistrationSuccess}
          auth={localStorage.getItem("auth") ? true : false}
        />
      </Switch>
    </div>
  );
}

export default App;
