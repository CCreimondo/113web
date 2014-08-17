<?php
	$name = $_POST["name"];
        $email = $_POST["email"];
        $qq = $_POST["qq"];
        $phone = $_POST["phone"];
        $sug = $_POST["suggestion"];
        
        $myfile = fopen("data.txt", "a") or die ("Unable to open file!");
	fwrite($myfile, $name);
	fwrite($myfile, " ");
	fwrite($myfile, $email);
	fwrite($myfile, " ");
	fwrite($myfile, $qq);
	fwrite($myfile, " ");
	fwrite($myfile, $phone);
	fwrite($myfile, " ");
	fwrite($myfile, $sug);
        fwrite($myfile, "\n");        

	fclose($myfile);
	echo 1;
?>
