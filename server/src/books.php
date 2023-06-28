<?php
require '../vendor/autoload.php';
require_once './connection.php';

$database = new database();
$db = $database->connection();

use Slim\Http\Request;
use Slim\Http\Response;

$app = new Slim\App();

class CorsMiddleware
{
    public function __invoke($request, $response, $next)
    {
        $response = $next($request, $response);
        
        return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            ->withHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }
}

$app->add(new CorsMiddleware());

// Get List of my Books
$app->get('/api/books/{userId}', function(Request $request, Response $response, $args) use ($db) {
    $userId = $args['userId'];
    $sql = "SELECT * FROM my_list_books WHERE userId = :userId";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $response->withJson($result);
});

// Add book to my list
$app->post('/api/books/add', function(Request $request, Response $response) use ($db) {

    $bookId = $request->getParam('bookId');
    $userId = $request->getParam('userId');

    // Check if the book ID already exists in the database
    $checkSql = "SELECT * FROM my_list_books WHERE bookId = :bookId AND userId = :userId";
    $checkStmt = $db->prepare($checkSql);
    $checkStmt->bindParam(':bookId', $bookId);
    $checkStmt->bindParam(':userId', $userId);
    $checkStmt->execute();
    $existingBook = $checkStmt->fetch(PDO::FETCH_ASSOC);

    if ($existingBook) {
        // Book ID already exists, send a message or response indicating the duplicate entry
        return $response->write("Book already exists in the list");
    } else {
        // Book ID does not exist, proceed with adding the book to the list
        $insertSql = "INSERT INTO my_list_books (bookId, userId) VALUES (:bookId, :userId)";
        $insertStmt = $db->prepare($insertSql);
        $insertStmt->bindParam(':bookId', $bookId);
        $insertStmt->bindParam(':userId', $userId);
        $insertStmt->execute();

        // adding bookId to book_information table
        $sql = "INSERT INTO book_information (bookId) VALUES (:bookId)";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':bookId', $bookId);
        $stmt->execute();

        // Get book information from Google Books API
        $apiUrl = "https://www.googleapis.com/books/v1/volumes/{$bookId}";
        $apiresponse = file_get_contents($apiUrl);
        echo ('console.log(' + $apiresponse + ')');

        if ($apiresponse == true) {
            $responseData = json_decode($apiresponse, true);
            $bookId = $responseData['id'];
            $title = $responseData['volumeInfo']['title'];
            $author = $responseData['volumeInfo']['authors'][0];
            $genre = $responseData['volumeInfo']['categories'][0];
            $image = $responseData['volumeInfo']['imageLinks']['thumbnail'];
            $totalPageCount = $responseData['volumeInfo']['pageCount'];
            $publisher = $responseData['volumeInfo']['publisher'];
            $publishedDate = $responseData['volumeInfo']['publishedDate'];
            $ISBN = $responseData['volumeInfo']['industryIdentifiers'][0]['identifier'];

            // Update values in book_information table
            $sql = "UPDATE book_information SET title = :title, author = :author, genre = :genre, image = :image, totalPageCount = :totalPageCount, publisher = :publisher, publishedDate = :publishedDate, ISBN = :ISBN WHERE bookId = :bookId";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':bookId', $bookId);
            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':author', $author);
            $stmt->bindParam(':genre', $genre);
            $stmt->bindParam(':image', $image);
            $stmt->bindParam(':totalPageCount', $totalPageCount);
            $stmt->bindParam(':publisher', $publisher);
            $stmt->bindParam(':publishedDate', $publishedDate);
            $stmt->bindParam(':ISBN', $ISBN);

            $stmt->execute();
        }
        
        return $response->write("Book added");
    }
});


// Delete book from my list
$app->delete('/api/books/delete', function(Request $request, Response $response) use ($db) {
    $bookId = $request->getParam('bookId');
    $userId = $request->getParam('userId');
    $sql = "DELETE FROM my_list_books WHERE bookId = :bookId AND userId = :userId";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':bookId', $bookId);
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();
    return $response->write("Book deleted");
});

// Read book from my list
$app->get('/api/books/read/{userId}', function(Request $request, Response $response, $args) use ($db) {
    $userId = $args['userId'];
    
    $sql = "SELECT * FROM my_list_books WHERE userId = :userId";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_OBJ);

    $bookIds = array();
    foreach ($result as $row) {
        $bookIds[] = $row->bookId;
    }


    $sql = "SELECT * FROM book_information WHERE bookId IN (" . implode(',', array_map('intval', $bookIds)) . ")";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $response->withJson($result);
});

$app->run();
