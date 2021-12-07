import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetMeals from "./components/GetMeals";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/Home";
import Meal from "./components/Meal";
import AddMeal from "./components/AddMeal";
import AddReview from "./components/AddReview";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/meals">
          <GetMeals />
        </Route>
        <Route exact path="/meals/addmeal">
          <AddMeal />
        </Route>
        <Route exact path="/meals/:id">
          <Meal />
        </Route>
        <Route exact path="/meals/:id/addreview">
          <AddReview />
        </Route>

      </Switch>     
      <Footer />
    </Router>
  );
}

export default App;
