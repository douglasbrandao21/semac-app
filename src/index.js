import React, { Fragment, Component } from "react";
import { StatusBar } from "react-native";
import CodePush from "react-native-code-push";
import OneSignal from "react-native-onesignal";

import Routes from "~/routes";

class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init("6417cb47-1e8f-4ad4-ae37-80d918819bcb");
    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
  }

  componentWillUnmount() {
    OneSignal.init("6417cb47-1e8f-4ad4-ae37-80d918819bcb");
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  render() {
    return (
      <Fragment>
        <Routes />
        <StatusBar backgroundColor="#0C0A17" barStyle="light-content" />
      </Fragment>
    );
  }
}
export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(App);
