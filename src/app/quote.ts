export class Quote {
    showDetails:boolean
    constructor(public id:number,public upVote:number,public downVote:number,public say:string,public postTime:Date,public author:string,public userName:string){
        this.showDetails=false;
    }
}
