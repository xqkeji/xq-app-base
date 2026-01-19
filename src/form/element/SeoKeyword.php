<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class SeoKeyword extends Text
{
    protected $name = 'seo_keyword';
    protected $text = 'SEO关键字';
    protected $filters = ['string'];
    protected $template = '@default';
}