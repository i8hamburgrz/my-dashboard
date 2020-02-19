import React, { Component } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

const Wrapper = styled.div`
  flex-grow: 1;
  height: 500px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 6px 25px -18px #000;
`;

function Weather(props) {
  return (
    <Wrapper>
      Weather INfo Here
    </Wrapper>
  )
}

const  mapStateToProps = function (state){
  return  {

  }
}

export default connect(
  mapStateToProps, 
  { }
)(Weather);