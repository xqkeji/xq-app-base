<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\TextArea;
class SeoDesc extends TextArea
{
    protected $name = 'seo_desc';
    protected $text = 'SEO描述';
    protected $attrs = [
        'rows' => '8',
        'cols' => '30',
    ];
    protected $filters = ['string'];
    protected $template = '@default';
}