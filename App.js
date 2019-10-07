import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/components/navigation/home-stack-navigator";

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Routes />
      </>
    );
  }
}
