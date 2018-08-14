import React, { Component } from 'react';
import GameCard from './components/GameCard'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import bros from './bros.json'
import './App.css';

class App extends Component {

  state = {
    bros,
    score: 0,
    highScore: 0,
    picked: [],
    result: 'Start by selecting a Bro',
  }

  

  //FUNCTION TO SHUFFLE THE ORDER THE BROS ARE SHOWN
  shuffleEm = () => {
    console.log("Bros:")
    console.log(bros)

    let i = bros.length - 1
    for (; i>0;i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = bros[i]
      bros[i] = bros[j]
      bros[j] = temp
    }
    return bros
  }

  //FUNCTION TO ADD TO THE SCORE WHEN THE USER SELECTS A DIFFERENT BRO
  addScore = () => {
    this.setState({ bros: this.shuffleEm(bros), score: this.state.score + 1 })
  }

  //FUNCTION TO RESET THE SCORE WHEN THE USER SELECTS THE SAME BRO TWICE
  resetScore = () => {
    if(this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score})
    }
    this.setState({ bros: this.shuffleEm(bros), score: 0, picked: [], result: "Sorry, you already selected that Bro! Try again." })
  }

  //FUNCTION TO HANDLE CLICK OF USER AND SELECTED BRO
  pickBro = id => {
    // console.log(this.state.bros[id])
    console.log(this.state.picked)

    var thisId = this.state.bros[id].id
    console.log("This ID:")
    console.log(thisId)
    
    if(this.state.picked.indexOf(id) === -1) {
      console.log('you picked:')
      console.log(id)
      this.setState({ result: "Awesome! That was a new Bro!" })
      var joined = this.state.picked.concat(id)
      this.setState({ picked: joined })
      this.addScore()
    } else {
      this.resetScore()
    }
  }

  //RENDER THE PAGE
  render() {
    return (
      <Wrapper>
        <Title result={this.state.result} score={this.state.score} highScore={this.state.highScore} />
        {this.state.bros.map(bro => (
          <GameCard 
          id={bro.id}
          key={bro.id}
          img={bro.img}
          pickBro={this.pickBro}
          />
        ))}
        </Wrapper>
    );
  }
}

export default App;
