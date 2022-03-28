<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Mail;
use App\Models\Rule;
use App\Services\RulesService;
use RRule\RRule;
use App\Models\Treatment;

class MailController extends Controller
{
    public function basic_email()
    {
        $rules = Rule::all();

        foreach ($rules as $rule) {

            switch ($rule->freq) {
                case(1):
                    $rule->freq = RRule::YEARLY;
                    break;
                case(2):
                    $rule->freq = RRule::MONTHLY;
                    break;
                case(3):
                    $rule->freq = RRule::WEEKLY;
                    break;
                default:
                    $rule->freq = RRule::DAILY;
            }

            $rule_service = new RulesService($rule);
            $treatment_id = $rule->treatment_id;
            $treatments = DB::table('treatments')->where('id', '=', $treatment_id)->get();
            foreach ($treatments as $treatment) {
                $patient_id = $treatment->patient_id;
                $users = DB::table('users')->where('id', '=', $patient_id)->get();
                foreach ($users as $user) {
                    $email = $user->email;
                    Mail::to($email)->queue(new \App\Mail\NotificationMail($rule_service->nextOccurrence()[0], $user, $treatment));
                    echo("Email is Sent to " . $email);
                }
            }
        }

    }
}
