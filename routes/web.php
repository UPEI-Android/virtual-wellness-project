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

Route::get('/', function () {
    return view('/welcome');
});

Route::get('/login', function () {
    
    return view('/auth/login');
});
Auth::routes();

Route::post('/login');

Route::post('/register', 
[\App\Http\App\Http\Controllers\RegisterController::class,'create']);
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home') -> middleware('auth');


//treatment pages
Route::get('/treatments', function () {
    return view('/treatmentViews/indexOfTreatments');
});
Route::get('/treatment', function () {
    return view('/treatmentViews/showTreatment');
});

Route::get('/createTreatment', function () {
    return view('/treatmentViews/createTreatment');
});

//Route::get('/userprofile/{id}', [UserController::class,'show']);


