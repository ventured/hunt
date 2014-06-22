define [
    'backbone'
], (Backbone) ->

    class BaseView extends Backbone.View
        constructor: ->
            super
            @_childViews = []

        renderChild: (view) ->
            view.render()
            @_childViews.push view
            return view

        close: ->
            @stopListening()
            @undelegateEvents()
            @removeChildViews()

        removeChildViews: ->
            _(@_childViews).invoke 'remove'
            @_childViews = []
            return @

        remove: ->
            @undelegateEvents()
            @removeChildViews()
            super

        template: -> ''

        render: ->
            @$el.html @template @getContext()
            @afterRender()

        afterRender: ->

        getContext: ->
