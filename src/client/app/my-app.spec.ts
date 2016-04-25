import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {MyAppApp} from '../app/my-app';

beforeEachProviders(() => [MyAppApp]);

describe('App: MyApp', () => {
  it('should have the `defaultMeaning` as 42', inject([MyAppApp], (app: MyAppApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([MyAppApp], (app: MyAppApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

