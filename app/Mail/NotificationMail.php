<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Carbon\Carbon;

class NotificationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $details;
    public $user;
    public $title;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($date, $user,$treatment)
    {
        $this ->user  = $user;
        $name  = $user->first_name.' '.$user->last_name;
        $email = $user ->email;
        $title = $treatment->title;
        $this ->title = $title;
        $diffInDays = $date->diff(Carbon::now())->days;
        $details = [
            'title' => 'Notification E-mail of '.$title,
            'body' => 'Hi '.$name.'. This is for testing email to '.$email.". You have ".$diffInDays." days left to complete ".$title
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
        return $this->subject('Notification E-mail of '.$this->title)
            ->view('emails.notificationMail');
    }
}
