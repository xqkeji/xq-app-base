<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Submit as BaseSubmit;
class SearchSubmit extends BaseSubmit
{
    protected $name = 'search';
    protected $attrs = [
        'class' => 'btn btn-primary',
        'value' => '搜索',
    ];
}