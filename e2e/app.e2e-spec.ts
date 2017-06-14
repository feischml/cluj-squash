import { ClujSquashPage } from './app.po';

describe('cluj-squash App', () => {
  let page: ClujSquashPage;

  beforeEach(() => {
    page = new ClujSquashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
