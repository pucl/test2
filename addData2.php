<?php
//$link = mysql_connect('localhost', 'root', '') or die('A kapcsolódás nem sikerült: '+mysql_error());
$link = mysql_connect("127.0.0.1", "qm", "soR624gA") or die("Nem sikerült kapcsolódni az adatbázishoz!"+mysql_error()); 
mysql_query("SET NAMES UTF8");
mysql_select_db("qm", $link);
$uname = mysql_real_escape_string($_POST['name']);
$pass = mysql_real_escape_string($_POST['pass']);
$fetch = mysql_query("SELECT * FROM felhasznalok WHERE nev ='{$uname}' AND jelszo = Sha1('{$pass}')") or die(mysql_error());
if (mysql_num_rows($fetch) == 1) {
    $a = array();
    $a['true'] = true;
    echo json_encode($a);
}else{
    $a = array();
    $a['true'] = true;
    echo json_encode($a);
}

?>