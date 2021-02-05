import { Component } from "react";
import React from "react";
import "./app.global.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContainerNavbar from "./components/navbar/ContainerNavbar";
import AuthCallback from "./components/authFront/AuthCallback";
import ContainerHikeCreate from "./components/pages/hikes/createHikes/ContainerCreateHike";
import ContainerModalsCreator from "./components/modals/ContainerModalsCreator";
import CssBaseline from "@material-ui/core/CssBaseline";
import ContainerHikes from "./components/pages/hikes/ContainerHikes";
import ContainerHikeOne from "./components/pages/hikes/hikeOne/ContainerHikeOne";
import Blogs from "./components/pages/blogs/Blogs";
import MainLayout from "./components/layout/mainLayout/MainLayout";

const App = () => {
  return (
    <>
      <CssBaseline />
      <ContainerModalsCreator />
      <Router>
        <ContainerNavbar />
        <Switch>
          <MainLayout>
            <Route component={ContainerHikes} path="/" exact />
            <Route component={ContainerHikeOne} path="/hike/:id" />
            <Route component={ContainerHikeCreate} path="/going" exact />
            <Route component={Blogs} path="/blog" exact />
            <Route component={AuthCallback} />
          </MainLayout>
        </Switch>
      </Router>
    </>
  );
};

export default App;
