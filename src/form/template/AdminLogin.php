<?php
namespace xqkeji\app\base\form\template;
class AdminLogin
{
    public static function getTemplate()
    {
        return '<div class="input-group mb-3">
					<div class="input-group-append input-group-text">
					  <span class="<?=$icon?>"></span>
					</div>
					<?=$content?>
				</div>';
    }
}
