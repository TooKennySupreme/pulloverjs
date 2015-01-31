define(['pullover'], function(pullover) {
  'use strict';

  describe('PulloverJS', function() {

    beforeEach(function() {

      //loadFixtures('fixtures.html');

    });

    it('fails at first', function() {

      expect(function() {

        pullover.fail();

      }).toThrow();

    });

  });

});
