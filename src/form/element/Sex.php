<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Radio;
class Sex extends Radio
{
    protected $name = 'sex';
    protected $text = '性别';
    protected $template = '@check';
    protected $items = [
        1 => '男',
        2 => '女'
    ];
    protected $filters = ['int'];
    protected $defaultValue = 1;
}