<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Td;
class ListToolbarExport extends Td
{
    protected $name = "list-toolbar-export";
    protected $attrs = [
        'colspan' => 99,
        'style' => 'text-align:left;',
    ];
    protected $el = [
        [
            '$TableDiv',
            'name' => 'list-toolbar-content',
            'attrs' => [
                'class' => 'd-flex',
            ],
            'el' => [
                '@ListAddDeleteExport',
                '@ListPager',
                '@listPageSize'
            ],
        ]
    ];
}
