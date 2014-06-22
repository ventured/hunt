define [
    'views/base'
    'templates/index'
    'models/profile'
    'chart'
], (BaseView, IndexTemplate, Profile, chart) ->

    class ProfileView extends BaseView
        template: IndexTemplate

        initialize: (options={}) ->
            @model = new Profile
                id: options.id

            @listenToOnce @model, 'sync', @render

            @model.fetch()
