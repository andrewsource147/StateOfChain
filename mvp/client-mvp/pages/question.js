import { withRouter } from 'next/router'
import Layout from '../app/components/Layout.js'
import {Component} from 'react'
import {connect} from 'react-redux'
import {questionActionTypes, voteQuestion} from '../app/actions/questionActions'
import { voteAnswer } from "../app/actions/answerActions";
import { voteUser } from "../app/actions/userActions";
import UserAddress from "./userAddress"

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: props.router.query.id
    }
  }

  componentDidMount = () => {
    this.props.dispatch({ type: questionActionTypes.FETCH_QUESTION, payload: this.state.questionId });
  }

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
    const question = this.props.question.selectedQuestion

    return (
      <Layout dispatch={this.props.dispatch} path={this.props.router.pathname}>
        <UserAddress />
        {this.props.user.txs.length > 0 && (
          <div>
            <h1>Your transactions</h1>
            <div>
              {this.getListTxs()}
            </div>
          </div>
        )}

        {question &&
        <div>
          <h1>Question #{this.props.router.query.id}: {question.title}</h1>
          <div>
            <div style={{marginBottom: 5}}>{question.votes} votes</div>
            <span style={{marginRight: 10}} onClick={() => this.onVoteQuestion(question.id, true, question.address)}>Upvote</span>
            <span onClick={() => this.onVoteQuestion(question.id, false,  question.address)}>Downvote</span>
          </div>
          <p>{question.content}</p>
        </div>
        }

        <div>
          <div>
            <h3>Answers</h3>
            {this.props.answer.answers.map((answer, i) => (
              <div key={i}>
                <div>
                  <div style={{marginBottom: 5, marginTop: 10}}>{answer.votes} votes</div>
                  <span style={{marginRight: 10}} onClick={() => this.onVoteAnswer(answer.id, true, question.address)}>Upvote</span>
                  <span onClick={() => this.onVoteAnswer(answer.id, false, question.address)}>Downvote</span>
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


