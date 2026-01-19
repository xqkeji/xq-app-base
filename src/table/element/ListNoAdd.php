<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListFoot as BaseListFoot;
class ListNoAdd extends BaseListFoot
{
    protected $name = 'list_no_add';
    protected $el = [
        '@ListCheckAll',
        [
            '@ListItem',
            'attr_colspan' => '99',
            'attr_style' => 'text-align:left;',
            'el' => [
                '@BatchDelete',
            ]
        ],
    ];
}
