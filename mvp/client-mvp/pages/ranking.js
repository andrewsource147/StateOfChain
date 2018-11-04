import Layout from '../app/components/Layout.js'
import {Component} from 'react'
import {connect} from 'react-redux'

class Ranking extends Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    )
  }
}

export default connect(state => state)(Ranking)

