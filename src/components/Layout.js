import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "Welcome home bro",
      town: "Blava"
    }
  }

render() {
  setTimeout(() => {
    this.setState({title: "Welcome Peter",town:"Lower Hutt"})
},2000)

  return (
    <div className = "layout">
      <div className = "header">
       <Header title ={this.state.title}
              town ={this.state.town}/>
            </div>

            <Body />

      <Footer />
  </div>

    )
  }
}
