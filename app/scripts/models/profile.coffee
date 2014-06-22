define [
    'underscore'
    'backbone'
], (_, Backbone) ->

    class Profile extends Backbone.Model

        urlRoot: 'https://api.angel.co/1/users'

        url: -> "#{@urlRoot}/#{@id}?include_details=investor"

        sync: (args..., options) ->
            _.extend options, dataType: 'jsonp'

            super

        parse: (response) ->
            keys = [
                'name'
                'id'
                'bio'
                'follower_count'
                'angellist_url'
                'image'
                'twitter_url'
                'linkedin_url'
                'what_i_do'
            ]
            investorDetailKeys = [
                'startups_per_year'
                'average_amount'
                'accreditation'
                'investments'
            ]

            _.extend {},
                _.pick(response, keys)
                _.pick(response.investor_details, investorDetailKeys)
