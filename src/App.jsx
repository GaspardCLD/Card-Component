import "./App.css";
import React from "react";
import styled from "styled-components";
import Nav from "./Components/Nav";
import { useState } from "react";


// test 
const pokemonColors = [
{id: "evoli", commonColor: "#282828",secondaryColor:"#c5915d", imgSrc: 'src/assets/EvoNav.png'},
{id: "pyroli",commonColor : "#ffa948",secondaryColor :"#fb7c26", imgSrc: 'src/assets/PyroNav.png' },
{id: "voltali", commonColor : "#e9bc2e",secondaryColor :"#b9812b",imgSrc: 'src/assets/VoltNav.png' },
{id : "aquali", commonColor :"#879cc6", secondaryColor : "#3a5d83", imgSrc: 'src/assets/AquaNav.png' }]


const GeneralRules = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
  --common-color: ${props => props.couleurs.commonColor};
  --main-color: #3a3129;
  --secondary-color: ${props => props.couleurs.secondaryColor};
  --black-color: #000000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Raleway;
  font-size: 1.2rem;
  color: white;
  background-color: var(--main-color);
  line-height: 150%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuizContainer = styled.div`
  width: 85vw;
  background-color: var(--common-color);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  margin-top: 25px;
  letter-spacing: 0.1rem;
  font-size: 2rem;
  text-align: center;
  border: 3px solid var(--secondary-color);
  padding: 10px 3%;
`;

const QuizTitle = styled.div`
  color: white;
  width: 60%;
  height: auto;
  background-color: var(--common-color);
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
`;

const QuizQuestion = styled.div`
  margin: 40px 0 40px 0;
  padding: 0 15px;
  width: 80%;
  height: 58px;
  border-radius: 10px;
  background: #6b655f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonNext = styled.button`
  border-radius: 10px;
  width: 106px;
  height: 35px;
  background-color: var(--secondary-color);
  margin-bottom: 30px;
  margin-top: 20px;
  font-size: 1.1rem;
  border: none;
  box-shadow: 0px 6px 10px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const QuizAnswersContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const QuizAnswers = styled.div`
  width: 80%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 34px;
  margin-bottom: 22px;
  background-color: grey;
  padding: 0 10px;
  cursor: pointer;
`;


const Answers = [
  "La nature",
  "La pêche",
  "Le bricolage",
  "Lire au coin du feu",
];


function App() {
  
    const [colors, setColors] = useState({commonColor: '#282828',
    secondaryColor: '#c5915d'})
  
  const colorHandleClick= (el)=>{setColors({commonColor: el.commonColor, secondaryColor: el.secondaryColor})} ;


  return (
    <GeneralRules couleurs={colors}>
      <H2>QUIZ</H2>
      <QuizTitle>QUELLE VERSION DE POKEMON ES-TU ?</QuizTitle>
      <Nav colorHandleClick={colorHandleClick} pokemonColors={pokemonColors}/>
      <QuizContainer>
        <QuizQuestion>Quelle est ton activité préférée ?</QuizQuestion>

        <QuizAnswersContainer >
          {Answers.map((el, index) => {
            return <QuizAnswers key={index}>{el}</QuizAnswers>;
          })}
        </QuizAnswersContainer>
        <ButtonNext>Suivant</ButtonNext>
      </QuizContainer>
    </GeneralRules>
  );
}

export default App;
