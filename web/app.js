Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'C',

    appFolder: 'app',
    controllers: [
        'CommentsCtrl'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'vbox',
            items: {
                xtype: 'commentslist'
            }
        });
    }

});
var chsnTemplate;
var commentNum;
var savedComment;