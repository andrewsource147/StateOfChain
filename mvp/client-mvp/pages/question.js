
import { withRouter } from 'next/router'
import Layout from '../app/components/Layout.js'
import {Component} from 'react'
import {connect} from 'react-redux'
import { voteQuestion } from '../app/actions/questionActions'
import {voteAnswer} from "../app/actions/answerActions";
import {voteUser} from "../app/actions/userActions";



class Question extends Component {

  onVoteQuestion(questionId, isUpvote, user) {
    this.props.dispatch(voteQuestion(questionId, isUpvote))
    //submit to blockchain
    if (isUpvote){
      this.props.dispatch(voteUser(user, 1))
    }else{
      this.props.dispatch(voteUser(user, 0))
    }
  }

  onVoteAnswer(answerId, isUpvote, user) {
    this.props.dispatch(voteAnswer(answerId, isUpvote))
    if (isUpvote){
      this.props.dispatch(voteUser(user, 1))
    }else{
      this.props.dispatch(voteUser(user, 0))
    }
  }

  getListTxs = () =>{ 
    var listTxs = this.props.user.txs.map(txsHash => {
      return <div key={txsHash}>
        <a href={"https://ropsten.etherscan.io/tx/" + txsHash} target="_blank">{txsHash}</a>
      </div>
    })
    return listTxs
  }
  render() {
    const question = this.props.question.questions[this.props.router.query.id]
    return (
      <Layout>
        {this.props.user.txs.length > 0 && (
          <div>
            <h1>Your transactions</h1>
            <div>
              {this.getListTxs()}
            </div>
          </div>
        )}
        <div>
          <h1>Question #{this.props.router.query.id}: {question.title}</h1>
          <div>
            <div style={{marginBottom: 5}}>{question.votes} votes</div>
            <span style={{marginRight: 10}} onClick={() => this.onVoteQuestion(question.id, true, question.user)}>Upvote</span>
            <span onClick={() => this.onVoteQuestion(question.id, false,  question.user)}>Downvote</span>
          </div>
          <p>{question.content}</p>
        </div>

        <div>
          <div>
            <h3>Answer</h3>
            <div>User:</div>
            {this.props.answer.answers.map((answer, i) => (
              <div key={i}>
                <div>
                  <div style={{marginBottom: 5, marginTop: 10}}>{answer.votes} votes</div>
                  <span style={{marginRight: 10}} onClick={() => this.onVoteAnswer(answer.id, true, question.user)}>Upvote</span>
                  <span onClick={() => this.onVoteAnswer(answer.id, false, question.user)}>Downvote</span>
                </div>
                <p>{answer.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default connect(state => state)(withRouter(Question))

