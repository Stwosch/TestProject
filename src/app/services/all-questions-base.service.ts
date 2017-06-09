import { Injectable } from '@angular/core';
import { AnswersService } from './answers.service';
import { QuestionsService } from './questions.service';
import { CommentsService } from './comments.service';
import { UsersService } from './users.service';
import { User, Comment, Question, Answer, AllQuestionsBase } from '../domain-model-classes/custom.classes';

@Injectable()
export class AllQuestionsBaseService {

  constructor(private answersService: AnswersService,
              private questionService: QuestionsService,
              private commentsService: CommentsService,
              private usersService: UsersService) { }

  createAllQuestionsBase(question: Question, answers: Answer[], comments: Comment[], users: User[]) {

    const user: User = this.getUser(question, users);

    if(user === undefined) {
      console.error("User can't be undefined");
      return;
    }
    
    const relatedDiscussion = this.getRelatedDiscussion(question, comments);
    const peersInvolved = this.getPeersInvolved(question, answers, comments);
    const conversations = this.getConversations(question, answers);
    const activities = this.getActivities(question, answers, comments);

    return new AllQuestionsBase(question.id, question.title, user.id, user.name, user.photo, relatedDiscussion, peersInvolved, conversations, activities);
  }
  
  getUser(question: Question, users: User[]): User {
      
    return users.find((user: User) => user.id === question.usersId);
  }

  getRelatedDiscussion(question: Question, comments: Comment[]): number {
    
    const answersIds: number[] = [];

    comments.forEach((comment: Comment) => {
          
          if(comment.questionsId === question.id) {

            const index: number = answersIds.findIndex((answersId: number) => answersId === comment.answersId);

            if(index === -1) {
              answersIds.push(comment.answersId);
            }
          }

    });

    return answersIds.length;
  }

  getPeersInvolved(question: Question, answers: Answer[], comments: Comment[]): number {
    
    const peers: number[] = [];

    peers.push(question.usersId);

    answers.forEach((answer: Answer) => {
        
        if(answer.questionsId === question.id) {

            const index = peers.findIndex(peer => peer === answer.usersId);
    
            if(index === -1) {
              peers.push(answer.usersId);
            }
        }

    });

    comments.forEach((comment: Comment) => {
      
      if(comment.questionsId === question.id) {

        const index = peers.findIndex(peer => peer === comment.usersId);

        if(index === -1) {
          peers.push(comment.usersId);
        }
      }
    });

    return peers.length;
  }

  getConversations(question: Question, answers: Answer[]): number {

    let conversations = 0;

    answers.forEach((answer: Answer) => {

      if(answer.questionsId === question.id) {
        conversations++;
      }

    });

    return conversations;
  }

  getActivities(question: Question, answers: Answer[], comments: Comment[]) {

    const activities = [];

    answers.forEach((answer: Answer) => {

      if(answer.questionsId === question.id) {
        activities.push(answer);
      }

    });

    comments.forEach((comment: Comment) => {
      
      if(comment.questionsId === question.id) {
        activities.push(comment);
      }

    });

    return activities;
  }

  createAllQuestionsBaseObjects(resolve, rejected, questions: Question[], answers: Answer[], comments: Comment[], users: User[]) {
    
    const data: AllQuestionsBase[] = [];

    questions.forEach((question: Question) => {
        
        const user: User = this.getUser(question, users);

        if(user === undefined) {
          rejected(new Error("User can't be undefined"));
          return;
        }
        
        const relatedDiscussion = this.getRelatedDiscussion(question, comments);
        const peersInvolved = this.getPeersInvolved(question, answers, comments);
        const conversations = this.getConversations(question, answers);
        const activities = this.getActivities(question, answers, comments);

        data.push(new AllQuestionsBase(question.id, question.title, user.id, user.name, user.photo, relatedDiscussion, peersInvolved, conversations, activities));
    });

    resolve(data);
  }

  getAllUsers(resolve, rejected, questions: Question[], answers: Answer[], comments: Comment[]) {

    this.usersService.getAllUsers()
      .then((users: User[]) => this.createAllQuestionsBaseObjects(resolve, rejected, questions, answers, comments, users))
      .catch(err => console.log(err));  

  }

  getAnswersCommentsForQuestions(resolve, rejected, questions: Question[]) {
    
    if(questions.length < 1) {

      resolve(questions);
      return;
    }

    const promiseArr = [];

    questions.forEach((question: Question) => {
      promiseArr.push(this.answersService.getAnswersByQuestionId(question.id));
      promiseArr.push(this.commentsService.getCommentsByQuestionId(question.id));
    });

    Promise.all(promiseArr)
      .then(answersComments => {

          const answers: Answer[] = [];
          const comments: Comment[] = [];

          answersComments.forEach(val => {
            
            if(val[0] instanceof Answer) {

              val.forEach((answer: Answer) => {
                answers.push(answer);
              });

            } else if(val[0] instanceof Comment) {

              val.forEach((comment: Comment) => {
                comments.push(comment);
              });
            }

          });

          this.getAllUsers(resolve, rejected, questions, answers, comments); 

      })
      .catch(err => console.log(err));  

      
  }
  
  getAllQuestionsBaseData(start: number, quantity: number) {
    
    return new Promise((resolve, rejected) => {

      this.questionService.getQuestions(start, quantity)
        .then((questions: Question[]) => this.getAnswersCommentsForQuestions(resolve, rejected, questions))
        .catch(err => console.log(err));
    });
    
  }

  getAllQuestionsBaseSearch(q: string) {
    return new Promise((resolve, rejected) => {

      this.questionService.getQuestionsSearch(q)
        .then((questions: Question[]) => this.getAnswersCommentsForQuestions(resolve, rejected, questions))
        .catch(err => console.log(err));
    });
  }

}
