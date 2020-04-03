<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('landing');
});

Route::post('/', function() {
    return redirect()->route('home');
});
Route::post('/create', function() {
    return redirect()->route('home');
});

Route::get('/home', function () {
    return view('home');
})->name('home');

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
