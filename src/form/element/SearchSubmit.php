<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Submit as BaseSubmit;
class SearchSubmit extends BaseSubmit
{
    protected $name = 'search';
    protected $attrs = [
        'class' => 'btn btn-primary',
        'value' => '搜索',
    ];
}