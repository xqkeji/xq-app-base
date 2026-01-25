<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListFoot as BaseListFoot;
class ListFootOnlyDelete extends BaseListFoot
{
    protected $name = 'list_foot_only_delete';
    protected $el = [
        '@ListCheckAll',
        [
            '$ListItem',
            'attr_colspan' => '99',
            'attr_style' => 'text-align:left;',
            'el' => [
                [
                    '$Button',
                    'name'=>'b_delete',
                    'attrs'=>[
                        'value'=>'删除',
                        'class'=>'btn btn-danger me-1 xq-batch',
                    ],
                ],
            ]
        ],
    ];
}
