define [
    'firebase'
], (firebase) ->

    class Profiles extends Backbone.Firebase.Collection

        firebase: ->
            firebase.child 'people'
