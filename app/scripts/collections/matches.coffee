define [
    'backbone'
], (Backbone) ->

    class Matches extends Backbone.Collection

        url: 'https://api.angel.co/1/search'

        sync: (args..., options) ->
            _.extend options, dataType: 'jsonp'
            super
