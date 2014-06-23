(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['backbone'], function(Backbone) {
    var Matches;
    return Matches = (function(_super) {
      __extends(Matches, _super);

      function Matches() {
        return Matches.__super__.constructor.apply(this, arguments);
      }

      Matches.prototype.url = 'https://api.angel.co/1/search';

      Matches.prototype.sync = function() {
        var args, options, _i;
        args = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
        _.extend(options, {
          dataType: 'jsonp'
        });
        return Matches.__super__.sync.apply(this, arguments);
      };

      return Matches;

    })(Backbone.Collection);
  });

}).call(this);
