import { ReleaseMgmtUiPage } from './app.po';

describe('release-mgmt-ui App', function() {
  let page: ReleaseMgmtUiPage;

  beforeEach(() => {
    page = new ReleaseMgmtUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
