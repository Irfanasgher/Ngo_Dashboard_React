import React from "react";
import PrivateRoute from "./privateRoute";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../Screens/Login";
import Form_Overview from "../Screens/Form_Overview";
import Form_New_Type from "../Screens/Form_New_Type";
import Form_New_Done from "../Screens/Form_New_Done";
import FormNewProjectsAdded from "../Screens/Form_New_Projects_Added";
import Form_New_Settings from "../Screens/Form_New_Settings";
import Form_New_Contact from "../Screens/Form_New_Contact";
import PageNotFound from "../Screens/PageNotFound";

const Index = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/not-found" component={PageNotFound} />
        <PrivateRoute
          exact
          path="/dashboard"
          component={Form_Overview}
          text={"All Forms"}
        />
        <PrivateRoute
          exact
          path="/form-new-type"
          component={Form_New_Type}
          text={"New Form"}
        />
        <PrivateRoute
          exact
          path="/form-new-projects-added"
          component={FormNewProjectsAdded}
          text={"New Form"}
        />
        <PrivateRoute
          exact
          path="/form-new-contact"
          component={Form_New_Contact}
          text={"New Form"}
        />
        <PrivateRoute
          exact
          path="/form-new-settings"
          component={Form_New_Settings}
          text={"New Form"}
        />
        <PrivateRoute
          exact
          path="/form-new-done"
          component={Form_New_Done}
          text={"New Form"}
        />
        <Redirect
          to={{
            pathname: "/not-found",
          }}
        />
      </Switch>
    </div>
  );
};

export default Index;
