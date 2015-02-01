define(['pullover'], function(pullover) {
  'use strict';

  describe('PulloverJS', function() {

    beforeEach(function() {
      //loadFixtures('fixtures.html');
    });

    it('fails for when calling `nonexisting()` API method', function()  {
      expect(function() {
        pullover.nonexisting();
      }).toThrow();
    });

  });

});
