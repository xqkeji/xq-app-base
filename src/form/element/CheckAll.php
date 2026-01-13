<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Check;
class CheckAll extends Check
{
    protected $name = 'check_all';
    protected $attrs = [
        'class' => 'form-check-input xq-check-all',
    ];
}