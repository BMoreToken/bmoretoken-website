<?PHP
// Get the data from client, assume location and return block reward value
// I guess a VPN exit node in baltimore would be a workaround, any ideas to block that?
  function getIPAddress() {  
    //whether ip is from the share internet  
     if(!emptyempty($_SERVER['HTTP_CLIENT_IP'])) {  
                $ip = $_SERVER['HTTP_CLIENT_IP'];  
        }  
    //whether ip is from the proxy  
    elseif (!emptyempty($_SERVER['HTTP_X_FORWARDED_FOR'])) {  
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];  
     }  
//whether ip is from the remote address  
    else{  
             $ip = $_SERVER['REMOTE_ADDR'];  
     }  
     return $ip;  
}  
$ip = getIPAddress();  
echo 'IP Address - '.$ip.' - Location: ';
?>
