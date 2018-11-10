import Header from './Header'
import Footer from './Footer'
import React, { Component } from 'react'
import { checkMetamaskInstall } from "../actions/commonActions"
import Link from 'next/link'

export default class Layout extends Component {
  componentDidMount = () => {
    //check metamask install and in ropsten network
    this.props.dispatch(checkMetamaskInstall())
  }

  isActive = (path, subpath) => {
    return this.props.path === path || this.props.path === subpath
  }

  render() {
    return (
      <div>
        <Header/>
        <div className={"content-layout"}>
          <div className={"grid-x"}>
            <div className={"side-bar cell large-3"}>
              <Link href="/"><h2>Stackchain</h2></Link>
              <Link href="/"><div className={`item ${this.isActive("/", '/question') ? "active" : ""}`}>Stack Overflow</div></Link>
              <Link href="/ranking"><div className={`item ${this.isActive("/ranking") ? "active" : ""}`}>Users</div></Link>
            </div>
            <div className={"cell large-9"}>{this.props.children}</div>
          </div>
        </div>
        <Footer/>
      </div>
    )}
}

