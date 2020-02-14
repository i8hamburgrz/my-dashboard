import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from "styled-components";
import { getAllNews } from "../store/actions/news"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  componentDidMount() {
    const { getAllNews } = this.props
    getAllNews();
  }

  render() {
    return (
      <Title>Hello, world!</Title>
    )
  }
}

export default connect(
  null, 
  { getAllNews }
)(App);