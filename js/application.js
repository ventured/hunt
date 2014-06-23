(function() {
  requirejs.config({
    baseUrl: '/js',
    paths: {
      jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
      'firebase-lib': 'https://cdn.firebase.com/js/client/1.0.15/firebase',
      underscore: 'libs/underscore',
      backbone: 'libs/backbone',
      moment: 'libs/moment.min',
      humanize: 'libs/humanize.min',
      chart: 'libs/Chart',
      bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
      backfire: 'libs/backbone-firebase.min'
    },
    shim: {
      humanize: {
        exports: 'Humanize'
      },
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'firebase-lib': {
        exports: 'Firebase'
      },
      backfire: {
        deps: ['backbone', 'firebase-lib']
      }
    }
  });

  require(['jquery', 'backbone', 'routers/router'], function($, Backbone, Router) {
    var Application;
    Application = (function() {
      function Application() {
        this.router = new Router;
      }

      Application.prototype.start = function() {
        var _ref;
        Backbone.history.start({
          pushState: true
        });
        if ((_ref = Backbone.history) != null ? _ref._hasPushState : void 0) {
          return $(document).on('click', 'a[href]', (function(_this) {
            return function(evt) {
              var $el, href, protocol;
              $el = $(evt.currentTarget);
              href = $el.attr('href');
              protocol = $el.get(0).protocol + '//';
              if (/^https?:/.test(protocol) && href.slice(0, protocol.length) !== protocol) {
                evt.preventDefault();
                return _this.router.navigate(href, {
                  trigger: true
                });
              }
            };
          })(this));
        }
      };

      return Application;

    })();
    window.app = new Application();
    return window.app.start();
  });

}).call(this);
