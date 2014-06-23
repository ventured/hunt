(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'backbone', 'firebase'], function(_, Backbone, firebase) {
    var Profile;
    return Profile = (function(_super) {
      __extends(Profile, _super);

      function Profile() {
        return Profile.__super__.constructor.apply(this, arguments);
      }

      Profile.prototype.firebase = function() {
        return firebase.child("people/" + this.id);
      };

      Profile.prototype.fetchAngelListProfile = function(profileId) {
        var url;
        if (profileId == null) {
          profileId = this.id;
        }
        url = "https://api.angel.co/1/users/" + profileId + "?include_details=investor";
        return this.fetch({
          url: url,
          dataType: 'jsonp'
        });
      };

      Profile.prototype.parseAngelList = function(response) {
        var investorDetailKeys, keys;
        keys = ['name', 'id', 'bio', 'follower_count', 'angellist_url', 'image', 'twitter_url', 'linkedin_url', 'what_i_do'];
        investorDetailKeys = ['startups_per_year', 'average_amount', 'accreditation', 'investments'];
        return _.extend({}, _.pick(response, keys), _.pick(response.investor_details, investorDetailKeys));
      };

      return Profile;

    })(Backbone.Firebase.Model);
  });

}).call(this);
