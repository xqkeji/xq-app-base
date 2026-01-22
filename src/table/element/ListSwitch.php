<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListSwitch extends ListItem
{
    protected $name = 'status';
    protected $text = '状态';
    protected $attrs = [
        'style' => 'min-width:70px;',
    ];
    public static function export($element, $value)
    {
        if ($value == 0) {
            return '关闭';
        } else {
            return '正常';
        }
    }
    protected $el = [
        [
            '$div',
            'name' => 'list-status',
            'attrs'=>[
                'style' => 'width:32px;margin:auto;',
                'class' => 'form-check form-switch',
            ],
            'el'=>[
                [
                    '$check',
                    'name'=>'status',
                    'attrs'=>[
                        'class' => 'form-check-input',
                    ],
                ]
            ]
           
        ],
    ];
}
