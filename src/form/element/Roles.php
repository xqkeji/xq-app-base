<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Check;
class Roles extends Check
{
    protected $name = 'roles';
    protected $text = '角色';
    protected $template = '@check';
	public static function beforeAdd($element)
	{
		 $model = \xqkeji\mvc\builder\Model::getModel("user_role");
            $roles = $model->where('status', 1)->select();
            $data = [];
            foreach($roles as $role)
            {
                $key = (string)$role->getKey();
                $data[$key] = $role->rolename;
            }
            $element->setItems($data);
	}
    
}