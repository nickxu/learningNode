var _ = require('underscore');

_.each(['tomcat', 'jboss', 'websphere', 'jetty'], function (name) {
  console.log(name);
});

var us = require('underscore');
us.each(['tomcat', 'jboss', 'websphere', 'jetty'], function (name) {
  console.log(name);
});
