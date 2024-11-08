import { makeAutoObservable } from 'mobx';

class LangStore {
  constructor() {
    makeAutoObservable(this);
  }
  _user_lang = 'ru_RU'; // 'en_EN'

  init = () => {
    this._user_lang = localStorage.getItem('user_lang') || 'ru_RU';
  };

  get user_lang() {
    return this._user_lang;
  }

  set user_lang(value) {
    this._user_lang = value;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LangStore();
