import { withRouter } from 'next/router'
import Layout from '../app/components/Layout.js'
import {Component} from 'react'
import {connect} from 'react-redux'
import {questionActionTypes, voteQuestion} from '../app/actions/questionActions'
import { voteAnswer } from "../app/actions/answerActions";

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

  onVoteQuestion(questionId, isUpvote) {
    this.props.dispatch(voteQuestion(questionId, isUpvote))
  }

  onVoteAnswer(answerId, isUpvote) {
    this.props.dispatch(voteAnswer(answerId, isUpvote))
  }

  render() {
    const question = this.props.question.selectedQuestion

    return (
      <Layout>
        {question &&
        <div>
          <h1>Question #{this.props.router.query.id}: {question.title}</h1>
          <div>
            <div style={{marginBottom: 5}}>{question.votes} votes</div>
            <span style={{marginRight: 10}} onClick={() => this.onVoteQuestion(question.id, true)}>Upvote</span>
            <span onClick={() => this.onVoteQuestion(question.id, false)}>Downvote</span>
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


