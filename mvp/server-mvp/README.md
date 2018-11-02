# README

## Define objects
```
question_object: {
  id: int
  title: string,
  content: string,
  href: string,
  timestamp: int,
  user: address,
  num_votes: int
}

answer_object: {
  id: int,
  content: string,
  num_votes: int,
  user: address
}
```

##API
```
1. /submit/question  
Type: POST
FormData:
 - title
 - content
 - address  (user)
 Return: 
 {status: "success"}
 {status: "fail", reason: ""}

2. /submit/anwser  
Type: POST
FormData: 
 - content
 - address  (user)
 Return: 
 {status: "success"} 
 
3. /vote/question
Type: POST
FormData:
 - quesion_id 
 - address  (user)
 Return: 
 {status: "success"}

4. /vote/answer
Type: POST
FormData:
 - answer_id 
 - address  (user)
 Return: 
 {status: "success"}


 5. /questions
 Type: GET
 Return:
 {status: "success", data: [question_object]}
 
 6. /question/:question_id
 Type: GET
 Return:
 {status: "success", data: {
  question: question_object,
  anwser: [answer_object]
 }}
 ```
 
 
 
 
 

