requirejs.config
    baseUrl: '/js'
    paths:
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min'
        'firebase-lib': 'https://cdn.firebase.com/js/client/1.0.15/firebase'
        underscore: 'libs/underscore'
        backbone: 'libs/backbone'
        moment: 'libs/moment.min'
        humanize: 'libs/humanize.min'
        chart: 'libs/Chart'
        bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min'
        backfire: 'libs/backbone-firebase.min'

    shim:
        humanize:
            exports: 'Humanize'
        underscore:
            exports: '_'
        backbone:
            deps: ['underscore', 'jquery']
            exports: 'Backbone'
        'firebase-lib':
            exports: 'Firebase'
        backfire:
            deps: ['backbone', 'firebase-lib']


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
                    $el = $ evt.currentTarget
                    href = $el.attr 'href'
                    protocol = $el.get(0).protocol + '//'

                    if /^https?:/.test(protocol) and href.slice(0, protocol.length) isnt protocol
                        evt.preventDefault()
                        @router.navigate href, {trigger: true}

    window.app = new Application()
    window.app.start()
