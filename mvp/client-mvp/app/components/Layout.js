import Header from './Header'
import Footer from './Footer'
import React, { Component } from 'react'
import { checkMetamaskInstall } from "../actions/commonActions"
import Link from 'next/link'

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
          <div className={"grid-x"}>
            <div className={"side-bar cell large-3"}>
              <h2>Stackchain</h2>
              <div className={`item ${this.isActive("/") ? "active" : ""}`}><Link href="/"><a>Stack Overflow</a></Link></div>
              <div className={`item ${this.isActive("/ranking") ? "active" : ""}`}><Link href="/ranking"><a>Users</a></Link></div>
            </div>
            <div className={"cell large-9"}>{this.props.children}</div>
          </div>
        </div>
        <Footer/>
      </div>
    )}
}

