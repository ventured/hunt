define [
    'views/base'
    'templates/index'
], (BaseView, IndexTemplate) ->

    class IndexView extends BaseView
        template: IndexTemplate
