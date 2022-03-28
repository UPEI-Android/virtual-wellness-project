<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\User;
use App\Models\Treatment;
use Carbon\Carbon;

class MyTestMail extends Mailable
{
    use Queueable, SerializesModels;

    public $details;
    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this ->user  = $user;
        $name  = $user->first_name.' '.$user->last_name;
        $email = $user ->email;
//        $date = Carbon::createFromDate(2022, 3, 1, -4);
        $date = Carbon::tomorrow();
        $diffInDays = $date->diff(Carbon::now())->days;
        $details = [
            'title' => 'Test email',
            'body' => 'Hi '.$name.'. This is for testing email using smtp to '.$email.". You have ".$diffInDays." days left"
        ];
        $this->details = $details;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('This is a test mail')
            ->view('emails.testMail');
    }
}
