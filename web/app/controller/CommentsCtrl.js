Ext.define('C.controller.CommentsCtrl', {
    extend: 'Ext.app.Controller',
    views: ['CommentsView','CommentEdit','Editor','TemplatesGrid'],
    stores: ['CommentsStore','TemplatesStore'],
    models: ['CommentModel','TemplateModel'],
    init: function() {
        this.control({
            'commentslist': {
                itemdblclick: this.onEditComment,
//            },
//            'commentslist': {
                oneditcomment: this.openEditor
            },
            'templatesgrid': {
                itemclick: this.onItemClick
            },
            'commentedit button[action=save]': {
                click: this.updateComment
            }
        });
    },
    onItemClick: function(grid, record, item, index, e, eOpts ){
        //alert(record.get('commentTemplate'))
        chsnTemplate = record.get('commentTemplate');
        //Ext.getCmp('editorarea').setValue(record.get('commentTemplate'))
    },
    onEditComment: function(grid, record, item, index) {
        this.openEditor(grid,index);
    },
    openEditor: function(grid, rowIndex) {
        savedComment = grid.getStore().getAt(rowIndex).get('comment');
        var view = Ext.widget('editor');
        commentNum = rowIndex;
        view.show();
    },
    updateComment: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
    }
});