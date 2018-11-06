import Layout from '../app/components/Layout.js'
import Link from 'next/link'
import '../app/assets/question-list.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {setQuestions} from '../app/actions/questionActions'
import UserAddress from "./userAddress"

class QuestionList extends Component {
  // static async getInitialProps({store}) {
  //   store.dispatch(setQuestions([{id: 1, title: "new title"}]))
  // }

  render() {
    return (
      <Layout dispatch={this.props.dispatch}>        
        <div className={"question-list"}>
          <UserAddress />
          <h1 className={"question-list__title"}>Question List</h1>
          <div className={"question-list__container"}>
            {this.props.question.questions.map((question, i) => (
              <div className={"question-list__item"} key={i}>
                <div className={"question-list__item-vote"}>{question.votes} votes</div>
                <div className={"question-list__item-answer"}>{question.answers} answers</div>
                <Link href={`/question?id=${question.id}`}>
                  <a className={"question-list__item-link"}>{question.title}</a>
                </Link>
                <div className={"question-list__item-created"}>asked at {question.created}</div>
                <div className={"question-list__item-address"}>by {question.user}</div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default connect(state => state)(QuestionList)

