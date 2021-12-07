import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import GetMeals from "./components/TestComponent/GetMeals";
import Header from "./components/TestComponent/Header";
import Footer from "./components/TestComponent/Footer";
import About from "./components/TestComponent/Home";
import Meal from "./components/TestComponent/Meal";
import AddMeal from "./components/TestComponent/AddMeal";
import AddReview from "./components/TestComponent/AddReview";
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
