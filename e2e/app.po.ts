import { browser, element, by } from 'protractor';

export class EventBasicPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('false-root h1')).getText();
  }
}
