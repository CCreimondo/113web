<?php
  $name = $_POST["name"];
  $email = $_POST["email"];
  $qq = $_POST["qq"];
  $phone = $_POST["phone"];
  $sug = $_POST["suggestion"];
  
  date_default_timezone_set("PRC");
  $con = mysql_connect("localhost", "reimondo", "password");
  if (!$con) {
	  die ("Could not connection: " . mysql.error());
  }

  if (!mysql_select_db("113web_feedback", $con)){
	  $cd = mysql_query("CREATE DATABASE 113web_feedback", $con);
	  if (!$cd) { echo "Error creating database: " . mysql_error(); }
	  mysql_select_db("113web_feedback", $con);
  }
          /*
   	   * Creating table in 113web_feedback database; 
   	   */
	  $sql = "CREATE TABLE Feedback
		  (
			  name varchar(15);
	  		  email varchar(20);
			  qq varchar(15);
			  phone char(11);
			  sug text(140);
		  )";
          if (!mysql_query($sql, $con)) { echo "Fail to create table feedback";}
  
  /*
   * Insert value
   */
  mysql_query("INSERT INTO Feedback (name, email, qq, phone, sug)
	  VALUES ($name, $email, $qq, $phone, $sug)");

  mysql_close($con);
?>
