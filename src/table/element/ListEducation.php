<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListEducation extends ListItem
{
    protected $name = 'education';
    protected $text = '学历';
    protected $attrs = [
        'style' => 'min-width:80px;',
    ];
	public function format($value)
	{
		$items = [
                1 => '初中',
                2 => '中职/高中',
                3 => '专科',
                4 => '本科',
                5 => '硕士',
                6 => '博士'
        ];
		if (isset($items[$value])) {
			return $items[$value];
		} else {
			return '';
		}
	}
    
}