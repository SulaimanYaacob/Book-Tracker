<?php 

    class database {

        //db credentials
        private $host = "localhost";  
        private $username = "root";
        private $password = "";
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
            $sql = "CREATE TABLE IF NOT EXISTS my_list_books (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                bookId VARCHAR(12) NOT NULL,
                userId VARCHAR(32) NOT NULL
            )";

            $stmt = $this->connection()->prepare($sql);
            $stmt->execute();
        }
        
    }

    // Create a database object
    $database = new database();
    $database->connection();
    $database->createTable();
    
?>