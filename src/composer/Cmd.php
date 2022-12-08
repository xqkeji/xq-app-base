<?php
namespace xqkeji\app\base\composer;
class Cmd{
    public static function postInstallBootstrap() : void
    {
        $ds=DIRECTORY_SEPARATOR;
        $root_dir=dirname(dirname(dirname(__DIR__)));
        $vendor_dir=$root_dir.$ds.'vendor'.$ds;
        $assets_dir=$root_dir.$ds.'www'.$ds.'assets'.$ds;
        $bootstrap_dir=$vendor_dir.'twbs'.$ds.'dist'.$ds;
        $dist_dir=$assets_dir.'bootstrap'.$ds;
        if(file_exists($dist_dir))
        {
            static::removeDir($dist_dir);
        }
        static::copyDir($bootstrap_dir,$dist_dir);
    }
    public static function createDir($path, $mode = 0775, $recursive = true)
    {
        if (is_dir($path)) {
            return true;
        }
        $parentDir = dirname($path);
        if ($recursive && !is_dir($parentDir) && $parentDir !== $path) {
            static::createDir($parentDir, $mode, true);
        }
        try {
            if (!mkdir($path, $mode)) {
                return false;
            }
        } catch (\Exception $e) {
            if (!is_dir($path)) {
                throw new \Exception("Failed to create directory \"$path\": " . $e->getMessage(), $e->getCode());
            }
        }
        try {
            return chmod($path, $mode);
        } catch (\Exception $e) {
            throw new \Exception("Failed to change permissions for directory \"$path\": " . $e->getMessage(), $e->getCode());
        }
    }
    public static function copyDir($src, $dst)
    {
        $dstExists = is_dir($dst);
        if (!$dstExists) {
            self::createDir($dst);
        }

        $handle = opendir($src);
        if ($handle === false) {
            throw new \InvalidArgumentException("Unable to open directory: $src");
        }
        while (($file = readdir($handle)) !== false) {
            if ($file === '.' || $file === '..') {
                continue;
            }
            $from = $src . DIRECTORY_SEPARATOR . $file;
            $to = $dst . DIRECTORY_SEPARATOR . $file;
            if (is_file($from)) {
                copy($from, $to);
                @chmod($to, 0775);
                
            } else {
                static::copyDir($from, $to);
            }
        }
        closedir($handle);
    }
    public static function removeDir($dir)
    {
        if (!is_dir($dir)) {
            return;
        }
        if (!($handle = opendir($dir))) {
            return;
        }
        while (($file = readdir($handle)) !== false) {
            if ($file === '.' || $file === '..') {
                continue;
            }
            $path = $dir . DIRECTORY_SEPARATOR . $file;
            if (is_dir($path)) {
                static::removeDir($path);
            } else {
                static::unlink($path);
            }
        }
        closedir($handle);
        if (is_link($dir)) {
            static::unlink($dir);
        } else {
            rmdir($dir);
        }
    }
    public static function unlink($path)
    {
        $isWindows = DIRECTORY_SEPARATOR === '\\';

        if (!$isWindows) {
            return unlink($path);
        }

        if (is_link($path) && is_dir($path)) {
            return rmdir($path);
        }

        try {
            return unlink($path);
        } catch (\ErrorException $e) {
            return false;
        }
    }
}