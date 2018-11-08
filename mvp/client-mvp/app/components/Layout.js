import Header from './Header'
import Footer from './Footer'
import React, { Component } from 'react'
import { checkMetamaskInstall } from "../actions/commonActions"

export default class Layout extends Component {
  componentDidMount = () => {
    //check metamask install and in ropsten network
    console.log(this.props)
    this.props.dispatch(checkMetamaskInstall())
  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )}
}

