define [
    'backbone'
    'views/index'
    'views/profiles'
    'views/profile'
], (Backbone, IndexView, ProfilesView, ProfileView) ->

    class Router extends Backbone.Router

        routes:
            '': 'index'
            'profiles': 'profiles'
            'profiles/:profileId': 'profile'

        _showView: (view) ->
            @currentView?.close()
            @currentView = view
            $('#app').html view.el
            view.render()

        index: ->
            v = new IndexView
            @_showView v

        profiles: ->
            v = new ProfilesView
            @_showView v

        profile: (profileId) ->
            v = new ProfileView
                id: profileId
            @_showView v
