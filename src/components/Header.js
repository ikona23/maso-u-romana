import React from 'react'
import Title from './Header/Title'
import Nav from './Header/Nav'

export default class Header extends React.Component {

render() {
  console.log(this.props);
  return (

    <div>
    <h4>I am living in {this.props.town}</h4>
    <h4>Welcome:  {this.props.title}</h4>

    <Title/>
<div>
</div>
  </div>
    )
  }
}
