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

Route::get('/profile/{id}', [UserController::class,'show']);

//creates user
Route::post('/register', [UserController::class, 'store']);


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home') -> middleware('auth');
//redirects to login if not authenticated


Route::get('/treatments', function () {
    return view('/treatmentViews/indexOfTreatments');
});
Auth::routes();

Route::get('/treatment', function () {
    return view('/treatmentViews/showTreatment');
});
Auth::routes();

Route::get('/createTreatment', function () {
    return view('/treatmentViews/createTreatment');
});
Auth::routes();

  //commenting this out due to merge conflicts (seeing if jared's routes work)
/**
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home') -> middleware('auth');//redirects to login if not authenticated

Route::get('/treatments', [TreatmentController::class,'index']);
Route::get('/treatments/{treatment}', [TreatmentController::class,'show'] );
Route::post('/treatments', [TreatmentController::class,'store'])->middleware('auth');
**/
