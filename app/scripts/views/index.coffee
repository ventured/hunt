define [
    'views/base'
    'templates/index'
    'collections/profiles'
], (BaseView, IndexTemplate, Profiles) ->

    class IndexView extends BaseView
        template: IndexTemplate

        initialize: ->
            @collection = new Profiles
            @listenTo @collection, 'sync change add remove', @render

        getContext: ->
            return {profiles: @collection.toJSON()}

