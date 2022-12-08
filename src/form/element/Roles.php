<?php
return [
	'check',
	'name'=>'roles',
	'text'=>'角色',
	'template'=>'check',
	'event'=>[
		'beforeAdd'=>function($element)
		{
			$model=\xqkeji\mvc\builder\Model::getModel("user_role");
			$roles=$model->where('status',1)->select();
			$data=[];
			foreach($roles as $role)
			{
				$key=(string)$role->getKey();
				$data[$key]=$role->rolename;
			}
			$element->setItems($data);
		}
	],
];