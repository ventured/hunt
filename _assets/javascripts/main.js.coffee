#= require_tree models
#= require_tree views


@App = @App or {}


$ =>

    if window.angelListId
        profile = new @App.Profile
            id: window.angelListId

        profile.fetch()
            .then ->
                $('body').text JSON.stringify profile.toJSON()
