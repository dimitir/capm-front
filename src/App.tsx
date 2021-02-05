import { Component } from "react";
import React from "react";
import "./app.global.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "./store/storeConfig/rootReducers";
import ContainerNavbar from "./views/navbar/ContainerNavbar";
import AuthCallback from "./views/auth/AuthCallback";
import CreateHike from "./views/pages/hikes/createHikes/CreateHike";
import ContainerModalsCreator from "./views/modals/ContainerModalsCreator";
import CssBaseline from "@material-ui/core/CssBaseline";
import ContainerHikes from "./views/pages/hikes/hikesList/ContainerHikes";
import ContainerHikeOne from "./views/pages/hikes/hikeOne/ContainerHikeOne";
import Blogs from "./views/pages/blogs/Blogs";
import MainLayout from "./views/layout/mainLayout/MainLayout";

const App = () => {
  const user = useSelector((state) => state.user.user);
  console.log("user", user);

  return (
    <>
      <CssBaseline />
      <ContainerModalsCreator />
      <Router>
        <ContainerNavbar />
        <Switch>
          <MainLayout>
            <Route path="/" exact>
              <Redirect to="/hikes" />
            </Route>
            <Route component={ContainerHikes} path="/hikes" exact />
            <Route component={ContainerHikeOne} path="/hike/:id" />
            <Route component={CreateHike} path="/hikes/new" exact />
            {/* <Route path="/hikes/new" exact>
              {user.auth ? <ContainerHikeCreate /> : <Redirect to="/hikes" />}
            </Route> */}
            <Route component={Blogs} path="/blog" exact />
            <Route component={AuthCallback} />
          </MainLayout>
        </Switch>
      </Router>
    </>
  );
};

export default App;
