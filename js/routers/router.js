(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'views/index', 'views/profiles', 'views/profile'], function(Backbone, IndexView, ProfilesView, ProfileView) {
    var Router;
    return Router = (function(_super) {
      __extends(Router, _super);

      function Router() {
        return Router.__super__.constructor.apply(this, arguments);
      }

      Router.prototype.routes = {
        '': 'index',
        'profiles': 'profiles',
        'profiles/:profileId': 'profile'
      };

      Router.prototype._showView = function(view) {
        var _ref;
        if ((_ref = this.currentView) != null) {
          _ref.close();
        }
        this.currentView = view;
        $('#app').html(view.el);
        return view.render();
      };

      Router.prototype.index = function() {
        var v;
        v = new IndexView;
        return this._showView(v);
      };

      Router.prototype.profiles = function() {
        var v;
        v = new ProfilesView;
        return this._showView(v);
      };

      Router.prototype.profile = function(profileId) {
        var v;
        v = new ProfileView({
          id: profileId
        });
        return this._showView(v);
      };

      return Router;

    })(Backbone.Router);
  });

}).call(this);
