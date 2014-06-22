define [
    'views/base'
    'templates/index'
    'models/profile'
], (BaseView, IndexTemplate, Profile) ->

    class ProfileView extends BaseView
        template: IndexTemplate

        initialize: (options={}) ->
            @model = new Profile
                id: options.id

            @listenToOnce @model, 'sync', @render

            @model.fetch()

        getContext: ->
            console.log 'Fetching context', @model.toJSON()
            @model.toJSON()
