import {Model} from "@mean-expert/model";
/**
 * @module example
 * @description
 **/
@Model({
  hooks: {
    access: {name: 'access', type: 'operation'},
    persist: {name: 'persist', type: 'operation'},
    afterSave: {name: 'after save', type: 'operation'},
    beforeSave: {name: 'before save', type: 'operation'},
    beforeDelete: {name: 'before delete', type: 'operation'},
    afterDelete: {name: 'after delete', type: 'operation'},
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

  access(ctx: any, next: Function): void {
    console.log('example: access');
    next();
  }

  persist(ctx: any, next: Function): void {
    console.log('example: persist');
    next();
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

  beforeDelete(ctx: any, next: Function): void {
    console.log('example: before Delete');
    next();
  }

  afterDelete(ctx: any, next: Function): void {
    console.log('example: after Delete');
    next();
  }

}

module.exports = account;
