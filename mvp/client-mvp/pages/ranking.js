import Layout from '../app/components/Layout.js'
import {Component} from 'react'
import {connect} from 'react-redux'
import {updateUserVotes} from "../app/actions/userActions.js"

class Ranking extends Component {
  componentDidMount = ()=>{
    this.props.dispatch(updateUserVotes(this.props.user.users))
  }
  render() {
    return (
      <Layout dispatch={this.props.dispatch}>
        <div id="ranking">
          <h1>Ranking</h1>
          <div className={"ranking"}>
            <div>
              {this.props.user.users.map((user, i) => (
                <div key={i} style={{marginBottom: 10}}>
                  <div>ID: {user.id}</div>
                  <div>Address: {user.address}</div>
                  <div>Votes: {user.votes}</div>
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

