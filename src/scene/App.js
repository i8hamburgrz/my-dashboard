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
const Notice = styled.div`
  font-size: 9px;
  margin: 10px 0;
  text-align: center;
`
class App extends Component {
  componentDidMount() {
    const { getAllNews, getAllWeather } = this.props
    getAllNews();
    getAllWeather();
  }

  render() {
    return (
      <React.Fragment>
        <HeaderWrap>
          <User />
          <Weather />
        </HeaderWrap>
        <Notice>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></Notice>
      </React.Fragment>
      
    )
  }
}

export default connect(
  null, 
  { getAllNews, getAllWeather }
)(App);