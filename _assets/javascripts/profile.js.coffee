@App = @App or {}


class @App.Profile extends Backbone.Model

    urlRoot: 'https://api.angel.co/1/users'

    url: -> "#{@urlRoot}/#{@id}?include_details=investor"

    sync: (args..., options) ->
        _.extend options, dataType: 'jsonp'

        super
