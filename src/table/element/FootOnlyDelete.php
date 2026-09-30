<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListFoot as BaseListFoot;
class FootOnlyDelete extends BaseListFoot
{
	protected $name = 'list_foot';
	protected $buttons=['@BDeleteButton',];
	protected $checkAll=['@CheckAll'];
	protected $pager=[]; 
}
