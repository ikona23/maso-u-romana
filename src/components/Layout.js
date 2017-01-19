import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {name: "peter"}
  }

render() {
  return (
    <div>
      <Header/>

      <Footer/>
  </div>

    )
  }
}
