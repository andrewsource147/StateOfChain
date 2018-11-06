import {connect} from 'react-redux'
import {Component} from 'react'

class UserAddress extends Component {
  render() {
    return (
      <div>
          {this.props.common.user.error === "" && (
              <div>
                  <h1>Your address</h1>
                  <div>
                      <div>                          
                          <a href={"https://ropsten.etherscan.io/address/" + this.props.common.user.address} target="_blank">{this.props.common.user.address}</a>
                      </div>
                      <div>
                          {this.props.common.user.vote}
                      </div>
                  </div>
              </div>
          )}

            {this.props.common.user.error !== "" && (
              <div>
                  {this.props.common.user.error}
              </div>
          )}
      </div>
    )
  }
}

export default connect(state => state)(UserAddress)

