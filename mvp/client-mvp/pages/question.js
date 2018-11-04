import { withRouter } from 'next/router'
import Layout from '../app/components/Layout.js'
import {Component} from 'react'
import {connect} from 'react-redux'
import { voteQuestion } from '../app/actions/questionActions'
import {voteAnswer} from "../app/actions/answerActions";

class Question extends Component {
  onVoteQuestion(questionId, isUpvote) {
    this.props.dispatch(voteQuestion(questionId, isUpvote))
  }

  onVoteAnswer(answerId, isUpvote) {
    this.props.dispatch(voteAnswer(answerId, isUpvote))
  }

  render() {
    const question = this.props.question.questions[this.props.router.query.id]

    return (
      <Layout>
        <div>
          <h1>Question #{this.props.router.query.id}: {question.title}</h1>
          <div>
            <div style={{marginBottom: 5}}>{question.votes} votes</div>
            <span style={{marginRight: 10}} onClick={() => this.onVoteQuestion(question.id, true)}>Upvote</span>
            <span onClick={() => this.onVoteQuestion(question.id, false)}>Downvote</span>
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
                  <span style={{marginRight: 10}} onClick={() => this.onVoteAnswer(answer.id, true)}>Upvote</span>
                  <span onClick={() => this.onVoteAnswer(answer.id, false)}>Downvote</span>
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


