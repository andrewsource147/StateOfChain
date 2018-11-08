import Layout from '../app/components/Layout.js'
import {Component} from 'react'
import {connect} from 'react-redux'
import {updateUserVotes} from "../app/actions/userActions.js"

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
    rawNormalRank = this.state.orderArr.slice()
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
      console.log(row.length, i + 1, rawNormalRank.length)
      if (i + 1 == rawNormalRank.length) {
        if (row.length > 0) {
          normalRank.push(row)
        }
      }
    }
    console.log(normalRank)
    return normalRank
  }

  render() {
    return (
      <Layout dispatch={this.props.dispatch}>
        <div id="ranking">
          <h1>Ranking</h1>
          <div className={"questions__header"}>
            <div className={"questions__header-top"}>
              <div className={"questions__header-title"}>Top Questions</div>
              <div className={"questions__header-button"}>Ask Question</div>
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
                      <div className={"degree"}></div>
                    </div>
                  </div>
                  <div className={"name"}>{user.name ? user.name : user.id}</div>
                  <div className={"location"}>{user.location ? user.location : "Hanoi, VietNam"}</div>
                  <div className={"vote"}>{user.votes}</div>
                  <div>{user.votes > 1 ? "Reputations" : "Reputation"}</div>
                </div>
              ))}
            </div>
            <div className={"rank normal-rank"}>
              {this.getListRow().map((row, i) => (
                <div className={"row"} key={i}>
                  {row.map((user, j) => (
                    <div className={"user"} key={j} style={{marginBottom: 10}}>
                      <div className={"avatar"}>
                        <div className={"img"}>
                        </div>
                      </div>
                      <div className={"user-info"}>
                        <div className={"name"}>{user.name ? user.name : user.id}</div>
                        <div className={"location"}>{user.location ? user.location : "Hanoi, VietNam"}</div>
                        <div className={"vote"}>{user.votes}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default connect(state => state)(Ranking)

