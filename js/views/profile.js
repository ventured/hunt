(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['views/base', 'templates/profile', 'models/profile', 'collections/matches', 'chart'], function(BaseView, ProfileTemplate, Profile, Matches, chart) {
    var ProfileView;
    return ProfileView = (function(_super) {
      __extends(ProfileView, _super);

      function ProfileView() {
        return ProfileView.__super__.constructor.apply(this, arguments);
      }

      ProfileView.prototype.template = ProfileTemplate;

      ProfileView.prototype.events = {
        'change .editable': 'update'
      };

      ProfileView.prototype.initialize = function(options) {
        if (options == null) {
          options = {};
        }
        if (options.id) {
          this.model = new Profile({
            id: options.id
          });
          this.listenToOnce(this.model, 'sync', this.render);
          this.listenTo(this.model, 'change', this.render);
        } else if (options.name) {
          this.matches = new Matches;
          this.listenToOnce(this.matches, 'sync', this.render);
          this.matches.fetch(options.name);
        }
        return this.chartColors = ['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989'];
      };

      ProfileView.prototype.update = function(e) {
        var $el;
        $el = this.$(e.currentTarget);
        return this.model.set($el.attr('name'), $el.val());
      };

      ProfileView.prototype.getContext = function() {
        var context;
        context = {
          chartColors: this.chartColors
        };
        if (this.model != null) {
          context.profile = this.model.toJSON();
        }
        if (this.matches != null) {
          context.matches = this.matches.toJSON();
        }
        return context;
      };

      ProfileView.prototype.afterRender = function() {};

      return ProfileView;

    })(BaseView);
  });

}).call(this);
