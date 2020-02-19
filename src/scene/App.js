import React, { Component } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import User from "./user/User";
import Weather from "./weather/Weather";
import { getAllNews } from "../store/actions/news";
import { getAllWeather } from "../store/actions/weather";

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 30px auto 0;
`

class App extends Component {
  componentDidMount() {
    const { getAllNews, getAllWeather } = this.props
    getAllNews();
    getAllWeather();
  }

  render() {
    return (
      <HeaderWrap>
        <User />
        <Weather />
      </HeaderWrap>
    )
  }
}

export default connect(
  null, 
  { getAllNews, getAllWeather }
)(App);