import React, { Component } from 'react'
import axios from 'axios';
import CharView from './charView';

class Character extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
      img: this.props.image
    }
  }



  render(){
    return(
      <div>
      <CharView.Char>
        <CharView.Span>{this.props.name}</CharView.Span>
        <CharView.CharImg src={this.props.image} alt={this.props.name} />
      </CharView.Char>
      </div>
    )
  }
}

class CharList extends Component{
  constructor(props){
    super(props)
    this.state = {
      chars: '',
      api: 'https://rickandmortyapi.com/api/character/',
      prev: '',
    }
    this.nextPage()
    this.prevPage()
  }

  nextPage = () => {
    axios.get(this.state.api)
    .then(({data}) => {
      this.setState({
        api: data.info.next || this.state.api,
        chars: data.results.slice(0,9),
        prev: data.info.prev || ''
      })
    })
  }
  prevPage = () => {
    axios.get(this.state.api)
    .then(({data}) => {
      this.setState({
        api: data.info.prev || this.state.api,
        chars: data.results.slice(0,9),
        prev: data.info.prev || ''
      })
    })
  }



  render(){
    return(
      <div>
        <div>
          <CharView.Button onClick={this.nextPage}>next</CharView.Button>
          <CharView.Button onClick={this.prevPage}>prev</CharView.Button>
        </div>
        {this.state.chars ?
        this.state.chars.map(char =>
          <Character {...char} key={char.id} />
          ) : ''
        }
      </div>
    )
  }
}

export default CharList;

