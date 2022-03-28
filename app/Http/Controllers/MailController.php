<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Mail;
use App\Models\User;

class MailController extends Controller
{
    public function basic_email(){
//        $user = DB::select('select email from users');
//        for ($x = 0; $x < sizeof($user); $x++) {
//            $email = $user[$x]->email;
////            Mail::to($email)->queue(new \App\Mail\MyTestMail());
//            echo("Email is Sent to ".$user[$x]->email);
//        }
        $users = User::all();
        foreach ($users as $user){
            $email = $user->email;
            Mail::to($email)->queue(new \App\Mail\MyTestMail($user));
            echo("Email is Sent to ".$email);
        }
    }
}
