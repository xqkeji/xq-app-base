<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class SearchKey extends Text
{
    protected $name = 'search_key';
    protected $text = '关键字：';
    protected $attrs = [
        'class' => 'form-control me-2',
    ];
    protected $filters = ['string'];
    protected $template = '@search';
}