import Layout from '../app/components/Layout.js'
import Link from 'next/link'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { questionActionTypes } from '../app/actions/questionActions'
import AskQuestion from '../app/components/AskQuestion';

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalActive: false
    }
  }

  componentDidMount = () => {
    this.props.dispatch({type: questionActionTypes.FETCH_QUESTIONS});
  }

  handleOpenModal = () => {
    this.setState({isModalActive: true});
  }

  handleCloseModal = () => {
    this.setState({isModalActive: false});
  }

  render() {
    return (
      <Layout dispatch={this.props.dispatch} path={"/"}>
        <div className={"questions"}>
          <div className={"questions__header"}>
            <div className={"questions__header-top"}>
              <div className={"questions__header-title"}>Top Questions</div>
              <div className={"common__ask-question"} onClick={this.handleOpenModal}>Ask Question</div>
            </div>

            <div className={"questions__header-bot"}>
              <div className={"questions__header-count"}>{this.props.question.questions.length} questions</div>
              <div className={"common__sort"}>
                <div className={"common__sort-item active"}>Interesting</div>
                <div className={"common__sort-item"}>344 featured</div>
                <div className={"common__sort-item"}>Hot</div>
                <div className={"common__sort-item"}>Week</div>
                <div className={"common__sort-item"}>Month</div>
              </div>
            </div>
          </div>

          <div className={"questions__body"}>

            {this.props.question.questions.map((question, i) => (
              <div className={"questions__body-item"} key={i}>
                <div className={"questions__body-item-div"}>
                  <div className={"questions__body-item-data"}>
                    <div className={"questions__body-item-count"}>{question.votes || 0}</div>
                    <div>votes</div>
                  </div>
                  <div className={"questions__body-item-data"}>
                    <div className={"questions__body-item-count"}>{question.answers || 0}</div>
                    <div>answers</div>
                  </div>
                  <div className={"questions__body-item-data"}>
                    <div className={"questions__body-item-count"}>{question.views || 0}</div>
                    <div>views</div>
                  </div>
                </div>
                <div className={"questions__body-item-div"}>
                  <Link href={`/question?id=${question.id}`}>
                    <a className={"questions__body-item-title"}>{question.title}</a>
                  </Link>
                  <div className={"questions__body-item-info"}>
                    <span>by </span>
                    <span className={"bold"}>{question.address}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        <AskQuestion isModalActive={this.state.isModalActive} handleCloseModal={this.handleCloseModal}/>
      </Layout>
    )
  }
}

export default connect(state => state)(QuestionList)

