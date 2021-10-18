//creating account
			$uidgen = bin2hex(random_bytes(4));
			$check = "INSERT INTO user (username, userid, email_addr, passhash) VALUES (?,?,?,?)";
		$stmt = $init->prepare($check);
		$stmt->bind_param("sss", $username, $uidgen, $email, $pashash);
		$stmt->execute();
		return 1;
		
			$check = "SELECT `email_addr` FROM `user` WHERE `email_addr` = ?";
		$stmt = $init->prepare($check);
		$stmt->bind_param("s", $email);
		$stmt->execute();
        $stmt->store_result();
		
			$check = "SELECT `username` FROM `user` WHERE `username` = ?";
		$stmt = $init->prepare($check);
		$stmt->bind_param("s", $username);
		$stmt->execute();
        $stmt->store_result();