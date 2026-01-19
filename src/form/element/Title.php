<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class Title extends Text
{
    protected $name = 'title';
    protected $text = '标题';
    protected $attrs = [
        'required' => 'true',
    ];
    protected $filters = ['string'];
    protected $vt = [['required']];
    protected $template = '@default';
}