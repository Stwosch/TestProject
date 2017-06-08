export class User {
    
    id: number;
    name: string;
    photo: string;
    member: number;
    peers: number;
    lastTimeOnline: string;
    findings: number;
    activityLevel: number;
    discussions: number;
    
    constructor(id, name, photo, member, peers, lastTimeOnline, findings, activityLevel, discussions) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.member = member;
        this.peers = peers;
        this.lastTimeOnline = lastTimeOnline;
        this.findings = findings;
        this.activityLevel = activityLevel;
        this.discussions = discussions;
    }
}

export class Question {

    id: number;
    title: string;
    description: string;
    votes: number;
    follow: boolean;
    usersId: number;

    constructor(id, title, description, votes, follow, usersId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.votes = votes;
        this.follow = follow;
        this.usersId = usersId;
    }
}

export class Answer {

    id: number;
    description: string;
    date: string;
    votes: number;
    usersId: number;
    questionsId: number;

    constructor(id, description, date, votes, usersId, questionsId) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.votes = votes;
        this.usersId = usersId;
        this.questionsId = questionsId;
    }
}

export class Comment {

    id: number;
    description: string;
    date: string;
    votes: number;
    usersId: number;
    answersId: number;
    questionsId: number;

    constructor(id, description, date, votes, usersId, answersId, questionsId) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.votes = votes;
        this.usersId = usersId;
        this.answersId = answersId;
        this.questionsId = questionsId;
    }

}

export class AllQuestionsBase {
    
    id: number;
    title: string;
    userId: number;
    userName: string;
    userPhoto: string;
    relatedDiscussion: number;
    peersInvolved: number;
    conversations: number;
    activities: any[];

    constructor(id, title, userId, userName, userPhoto, relatedDiscussion, peersInvolved, conversations, activities) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.userName = userName;
        this.userPhoto = userPhoto;
        this.relatedDiscussion = relatedDiscussion;
        this.peersInvolved = peersInvolved;
        this.conversations = conversations;
        this.activities = activities;
    }
}

export class SingleQuestionBase {
    id: number;
    title: string;
    description: string;
    votes: number;
    follow: boolean;
    usersId: number;
    answers: Answer[];
    comments: Comment[];

    constructor(id, title, description, votes, follow, usersId, answers, comments) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.votes = votes;
        this.follow = follow;
        this.usersId = usersId;
        this.answers = answers;
        this.comments = comments;
    }
}