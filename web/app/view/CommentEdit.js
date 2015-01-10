Ext.define('C.view.CommentEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.commentedit',

    title: 'Редактировать комментарий',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'document',
                        fieldLabel: 'Документ'
                    },
                    {
                        xtype: 'textfield',
                        name : 'comment',
                        fieldLabel: 'Комментарий'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});