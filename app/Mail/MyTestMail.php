<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\user;

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
        $name  = $user->first_name.' '.$user->last_name.':<br>';
        $email = $user ->email;
        $details = [
            'title' => 'Test email',
            'body' => 'Hi '.$name.'. This is for testing email using smtp to '.$email
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
