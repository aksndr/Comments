Ext.define('C.view.Editor', {
    extend: 'Ext.window.Window',
    alias: 'widget.editor',
    title: 'Редактировать комментарий',
    width: 800,
    height: 532,
    modal: true,
    layout: 'fit',
    items: {
        xtype: 'container',layout: 'column',
        items: [
            {
//            xtype: 'container',// layout:'fit',
                columnWidth: 0.5,//  height: 600,
//            items:{
                xtype: 'templatesgrid', height: 500
//            }
            },
            {
                xtype: 'panel', title: 'Редактирование',
                height: 500,
                columnWidth: 0.5,
                items: {
                    xtype : 'textareafield',height: 500,width: 400, id: 'editorarea'
                },
                fbar: [
                    { type: 'button', text: 'Заменить',
                        handler: function() {
                            Ext.getCmp('editorarea').setValue(chsnTemplate);
                        }
                    },{ type: 'button', text: 'Добавить',
                        handler: function() {
                            var tmp =  Ext.getCmp('editorarea').getValue();
                            Ext.getCmp('editorarea').setValue(tmp + '\n' + chsnTemplate);
                        }
                    },'->',{ type: 'button', text: 'Сохранить',
                        handler: function() {
                            var commntsGrid = Ext.getCmp('commentslist');
                            commntsGrid.getStore().getAt(commentNum).set('comment', Ext.getCmp('editorarea').getValue());
                            commntsGrid.store.sync();
                        }
                    },{ type: 'button', text: 'Закрыть',
                        handler: function() {
                            this.up('window').close();
                        }
                    }
                ]
            }
        ]
    }
});
