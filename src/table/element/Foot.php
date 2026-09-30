<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListFoot as BaseListFoot;
class Foot extends BaseListFoot
{
    protected $name = 'list_foot';
	protected $buttons=['@AddButton','@BDeleteButton'];
	protected $checkAll=['@CheckAll'];
	protected $pager=['@Pager','@PageSize']; 
}
