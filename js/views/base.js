(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    var BaseView;
    return BaseView = (function(_super) {
      __extends(BaseView, _super);

      function BaseView() {
        BaseView.__super__.constructor.apply(this, arguments);
        this._childViews = [];
      }

      BaseView.prototype.renderChild = function(view) {
        view.render();
        this._childViews.push(view);
        return view;
      };

      BaseView.prototype.close = function() {
        this.stopListening();
        this.undelegateEvents();
        return this.removeChildViews();
      };

      BaseView.prototype.removeChildViews = function() {
        _(this._childViews).invoke('remove');
        this._childViews = [];
        return this;
      };

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.removeChildViews();
        return BaseView.__super__.remove.apply(this, arguments);
      };

      BaseView.prototype.template = function() {
        return '';
      };

      BaseView.prototype.render = function() {
        this.$el.html(this.template(this.getContext()));
        return this.afterRender();
      };

      BaseView.prototype.afterRender = function() {};

      BaseView.prototype.getContext = function() {};

      return BaseView;

    })(Backbone.View);
  });

}).call(this);
