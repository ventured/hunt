#= require profile
@App = @App or {}


$ =>

    if window.angelListId
        profile = new @App.Profile
            id: window.angelListId


        console.log 'Heyo'

        profile.fetch()
            .then ->
                console.log 'Got it back'
                $('body').text profile.toJSON()

    else
        console.log 'Noop'

console.log 'whut'
