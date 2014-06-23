define [
    'views/base'
    'templates/profile'
    'models/profile'
    'collections/matches'
    'chart'
], (BaseView, ProfileTemplate, Profile, Matches, chart) ->

    class ProfileView extends BaseView
        template: ProfileTemplate

        events:
            'change .editable': 'update'

        initialize: (options={}) ->
            if options.id
                @model = new Profile
                    id: options.id

                @listenToOnce @model, 'sync', @render
                @listenTo @model, 'change', @render

            else if options.name
                @matches = new Matches
                @listenToOnce @matches, 'sync', @render
                @matches.fetch options.name

            @chartColors = ['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']

        update: (e) ->
            $el = @$ e.currentTarget
            # TODO: Add a way to set data at nested locations.

            @model.set $el.attr('name'), $el.val()

        getContext: ->
            context =
                chartColors: @chartColors

            if @model?
                context.profile = @model.toJSON()
            if @matches?
                context.matches = @matches.toJSON()

            return context

        afterRender: ->
            # ctx = document.getElementById("doughnut").getContext('2d')
            # data = [
            #     {
            #         value: 30,
            #         color:@chartColors[0]
            #     },
            #     {
            #         value : 50,
            #         color : @chartColors[1]
            #     },
            #     {
            #         value : 100,
            #         color : @chartColors[2]
            #     },
            #     {
            #         value : 40,
            #         color : @chartColors[3]
            #     },
            #     {
            #         value : 120,
            #         color : @chartColors[4]
            #     }
            # ]

            # new Chart(ctx).Doughnut(data)
