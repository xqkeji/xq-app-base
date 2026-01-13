<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\TextArea;
class Desc extends TextArea
{
    protected $name = 'desc';
    protected $text = '描述';
    protected $attrs = [
        'rows' => '8',
        'cols' => '30',
    ];
    protected $template = '@default';
}