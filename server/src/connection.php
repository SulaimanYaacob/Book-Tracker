<?php 

    class database {

        //db credentials
        private $host = "localhost";  
        private $username = "root";
        private $password = "HawbAndFj6";
        private $db_name = "book_tracker";
        
        // Create connection
        public function connection() {
            $mysql_connect_str = "mysql:host=$this->host;dbname=$this->db_name";
            $dbConnection = new PDO($mysql_connect_str, $this->username, $this->password);
            $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            return $dbConnection;
        }

        public function createTable() {
            //Create table user for id name and email
            $sql1 = "
            CREATE TABLE IF NOT EXISTS my_list_books (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                bookId VARCHAR(12) NOT NULL,
                userId VARCHAR(32) NOT NULL,
                INDEX book_information_ibfk_1 (bookId)
            );";

            //Create table book_information for book information
            $sql2 = "
            CREATE TABLE IF NOT EXISTS book_information (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
                bookId VARCHAR(12) REFERENCES book_information_ibfk_1 (bookId),
                title VARCHAR(255),
                timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                status VARCHAR(255),
                author VARCHAR(255),
                genre VARCHAR(255),
                imageLink VARCHAR(335),
                pageCount INT(6),
                totalPageCount INT(6),
                publisher VARCHAR(255),
                publishedDate VARCHAR(255),
                ISBN VARCHAR(255),
                quote VARCHAR(255)
            );";

            $stmt = $this->connection();
            $stmt1 = $stmt->prepare($sql1);
            $stmt1->execute();
            $stmt2 = $stmt->prepare($sql2);
            $stmt2->execute();
        }

        
    }
    // Create a database object
    $database = new database();
    $database->connection();
    $database->createTable();
?>