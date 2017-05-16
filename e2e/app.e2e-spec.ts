import { EventBasicPage } from './app.po';

describe('event-basic App', () => {
  let page: EventBasicPage;

  beforeEach(() => {
    page = new EventBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('false works!');
  });
});
