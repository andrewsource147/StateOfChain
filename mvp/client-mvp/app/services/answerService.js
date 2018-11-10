import axios from 'axios'

export default class answerService {
  static voteAnswer = (answerId, address, isUpvote) => {
    return axios.post(`http://0.0.0.0:3001/vote/answer`, {
      answer_id: answerId,
      address: address,
      is_upvotes: isUpvote
    }).then(response => {
      return response.data;
    });
  }

  static submitAnswer = (questionId, content, address) => {
    return axios.post(`http://0.0.0.0:3001/submit/answer`, {
      question_id: questionId,
      content,
      address
    }).then(response => {
      return response.data;
    });
  }
}
