import {Model} from "@mean-expert/model";
/**
 * @module example
 * @description
 **/
@Model({
  hooks: {
    beforeSave: {name: 'before save', type: 'operation'}
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
    console.log('example: Before Save');
    next();
  }

  myRemote(next: Function): void {
    this.model.find(next);
  }
}

module.exports = account;
