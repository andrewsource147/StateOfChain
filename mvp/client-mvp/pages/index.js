import Layout from '../app/components/Layout.js'
import Link from 'next/link'
import '../app/assets/question-list.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
<<<<<<< HEAD
// import {setQuestions} from '../app/actions/questionActions'
import UserAddress from "./userAddress"
=======
import { questionActionTypes } from '../app/actions/questionActions'
>>>>>>> 9ae8ffb4597fb3b8431d73db93aed2be5222b6b2

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        title: null,
        content: null,
        address: null
      }
    };
  }

  componentDidMount = () => {
    this.props.dispatch({type: questionActionTypes.FETCH_QUESTIONS});
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
    const address = this.state.form.address;

    if (!title || !content || !address) {
      return;
    }

    this.props.dispatch({type: questionActionTypes.SUBMIT_QUESTION, payload: {
      title,
      content,
      address
    }});
  }

  render() {
    return (
<<<<<<< HEAD
      <Layout dispatch={this.props.dispatch}>        
=======
      <Layout>
        <div>
          <h3>Submit your question</h3>
          <form>
            <div style={{marginBottom: 10}}>
              <input type={"text"} name={"title"} onChange={this.handleInputChange}/>
            </div>

            <div style={{marginBottom: 10}}>
              <textarea name={"content"} onChange={this.handleInputChange}/>
            </div>

            <div style={{marginBottom: 10}}>
              <input type={"text"} name={"address"} onChange={this.handleInputChange}/>
            </div>

            <input type={"button"} value={"Submit"} onClick={this.handleSubmitQuestion}/>
          </form>
        </div>
>>>>>>> 9ae8ffb4597fb3b8431d73db93aed2be5222b6b2
        <div className={"question-list"}>
          <UserAddress />
          <h1 className={"question-list__title"}>Question List</h1>
          <div className={"question-list__container"}>
            {this.props.question.questions.map((question, i) => (
              <div className={"question-list__item"} key={i}>
                <div className={"question-list__item-vote"}>{question.votes} votes</div>
                <div className={"question-list__item-answer"}>{question.answers || 0} answers</div>
                <Link href={`/question?id=${question.id}`}>
                  <a className={"question-list__item-link"}>{question.title}</a>
                </Link>
                <div className={"question-list__item-created"}>asked at {question.timestamp}</div>
                <div className={"question-list__item-address"}>by {question.address}</div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default connect(state => state)(QuestionList)

