<?php

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

//creates user
Route::post('/register', [App\http\Controllers\Auth\RegisterController::class, 'create']);


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home') -> middleware('auth');//redirects to login if not authenticated

Route::get('/treatments', [TreatmentController::class,'index']);
Route::get('/treatments/{treatment}', [TreatmentController::class,'show'] );
Route::post('/treatments', [TreatmentController::class,'store'])->middleware('auth');

