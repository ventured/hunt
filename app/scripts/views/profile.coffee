define [
    'views/base'
    'templates/profile'
    'models/profile'
    'chart'
], (BaseView, ProfileTemplate, Profile, chart) ->

    class ProfileView extends BaseView
        template: ProfileTemplate

        initialize: (options={}) ->
            @model = new Profile
                id: options.id

            @listenToOnce @model, 'sync', @render

            @model.fetch()
