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
                console.log arguments
                $('body').text JSON.stringify profile.toJSON()

    else
        console.log 'Noop'

console.log 'whut'
