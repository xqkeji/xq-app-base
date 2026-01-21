<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class SeoTitle extends Text
{
    protected $name = 'seo_title';
    protected $text = 'SEO标题';
    protected $attrs = [
        'class' => 'form-control',
    ];
    protected $filters = ['string'];
    protected $template = '@row';
}