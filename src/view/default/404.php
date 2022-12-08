<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="404找不到页面">
  <meta name="author" content="XqKeji">
  <title>404找不到页面</title>
  <?=$this->getAssetsCss('admin_page_css')?>
</head>
<body>
<div class="containter">
<div class="col-12">
		<div class="card">
		  <div class="card-header bg-warning">
			404找不到页面
		  </div>
		  <div class="card-body">
			
		  </div>
		</div>
</div>
</div>
<?php
echo $this->getAssetsJs('admin_page_js');
$this->outputAsset();
?>
</body>
</html>



