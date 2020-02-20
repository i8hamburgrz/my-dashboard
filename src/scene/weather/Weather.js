import React, { Component } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import Cloud from "../../images/weather/001-cloud.svg";

const Wrapper = styled.div`
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 6px 25px -18px #000;
  padding; 15px;
  background: #b1c5d4;
`;
const WeatherIcon = styled.div`
  width: 300px;
  margin: 0 auto;

  img {
    width: 100%;
  }
`
const WeatherInfo = styled.div`
  width: 100%;
  background: #fff;
  color: #969aa3;
  display: flex;
  flex-direction: row;
`
const InfoBox =  styled.div`
  border: 1px solid #b1c5d4;
  width: 107px;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:first-of-type {
    border-left: 2px solid #b1c5d4;
  }

  &:last-of-type {
    border-right: 2px solid #b1c5d4;
  }
`
const Data = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  line-height: 2;
  font-size: 36px;
  box-sizing: border-box;
  font-weight: 400;
`
const Condition = styled.div`
  border-top: 1px solid #b1c5d4;
  font-size: 12px;
  width: 100%;
  padding: 3px;
  box-sizing: border-box;
  font-weight: 300;
`

function Weather(props) {

  return (
    <Wrapper>
      <WeatherIcon>
        <img src={Cloud} />
      </WeatherIcon>
      
      <WeatherInfo>
        {
          _.map(props.weather, (details, idx) => (
              <InfoBox key={idx}>
                <Data>{details.value}</Data>
                <Condition>{details.name}</Condition>
              </InfoBox>
            )
          )
        }
      </WeatherInfo>
    </Wrapper>
  )
}

const  mapStateToProps = function (state){
  const weatherInfo = _.get(state.weather, ['current']);

  if(!_.isEmpty(weatherInfo)) {
    return  {
      weatherCode: weatherInfo.condition.code,
      isDay: weatherInfo.is_day, 
      weather: [{
        name: 'Temperature',
        value: weatherInfo.temp_f
      }, {
        name: 'Real Feel',
        value: weatherInfo.feelslike_f
      }, {
        name: 'Humdity',
        value: weatherInfo.humidity
      }, {
        name: 'Pressure',
        value: weatherInfo.pressure_in
      }, {
        name: 'Preciptation',
        value: weatherInfo.precip_in
      }, {
        name: 'Wind Gust',
        value: weatherInfo.gust_mph,
      }, {
        name: 'Wind Direction',
        value: weatherInfo.wind_dir,
      }, {
        name: 'Cloud Coverage',
        value: weatherInfo.cloud,
      }]
    }
  }
  
}

export default connect(
  mapStateToProps, 
  { }
)(Weather);