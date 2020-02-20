import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from "lodash";
import moment from 'moment'
import styled from "styled-components";

import Pin from "../../images/pin.svg";
import Time from "../../images/time.svg";

const Wrapper = styled.div`
  flex-basis: 25%;
  margin-right: 30px;
  background: #71879a;
  box-shadow: 0px 6px 25px -18px #000;
  padding: 30px 15px;
  box-sizing: border-box;
  color: #fff;
`;
const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background: gray;
  border-radius: 50%;
  margin: 0 auto 20px;
  border: 2px solid #fff;
`
const TitleOne = styled.h1`
  margin: 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: center;
`;
const TitleTwo = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
`;
const InfoWrap = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;

  img {
    width: 27px;
    margin-right: 10px;
  }
`;
const InfoTitle = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;
const InfoDesc = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 300;
`;

function User(props) {
  return (
    <Wrapper>
      <Avatar></Avatar>
      <TitleOne>Welcome</TitleOne>
      <TitleTwo>Steven Brand</TitleTwo>

      <InfoWrap>
        <img src={Pin} />

        <div>
          <InfoTitle>Location</InfoTitle>
          <InfoDesc>{props.location}</InfoDesc>
        </div>
      </InfoWrap>

      <InfoWrap>
        <img src={Time} />

        <div>
          <InfoTitle>Current Time</InfoTitle>
          <InfoDesc>{moment.unix(props.time).format("MMM DD, YYYY")}</InfoDesc>
        </div>
      </InfoWrap>
    </Wrapper>
  )
}

export default connect((state) => {
  const cityName = _.get(state.weather, ['location', 'name']);
  const stateName = _.get(state.weather, ['location', 'region']);
  const time = _.get(state.weather, ['location', 'localtime_epoch']);

  return {
    location: `${cityName}, ${stateName}`,
    time
  }
}, {})(User);