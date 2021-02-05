import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContainerCallBackGoogleAuth from './google/ContainerCallBackGoogleAuth';
import ContainerCallBackFacebookAuth from './facebook/ContainerCallBackFacebookAuth';
import ContainerCallBackEmailAuth from './email/ContainerCallBackEmailAuth';


const AuthCallback = () => {
  return (
    <>
      <Switch>
        <Route component={ContainerCallBackGoogleAuth} path='/auth/google/callback' exact />
        <Route component={ContainerCallBackEmailAuth} path='/auth/email/callback' exact />
        <Route component={ContainerCallBackFacebookAuth} path='/auth/facebook/callback' exact />
      </Switch>
    </>
  )

}

export default AuthCallback