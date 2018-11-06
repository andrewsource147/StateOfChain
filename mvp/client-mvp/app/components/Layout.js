import Header from './Header'
import Footer from './Footer'
import React, {Component} from 'react'
import {checkMetamaskInstall} from "../actions/commonActions"

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}
export default class Layout extends Component {
  componentDidMount = () => {
    //check metamask install and in ropsten network
    console.log(this.props)
    this.props.dispatch(checkMetamaskInstall())
  }

  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        {this.props.children}
        <Footer/>
      </div>
    )}
}
// const Layout = (props) => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.children}
//     <Footer/>
//   </div>
// )

