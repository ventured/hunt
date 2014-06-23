(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['views/base', 'templates/index', 'collections/profiles'], function(BaseView, IndexTemplate, Profiles) {
    var IndexView;
    return IndexView = (function(_super) {
      __extends(IndexView, _super);

      function IndexView() {
        return IndexView.__super__.constructor.apply(this, arguments);
      }

      IndexView.prototype.template = IndexTemplate;

      IndexView.prototype.initialize = function() {
        this.collection = new Profiles;
        return this.listenTo(this.collection, 'sync change add remove', this.render);
      };

      IndexView.prototype.getContext = function() {
        return {
          profiles: this.collection.toJSON()
        };
      };

      return IndexView;

    })(BaseView);
  });

}).call(this);
