import { ZmyangPage } from './app.po';

describe('zmyang App', function() {
  let page: ZmyangPage;

  beforeEach(() => {
    page = new ZmyangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
