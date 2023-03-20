<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="XqKeji">
  <title><?=isset($pageTitle)?$pageTitle:''?></title>
  <?=$this->getAssetsCss('admin-page-css')?>
</head>
<body>
  <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <?=$this->getContent()?>
        </div>
      </div>
  </div>
<?php
echo $this->getAssetsJs('admin-page-js');
$this->outputAsset();
?>
</body>
</html>

