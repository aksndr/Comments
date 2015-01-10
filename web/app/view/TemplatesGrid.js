Ext.define('C.view.TemplatesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.templatesgrid',
    store: 'TemplatesStore',title : 'Выбор шаблона',
    width: 400,
    selType: 'cellmodel',
    hideHeaders : true,
    columns: [
        {

            sortable: false,
            hideable: false,
            flex: 1,
            dataIndex: 'commentTemplate',
            renderer: function(value) {
                return Ext.String.format('<div style="white-space: normal !important">{0}</div>', value);//padding: 1px 0 0 1px;
            }
        }
    ]
});