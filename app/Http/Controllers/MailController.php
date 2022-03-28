<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Mail;
use App\Models\User;

class MailController extends Controller
{
    public function basic_email(){
        $users = User::all();
        foreach ($users as $user){
            $email = $user->email;
            Mail::to($email)->queue(new \App\Mail\MyTestMail($user));
            echo("Email is Sent to ".$email);
        }
    }
}
