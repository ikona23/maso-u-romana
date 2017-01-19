import React from 'react'

export default class Title extends React.Component {
  constructor() {
    super()
    this.state = {title: "title"}
  }

  render() {
    setTimeout(() => {
      this.setState({title: "new One"})
    }, 3000)

    return(
      <div>
      {this.state.title}
    </div>
  )
  }
}
