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
$app->get('/api/user/{userId}', function(Request $request, Response $response, $args) use ($db) {
    $userId = $args['userId'];
    $sql = "SELECT * FROM my_list_books WHERE userId = :userId";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_OBJ);
    return $response->withJson($result);
});

// Get all Users
$app->get('/api/users', function(Request $request, Response $response) use ($db) {
    $sql = "SELECT * FROM user";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $response->withJson($result);
});

// Post a new user
$app->post('/api/user/add', function(Request $request, Response $response) use ($db) {
    $name = $request->getParam('name');
    $email = $request->getParam('email');
    $sql = "INSERT INTO user (name, email) VALUES (:name, :email)";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    return $response->write("User $name added");
});

// Update user based on id
$app->put('/api/user/update/{id}', function(Request $request, Response $response, $args) use ($db) {
    $id = $args['id'];
    $name = $request->getParam('name');
    $email = $request->getParam('email');
    $sql = "UPDATE user SET name = :name, email = :email WHERE id = :id";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    return $response->write("User updated");
});

// Delete user based on id
$app->delete('/api/user/delete/{id}', function(Request $request, Response $response, $args) use ($db) {
    $id = $args['id'];
    $sql = "DELETE FROM user WHERE id = :id";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return $response->write("User deleted");
});

$app->run();
?>
