<?php
namespace xqkeji\app\base\form\template;
class Switch
{
    public static function getTemplate()
    {
        return '<div class="form-group row align-items-center px-3">
	<label class="col-2 col-md-2 col-form-label text-start text-md-end"><?=$text?></label>
	<div class="col-10 col-md-4 mt-0 sm:mt-2 mt-md-0 d-flex align-items-center">
		<div class="form-check form-switch">
		<?=$content?>
		</div>
	</div>
</div>';
    }
}