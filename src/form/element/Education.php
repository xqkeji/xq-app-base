<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Select;
class Education extends Select
{
    protected $name = 'education';
    protected $text = '学历';
    protected $attrs = [
        'required' => 'true',
    ];
    protected $filters = ['int'];
    protected $vt = [['required']];
    protected $items = [
        1 => '初中', '中职/高中', '专科', '本科', '硕士', '博士'
    ];
    protected $defaultValue = 4;
    protected $template = '@default';
}