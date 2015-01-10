Ext.define('C.view.CommentsView', {
    extend: 'Ext.grid.Panel',
    id: 'commentslist',
    alias: 'widget.commentslist',
    title: 'Комментарии',
    store: 'CommentsStore',
    width: 860,
//    height: 200,
    selType: 'cellmodel',
    frame: true,
    columns: [
        {xtype: 'rownumberer'},
        {
            text: 'Название документа',
            width: 200,
            sortable: false,
            hideable: false,
            dataIndex: 'document'
        },
        {
            text: 'Комментарий', flex: 1,
//            width: 605,
            dataIndex: 'comment',
            renderer: function (value) {
                return Ext.String.format('<div style="white-space: normal !important">{0}</div>', value);
//                return Ext.String.format('<textarea rows="5" cols="71" style="resize: none" disabled>{0}</textarea>', value);
            }
        },
        {
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [
                {
                    icon: 'extjs/resources/edit.gif',
                    tooltip: 'Редактировать комментарий',
                    handler: function (grid, rowIndex, colIndex) {
                        this.up('grid').fireEvent('oneditcomment', grid, rowIndex, colIndex);
                    }
                }
            ]
        }
    ],
    initComponent: function () {
        this.addEvents('oneditcomment');
        this.callParent(arguments);
    },
    fbar: [
        { type: 'button', text: 'Сохранить',
            handler: function () {
                var commentsGrid = Ext.getCmp('commentslist');
                commentsGrid.getStore().getProxy().setExtraParam('command','save');
                commentsGrid.getStore().commitChanges();
            }
        },'-',
        { type: 'button', text: 'Отмена',
            handler: function () {
                if (commentNum != undefined && savedComment != undefined){
                    var commentsGrid = Ext.getCmp('commentslist');
                    commentsGrid.getStore().getAt(commentNum).set('comment', savedComment);
                    commentsGrid.getView().refresh();
                }
            }
        }
    ]

    //textareafield
});