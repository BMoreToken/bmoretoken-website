<?PHP
require_once 'vendor/autoload.php';
use GeoIp2\Database\Reader;




// Get the data from client, assume location and return block reward value
// I guess a VPN exit node in baltimore would be a workaround, any ideas to block that?
  function getIPAddress() {  
    //whether ip is from the share internet  
     if(!empty($_SERVER['HTTP_CLIENT_IP'])) {  
                $ip = $_SERVER['HTTP_CLIENT_IP'];  
        }  
    //whether ip is from the proxy  
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {  
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];  
     }  
//whether ip is from the remote address  
    else{  
             $ip = $_SERVER['REMOTE_ADDR'];  
     }  
     return $ip;  
}  


$ip = getIPAddress();  
echo 'IP Address - '.$ip;

// This creates the Reader object, which should be reused across
// lookups.
$reader = new Reader('/usr/local/share/GeoIP/GeoIP2-ISP.mmdb');

$record = $reader->isp($ip);

print($record->autonomousSystemNumber . "\n"); // 217
print($record->autonomousSystemOrganization . "\n"); // 'University of Minnesota'
print($record->isp . "\n"); // 'University of Minnesota'
print($record->organization . "\n"); // 'University of Minnesota'

print($record->ipAddress . "\n"); // '128.101.101.101'
print($record->network . "\n"); // '128.101.101.101/32'



?>
