import Layout from '../app/components/Layout.js'
import Link from 'next/link'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { questionActionTypes } from '../app/actions/questionActions'
import Modal from '../app/components/Modal'

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        title: null,
        content: null
      },
      isModalActive: false
    };
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

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  handleSubmitQuestion = () => {
    const title = this.state.form.title;
    const content = this.state.form.content;
    const address = this.props.common.user.address;

    if (!title || !content || !address) {
      return;
    }

    this.props.dispatch({type: questionActionTypes.SUBMIT_QUESTION, payload: {
      title,
      content,
      address
    }});

    this.handleCloseModal();
  }

  render() {
    return (
      <Layout dispatch={this.props.dispatch}>
        <div className={"questions"}>
          <div className={"questions__header"}>
            <div className={"questions__header-top"}>
              <div className={"questions__header-title"}>Top Questions</div>
              <div className={"questions__header-button"} onClick={this.handleOpenModal}>Ask Question</div>
            </div>

            <div className={"questions__header-bot"}>
              <div className={"questions__header-count"}>{this.props.question.questions.length} questions</div>
              <div className={"questions__header-sort"}>
                <div className={"questions__header-sort-item"}>Interesting</div>
                <div className={"questions__header-sort-item"}>344 featured</div>
                <div className={"questions__header-sort-item"}>Hot</div>
                <div className={"questions__header-sort-item"}>Week</div>
                <div className={"questions__header-sort-item"}>Month</div>
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
                    <span>asked {question.timestamp} by </span>
                    <span className={"bold"}>{question.address}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        <Modal isActive={this.state.isModalActive} handleClose={this.handleCloseModal}>
          <div className={"ask-question"}>
            <h3 className={"ask-question__title"}>Ask a question</h3>
            <form>
              <div className={"ask-question__field"}>
                <div className={"ask-question__field-title"}>Title</div>
                <input className={"ask-question__field-input"} type={"text"} name={"title"} onChange={this.handleInputChange}/>
              </div>

              <div className={"ask-question__field"}>
                <div className={"ask-question__field-title"}>Body</div>
                <textarea className={"ask-question__field-input ask-question__field-textarea"} name={"content"} onChange={this.handleInputChange}/>
              </div>

              <div className={"ask-question__submit"} onClick={this.handleSubmitQuestion}>Post Your Question</div>
            </form>
          </div>
        </Modal>
      </Layout>
    )
  }
}

export default connect(state => state)(QuestionList)

