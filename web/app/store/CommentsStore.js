Ext.define('C.store.CommentsStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'document', 'comment'],
    model: 'C.model.CommentModel',
    autoLoad: true,
    autoSync: false,
    id: 'commentsStore',
    proxy: {
        type: 'ajax',
//        url: '/getDocumentComments',
//        reader: {
//            type: 'json',
//            root: 'comments',
//            successProperty: 'success'
//        }
        api: {
            read: '/getDocumentComments',
            update: '/updateDocumentComments'
        },
        reader: {
            type: 'json',
            root: 'comments',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'comments'
        }

    } , listeners: {
        write: function (store, operation, options) {
            console.log(operation);
        },
        update: function (store, record, operation, modifiedFieldNames, eOpts ){
            console.log(operation);
        }
    }
});