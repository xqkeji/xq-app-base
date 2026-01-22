<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\TableDiv;
class ListPager extends TableDiv
{
    protected $name = 'list_pager';
    protected $el = [
        [
            '$ViewData',
            'name' => 'pager',
            'key' => 'pager',
        ],
    ];
    
}