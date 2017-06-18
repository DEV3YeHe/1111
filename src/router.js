import React from 'react';
import { Router, Route } from 'dva/router';

import Login from './routes/Login';

import Dashboard from "./routes/Dashboard";

import Viscera from "./routes/Viscera.js";

import Behavior from "./routes/Behavior.js";

import Reflective from "./routes/Reflective.js";

import SkillTrees from "./routes/SkillTrees.js";

// <Redirect from="/" to="/login" />

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/viscera" component={Viscera} />
      <Route path="/Behavior" component={Behavior} />
      <Route path="/Reflective" component={Reflective} />
      <Route path="/SkillTrees" component={SkillTrees} />
    </Router>
  );
}

export default RouterConfig;
