import {Model} from "@mean-expert/model";
/**
 * @module example
 * @description
 **/
@Model({
  hooks: {
    beforeSave: {name: 'before save', type: 'operation'},
    beforeMyRemote: {name: 'myRemote', type: 'beforeRemote'},
    afterMyRemote: {name: 'myRemote', type: 'afterRemote'},
  },
  remotes: {
    myRemote: {
      returns: {arg: 'result', type: 'array'},
      http: {path: '/my-remote', verb: 'get'}
    }
  }
})

class account {
  constructor(public model: any) {
  }

  beforeSave(ctx: any, next: Function): void {
    console.log('example: before Save');
    next();
  }

  beforeMyRemote(ctx: any, next: Function) {
    console.log('example: before myRemote');
    next();
  }

  myRemote(next: Function): void {
    console.log('example: myRemote');
    this.model.find(next);
  }

  afterMyRemote(ctx: any, next: Function) {
    console.log('example: after myRemote');
    next();
  }

}

module.exports = account;
