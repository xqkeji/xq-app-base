<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\ListItem;
class ListCheckAll extends ListItem
{
    protected $name = "ListCheckAll";
    protected $el = [
        [
            '$Check',
            'name' => 'check_all',
            'attrs' => [
                'class' => 'form-check-input xq-check-all',
            ],
        
        ]
    ];
}
