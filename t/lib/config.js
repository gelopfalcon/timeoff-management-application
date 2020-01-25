/*
 *  Config object for tests.
 *
 *  Supposed to consolidate parameters for running tests.
 *
 * */

"use strict";

module.exports = {
  get_application_host : function(){
    return `http://34.67.15.23:${ process.env.PORT || 3000}/`;
  },

  /*
   *  Default timeout each integration test needs to be completed in
   *
   * */
  get_execution_timeout : function(){
    return 3 * 60 * 1000;
  },
}
