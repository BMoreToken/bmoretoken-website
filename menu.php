<?PHP
ob_start();
include_once('header.html');
$html = ob_get_clean();
if (isset($title)){
	$html = str_replace('BMoreToken MetaMask Connection',$title,$html);
}else{
	$html = str_replace('BMoreToken MetaMask Connection','BMoreToken Project Home ($BALT)',$html);
}
echo $html;
?>
