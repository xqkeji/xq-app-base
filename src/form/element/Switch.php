<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Check;
class Switch extends Check
{
    protected $name = 'status';
    protected $text = '状态';
    protected $defaultValue = 1;
    protected $attrs = [
        'value' => 1,
        'class' => 'form-check-input',
    ];
    protected $template = '@switch';
    protected $filters = ['int'];
}