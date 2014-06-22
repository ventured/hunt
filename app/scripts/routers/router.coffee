define [
    'jquery'
    'backbone'
    'views/index'
    'views/profile'
], ($, Backbone, IndexView, ProfileView) ->

    class Router extends Backbone.Router

        routes:
            '': 'index'
            'profiles/:profileId': 'profile'

        _showView: (view) ->
            @currentView?.close()
            @currentView = view
            $('#app').html view.el
            view.render()

        index: ->
            v = new IndexView
            @_showView v

        profile: (profileId) ->
            v = new ProfileView
                id: profileId
            @_showView v
