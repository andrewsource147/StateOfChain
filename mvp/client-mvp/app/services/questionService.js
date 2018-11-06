import axios from 'axios'

export default class questionService {
  static fetchQuestions = () => {
    return axios.get('http://0.0.0.0:3001/questions').then(response => {
      return response.data;
    });
  }

  static fetchQuestion = (questionId) => {
    return axios.get(`http://0.0.0.0:3001/question/${questionId}`).then(response => {
      return response.data;
    });
  }

  static submitQuestion = (title, content, address) => {
    return axios.post(`http://0.0.0.0:3001/submit/question`, {
      title,
      content,
      address
    }).then(response => {
      return response.data;
    });
  }
}
