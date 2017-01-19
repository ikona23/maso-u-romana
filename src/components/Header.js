import React from 'react'
import Nav from './Nav'
import Title from './Header/Title'

export default class Header extends React.Component {
  constructor() {
    super()
      this.state = {name: "peter"}
  }

render() {
  setTimeout(() => {
    this.setState({name: "Kubo"})
  },3000)
  return (
    <div>
    <h1>Header {this.state.name}</h1>

    <Title/>
    <Nav/>
  </div>
    )
  }
}
