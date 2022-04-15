<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\TreatmentController;
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

Route::get('/login', function () {
    return view('/auth/login');
});
Auth::routes();

Route::post('/register',
[\App\Http\App\Http\Controllers\RegisterController::class,'create']);
Auth::routes();


//takes us to home dashboard if logged in
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home') -> middleware('auth');

//goes to welcome only if a guest, redirects to home if you are authenticated
Route::get('/', [App\Http\Controllers\WelcomeController::class, 'index'])->name('welcome') -> middleware('guest');

//user routes
Route::get('/profile/', [App\Http\Controllers\UserController::class, 'show']);
Route::get('/profileedit',[UserController::class,'showEdit']);
Route::get('/users',[UserController::class, 'showAllUsers'])-> middleware('admin');;
Route::get('/assignTreatment',function(){
    return view('/users/assignTreatment');
}) -> middleware('admin');
//treatment pages
Route::get('/treatments', function () {
    return view('/treatmentViews/indexOfTreatments');
});

Route::get('/treatment/{id}', [TreatmentController::class,'showTreatment']);

Route::get('/createTreatment', function () {
    return view('/treatmentViews/createTreatment');
});

Route::get('send-mail',[\App\Http\Controllers\MailController::class,'basic_email']);


