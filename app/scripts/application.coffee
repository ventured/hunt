requirejs.config
    baseUrl: '/js'
    paths:
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min'
        underscore: 'libs/underscore'
        backbone: 'libs/backbone'
        moment: 'libs/moment.min'
        humanize: 'libs/humanize.min'

    shim:
        humanize:
            exports: 'Humanize'
        underscore:
            exports: '_'
        backbone:
            deps: ['underscore', 'jquery']
            exports: 'Backbone'

require [
    'jquery'
    'backbone'
    'routers/router'
], ($, Backbone, Router) ->

    class Application
        constructor: ->
            @router = new Router

        start: ->
            # Initialize Backbone History
            Backbone.history.start pushState: true

            # Route catcher.
            if Backbone.history?._hasPushState
                $(document).on 'click', 'a[href]', (evt) =>
                    href = $(evt.currentTarget).attr 'href'
                    protocol = @protocol + '//'

                    if /^https?:/.test(protocol) and href.slice(0, protocol.length) isnt protocol
                        evt.preventDefault()
                        @router.navigate href, {trigger: true}

    window.app = new Application()
    window.app.start()