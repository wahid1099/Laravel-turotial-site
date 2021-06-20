<?php

use App\Http\Controllers\HomeController;
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
//Homecotrller function and urls for home page componennts
Route::get('/getcourseFeutures',[HomeController::class,'getCourseFetures']);
Route::get('/getCoursePlan',[HomeController::class,'getCoursePlan']);
Route::get('/getFreeclass',[HomeController::class,'getFreeclass']);
Route::get('/MoreSerires',[HomeController::class,'MoreSerires']);
Route::get('/getPaymentGuide',[HomeController::class,'getPaymentGuide']);







Route::get('/', function () {
    return view('index');
});


Route::get('{ReactRoutePath}',function(){
    return view('index');

})->where('ReactRoutePath','.*');
