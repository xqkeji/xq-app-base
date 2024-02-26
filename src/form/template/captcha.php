<div class="form-group row">
	<label class="col-2 col-form-label text-end"><?=$text?></label>
	<div class="col-4">
		<?=$content?>
		<img class="xq-captcha" src="<?=$url?>" style="margin-left:5px;margin-top:-2px;cursor: pointer;" onclick="this.src=this.src.split('?').shift()+'?'+Math.random()" width="150" height="40" title="点击刷新验证码">
	</div>
</div>