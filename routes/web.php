<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('/welcome');
});
Auth::routes();

Route::get('/login', function () {
    
    return view('/auth/login');
});
Auth::routes();

Route::post('/login');
Auth::routes();

Route::post('/register', 
[\App\Http\App\Http\Controllers\RegisterController::class,'create']);
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home') -> middleware('auth:sanctum');
//redirects to login if not authenticated

Route::middlware('auth:sanctum')->get('/treatments', function () {
    return view('/treatmentViews/indexOfTreatments');
});
Auth::routes();

Route::middleware('auth:sanctum')->get('/treatment', function () {
    return view('/treatmentViews/showTreatment');
});
Auth::routes();

Route::middleware('auth:sanctum')->get('/createTreatment', function () {
    return view('/treatmentViews/createTreatment');
});
Auth::routes();

Route::middleware('auth:sanctum')->get('/profile/{id}', [App\Http\Controllers\UserController::class, 'show']);
