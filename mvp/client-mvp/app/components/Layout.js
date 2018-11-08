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

  isActive = (path) => {
    return this.props.path == path
  }

  render() {
    return (
      <div>
        <Header/>
        <div className={"content-layout"}>
          <div className={"side-bar"}>
            <h2>Stackchain</h2>
            <div className={`item ${this.isActive("/") ? "active" : ""}`}><a href="/">Stack Overflow</a></div>
            <div className={`item ${this.isActive("/ranking") ? "active" : ""}`}><a href="/ranking">Users</a></div>
          </div>
          <div>{this.props.children}</div>
        </div>
        <Footer/>
      </div>
    )}
}

