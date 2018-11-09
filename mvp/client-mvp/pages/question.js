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
    this.props.dispatch(voteQuestion(questionId, user, isUpvote))
    this.props.dispatch(voteUser(user, isUpvote))
  }

  onVoteAnswer(answerId, isUpvote, user) {
    this.props.dispatch(voteAnswer(answerId, user, isUpvote))
    this.props.dispatch(voteUser(user, isUpvote))
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
        <div className={"question"}>

          {/*=================== Question Container ===================*/}
          <div className={"question__question-container"}>
            <div className={"question__header"}>
              <div className={"question__title"}>DataBinding C# ObservableCollection SerialPort to Combobox (SerialPort.getPortNames=>Method that return array of string)</div>
              <div className={"common__ask-question"}>Ask Question</div>
            </div>

            <div className={"question__item-container"}>
              <div className={"question__item"}>
                <div className={"question__item-info"}>
                  <div className={"question__item-avatar"} style={{backgroundImage: "url(/static/logo.svg)"}}></div>
                  <div className={"question__item-vote"}>
                    <span>3</span>
                  </div>
                </div>

                <div className={"question__item-content"}>
                  <div className={"question__item-header"}>
                    <div className={""}>
                      <div className={"question__item-name"}>Gordon Linoff</div>
                      <div className={"question__item-reputation"}>1234</div>
                    </div>

                    <div className={"question__item-metadata-container"}>
                      <div className={"question__item-metadata"}>
                        <div className={"question__item-metadata--light"}>asked:</div>
                        <div className={"question__item-metadata--bold"}>today</div>
                      </div>
                      <div className={"question__item-metadata"}>
                        <div className={"question__item-metadata--light"}>viewed:</div>
                        <div className={"question__item-metadata--bold"}>12 times</div>
                      </div>
                      <div className={"question__item-metadata"}>
                        <div className={"question__item-metadata--light"}>active:</div>
                        <div className={"question__item-metadata--bold"}>today</div>
                      </div>
                    </div>
                  </div>

                  <div className={"question__item-body"}>
                    I need to Bind a list of my Available ports in Computer to a Combobox in WPF. I am using ObservableCollection. I have done like
                    Some other solutions I tried was using a Project Reference to PromiseKit, instead of a Framework reference, however this doesn't work - in that I
                    still need a framework reference from my main project, because I will get "library not loaded" error at runtime, if running without a FW reference.
                    Same issue occurs when archiving while using a project reference.
                    <br/><br/>
                    Some other solutions I tried was using a Project Reference to PromiseKit, instead of a Framework reference, however this doesn't work - in that I still need a framework reference from my main project, because I will get "library not loaded" error at runtime, if running without a FW reference. Same issue occurs when archiving while using a project reference.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*=================== Answer Container ===================*/}
          <div className={"question__answer-container"}>
            <div className={"question__answer-header"}>
              <div>2 Answers</div>
              <div className={"common__sort"}>
                <div className={"common__sort-item active"}>Active</div>
                <div className={"common__sort-item"}>Oldest</div>
                <div className={"common__sort-item"}>Votes</div>
              </div>
            </div>

            <div className={"question__item-container"}>
              <div className={"question__item question__item--answer"}>
                <div className={"question__item-info"}>
                  <div className={"question__item-avatar"} style={{backgroundImage: "url(/static/logo.svg)"}}></div>
                  <div className={"question__item-vote"}>
                    <span>3</span>
                  </div>
                </div>

                <div className={"question__item-content"}>
                  <div className={"question__item-header"}>
                    <div className={""}>
                      <div className={"question__item-name"}>Gordon Linoff</div>
                      <div className={"question__item-reputation"}>1234</div>
                    </div>
                  </div>

                  <div className={"question__item-body"}>
                    Why is it trying to individually re-sign sub frameworks, and what can I do to alleviate the issues? I need the archiving to work normally with Xcode 10, along with any future third party dependencies being added to my framework target. (This is the first dynamic framework dependency added to my Framework target. Before I was "baking in" - in-boarding all 3rd parties for ease of development purposes, but PromiseKit is difficult to inboard due to extensive dependencies on Objective-c).
                    <br/><br/>
                    Why is it trying to individually re-sign sub frameworks, and what can I do to alleviate the issues? I need the archiving to work normally with Xcode 10, along with any future third party dependencies being added to my framework target. (This is the first dynamic framework dependency added to my Framework target. Before I was "baking in" - in-boarding all 3rd parties for ease of development purposes, but PromiseKit is difficult to inboard due to extensive dependencies on Objective-c).
                  </div>
                </div>
              </div>

              <div className={"question__item question__item--answer"}>
                <div className={"question__item-info"}>
                  <div className={"question__item-avatar"} style={{backgroundImage: "url(/static/logo.svg)"}}></div>
                  <div className={"question__item-vote"}>
                    <span>3</span>
                  </div>
                </div>

                <div className={"question__item-content"}>
                  <div className={"question__item-header"}>
                    <div className={""}>
                      <div className={"question__item-name"}>Gordon Linoff</div>
                      <div className={"question__item-reputation"}>1234</div>
                    </div>
                  </div>

                  <div className={"question__item-body"}>
                    Why is it trying to individually re-sign sub frameworks, and what can I do to alleviate the issues? I need the archiving to work normally with Xcode 10, along with any future third party dependencies being added to my framework target. (This is the first dynamic framework dependency added to my Framework target. Before I was "baking in" - in-boarding all 3rd parties for ease of development purposes, but PromiseKit is difficult to inboard due to extensive dependencies on Objective-c).
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*=================== Post Answer ===================*/}
          <div className={"question__answer-container"}>
            <div className={"question__answer-header"}>
              <div>Your Answer</div>
            </div>

            <form>
              <textarea className={"common__input common__textarea"} name={"answer"}/>
              <div className={"common__button"}>Post Your Answer</div>
            </form>
          </div>
        </div>

        {/*<UserAddress />*/}
        {/*{this.props.user.txs.length > 0 && (*/}
          {/*<div>*/}
            {/*<h1>Your transactions</h1>*/}
            {/*<div>*/}
              {/*{this.getListTxs()}*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*)}*/}

        {/*{question &&*/}
        {/*<div>*/}
          {/*<h1>Question #{this.props.router.query.id}: {question.title}</h1>*/}
          {/*<div>*/}
            {/*<div style={{marginBottom: 5}}>{question.votes} votes</div>*/}
            {/*<span style={{marginRight: 10}} onClick={() => this.onVoteQuestion(question.id, 1, question.address)}>Upvote</span>*/}
          {/*</div>*/}
          {/*<p>{question.content}</p>*/}
        {/*</div>*/}
        {/*}*/}

        {/*<div>*/}
          {/*<div>*/}
            {/*<h3>Answers</h3>*/}
            {/*{this.props.answer.answers.map((answer, i) => (*/}
              {/*<div key={i}>*/}
                {/*<div>*/}
                  {/*<div style={{marginBottom: 5, marginTop: 10}}>{answer.votes} votes</div>*/}
                  {/*<span style={{marginRight: 10}} onClick={() => this.onVoteAnswer(answer.id, 1, answer.address)}>Upvote</span>*/}
                {/*</div>*/}
                {/*<p>{answer.content}</p>*/}
              {/*</div>*/}
            {/*))}*/}
          {/*</div>*/}
        {/*</div>*/}
      </Layout>
    )
  }
}

export default connect(state => state)(withRouter(Question))


