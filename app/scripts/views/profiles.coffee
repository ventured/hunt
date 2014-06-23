define [
    'views/base'
    'templates/profiles'
    'collections/profiles'
], (BaseView, ProfilesTemplate, Profiles) ->

    class ProfilesView extends BaseView
        template: ProfilesTemplate

        initialize: ->
            @collection = new Profiles
            @listenTo @collection, 'sync change add remove', @render

        getContext: ->
            return {profiles: @collection.toJSON()}
