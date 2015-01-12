Ext.define('C.store.TemplatesStore', {
    extend: 'Ext.data.Store',
    fields: ['commentTemplate'],
    model: 'C.model.TemplateModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/getCommentsTemplates',
        reader: {
            type: 'json',
            root: 'templates',
            successProperty: 'success'
        }
    }
});