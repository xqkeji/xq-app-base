<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class Fullname extends Text
{
    protected $name = 'fullname';
    protected $text = '姓名';
    protected $attrs = [
        'required' => '1',
    ];
    protected $vt = [
        ['required'],
    ];
}