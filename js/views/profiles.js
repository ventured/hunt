(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['views/base', 'templates/profiles', 'collections/profiles'], function(BaseView, ProfilesTemplate, Profiles) {
    var ProfilesView;
    return ProfilesView = (function(_super) {
      __extends(ProfilesView, _super);

      function ProfilesView() {
        return ProfilesView.__super__.constructor.apply(this, arguments);
      }

      ProfilesView.prototype.template = ProfilesTemplate;

      ProfilesView.prototype.initialize = function() {
        this.collection = new Profiles;
        return this.listenTo(this.collection, 'sync change add remove', this.render);
      };

      ProfilesView.prototype.getContext = function() {
        return {
          profiles: this.collection.toJSON()
        };
      };

      return ProfilesView;

    })(BaseView);
  });

}).call(this);
