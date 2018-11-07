import Layout from '../app/components/Layout.js'
import Link from 'next/link'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { questionActionTypes } from '../app/actions/questionActions'

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
      <Layout dispatch={this.props.dispatch}>
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

        <div className={"questions"}>
          <div className={"questions__header"}>
            <div className={"questions__header-top"}>
              <div className={"questions__header-title"}>Top Questions</div>
              <div className={"questions__header-button"}>Ask Question</div>
            </div>

            <div className={"questions__header-bot"}>
              <div className={"questions__header-count"}>1,600 questions</div>
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
      </Layout>
    )
  }
}

export default connect(state => state)(QuestionList)

