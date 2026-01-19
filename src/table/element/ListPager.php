<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Div;
class ListPager extends Div
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