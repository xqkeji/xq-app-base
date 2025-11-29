<div class="form-group row align-items-center px-3">
	<label class="col-12 col-md-2 col-form-label text-start text-md-end"><?=$text?></label>
	<div class="col-10 col-md-4 mt-0 sm:mt-2 mt-md-0 d-flex align-items-center">
		<?=$content?>
		<img class="xq-captcha" src="<?=$url?>" style="margin-left:5px;margin-top:-2px;cursor: pointer;" onclick="this.src=this.src.split('?').shift()+'?'+Math.random()" width="150" height="40" title="点击刷新验证码">
	</div>
</div>