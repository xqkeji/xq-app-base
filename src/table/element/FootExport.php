<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListFoot as BaseListFoot;
class FootExport extends BaseListFoot
{
    protected $name = 'list_foot';
	protected $buttons=['@AddButton','@BDeleteButton','@ExportButton'];
	protected $checkAll=['@CheckAll'];
	protected $pager=['@Pager','@PageSize']; 
      
}
