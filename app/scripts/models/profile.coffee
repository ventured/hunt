define [
    'underscore'
    'backbone'
    'firebase'
], (_, Backbone, firebase) ->

    class Profile extends Backbone.Firebase.Model

        firebase: ->
            firebase.child "people/#{@id}"

        fetchAngelListProfile: (profileId) ->
            profileId ?= @id
            url = "https://api.angel.co/1/users/#{profileId}?include_details=investor"
            @fetch {url, dataType: 'jsonp'}

        parseAngelList: (response) ->
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
