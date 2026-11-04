<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Hidden;
class Id extends Hidden
{
    protected $name = '_id';
    protected $template = '';
	protected $attrs=['id'=>'xq-id'];
}