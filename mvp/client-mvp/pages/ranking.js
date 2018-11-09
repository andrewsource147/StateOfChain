import Layout from '../app/components/Layout.js'
import {Component} from 'react'
import {connect} from 'react-redux'
import {updateUserVotes} from "../app/actions/userActions.js"
import {toSvg} from 'jdenticon'
import { withRouter } from 'next/router'

class Ranking extends Component {
  constructor(props) {
    super(props)
    const users = props.user.users
    const newArray = users.slice()
    newArray.sort(function(a, b){
      return b.votes - a.votes
    })
    this.state = {
      orderArr: newArray,
    }
  }
  componentDidMount = ()=>{ 
    this.props.dispatch(updateUserVotes(this.props.user.users))
  }

  isActive = () => {
    
  }

  topThree = () => {
    return this.state.orderArr.slice(-3)
  }

  getListRow = () => {
    var rawNormalRank = this.state.orderArr.slice(0, -3)
    // rawNormalRank = this.state.orderArr.slice()
    var row = []
    var normalRank = []
    for (let i = 0; i < rawNormalRank.length; i++) {
      const element = rawNormalRank[i];
      if (i % 3 == 0) {
        if (row.length > 0) {
          normalRank.push(row)
        }
        row = []
      }
      row.push(element)
      if (i + 1 == rawNormalRank.length) {
        if (row.length > 0) {
          normalRank.push(row)
        }
      }
    }
    return normalRank
  }

  getShortAddr = (address) => {
    let result = address.slice(0, 8) + "..." + address.slice(-6)
    let link = "https://ropsten.etherscan.io/address/" + address
    return (
      <a className={"link-account"} href={link} target="_blank">
        {result}
      </a>
    )
  }

  render() {
    return (
      <Layout dispatch={this.props.dispatch} path={this.props.router.pathname}>
        <div id="ranking">
          {/* <h1>Ranking</h1> */}
          <div className={"questions__header"}>
            <div className={"questions__header-top"}>
              <div className={"questions__header-title"}>Ranking</div>
              {/* <div className={"questions__header-button"}>Ask Question</div> */}
            </div>

            <div className={"questions__header-bot"}>
              <div className={"questions__header-count"}>1,600 questions</div>
              <div className={"questions__header-sort"}>
                <div className={"questions__header-sort-item"}>Reputation</div>
                <div className={"questions__header-sort-item"}>New Users</div>
                <div className={"questions__header-sort-item"}>Voters</div>
                <div className={"questions__header-sort-item"}>Editors</div>
                <div className={"questions__header-sort-item"}>Modarators</div>
              </div>
            </div>
          </div>
          <div className={"sub-header"}>
            <div className={"sub-item active"}>Week</div>
            <div className={"sub-item"}>Month</div>
            <div className={"sub-item"}>Quater</div>
            <div className={"sub-item"}>Year</div>
            <div className={"sub-item"}>All</div>
          </div>
          <div className={"ranking"}>
            <div className={"rank top-rank"}>
              {this.topThree().map((user, i) => (
                <div className={"user"} key={i} style={{marginBottom: 10}}>
                  <div className={"avatar"}>
                    <div className={"img"}>
                      <canvas data-jdenticon-value={`${user.address}`} width="55" height="55" className="avatar-canvas">
                      </canvas>
                      <div className={"degree"}>{i == 0 ? "1st" : i == 1 ? "2nd" : "3th"}</div>
                    </div>
                  </div>
                  <div className={"name"}>{user.address ? this.getShortAddr(user.address) : user.id}</div>
                  {/* <div className={"location"}>{user.location ? user.location : "Hanoi, VietNam"}</div> */}
                  <div className={"vote"}>{user.votes}</div>
                  <div>{user.votes > 1 ? "Reputations" : "Reputation"}</div>
                </div>
              ))}
            </div>
            {this.getListRow().length > 0 && <div className={"rank normal-rank"}>
              {this.getListRow().map((row, i) => (
                <div className={"row"} key={i}>
                  {row.map((user, j) => (
                    <div className={"user"} key={j} style={{marginBottom: 10}}>
                      <div className={"avatar"}>
                        <div className={"img"}>
                          <canvas data-jdenticon-value={`${user.address}`} width="45" height="45" className="avatar-canvas"></canvas>
                        </div>
                      </div>
                      <div className={"user-info"}>
                        <div className={"name"}>{user.address ? this.getShortAddr(user.address) : user.id}</div>
                        {/* <div className={"location"}>{user.location ? user.location : "Hanoi, VietNam"}</div> */}
                        <div className={"normal-vote"}>{user.votes}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>}
          </div>
        </div>
      </Layout>
    )
  }
}

export default connect(state => state)(withRouter(Ranking))
