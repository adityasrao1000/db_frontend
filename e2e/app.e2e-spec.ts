import { DatabasePage } from './app.po';

describe('database App', () => {
  let page: DatabasePage;

  beforeEach(() => {
    page = new DatabasePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
