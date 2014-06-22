define [
    'views/base'
    'templates/profile'
    'models/profile'
    'chart'
], (BaseView, ProfileTemplate, Profile, chart) ->

    class ProfileView extends BaseView
        template: ProfileTemplate

        initialize: (options={}) ->
            @model = new Profile
                id: options.id

            @listenToOnce @model, 'sync', @render

            @model.fetch()

            @chartColors = ['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']

        getContext: ->
            chartColors: @chartColors


        afterRender: ->
            ctx = document.getElementById("doughnut").getContext('2d')
            data = [
                {
                    value: 30,
                    color:@chartColors[0]
                },
                {
                    value : 50,
                    color : @chartColors[1]
                },
                {
                    value : 100,
                    color : @chartColors[2]
                },
                {
                    value : 40,
                    color : @chartColors[3]
                },
                {
                    value : 120,
                    color : @chartColors[4]
                }
            ]

            new Chart(ctx).Doughnut(data)
