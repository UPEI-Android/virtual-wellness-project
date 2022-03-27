<?php

namespace App\Services;

use App\Models\Rule;
use Illuminate\Support\Carbon;
use RRule\RRule;

class RulesService
{

    protected Rule $rule;

    protected RRule $rrule;

    public function __construct(Rule $rule) {

        $this->rule = $rule;

        $this->rrule = $this->createRRule($rule->freq);
        $this->rrule->clearCache();

    }

    public function createRRule(int $freq): RRule
    {

        if($freq == 1) {
            return $this->create_y_rrule();
        } elseif ($freq == 2) {
            return $this->create_m_rrule();
        }elseif ($freq == 3) {
            return $this->create_w_rrule();
        }else {
            return $this->create_d_rrule();
        }

    }

    private function create_y_rrule() :RRule
    {

        $parsed_rule = new RRule([
            'freq' => $this->rule->freq,
            'interval' => $this->rule->interval,
            'bymonthday' => $this->rule->day_of_month,
            'bymonth' => $this->rule->month_of_year,
            'dtstart' => $this->rule->treatment->start_date,
            'until' => $this->rule->treatment->end_date
        ]);

        return $parsed_rule;

    }

    private function create_d_rrule(): RRule
    {

        $parsed_rule = new RRule([
            'freq' => $this->rule->freq,
            'interval' => $this->rule->interval,
            'dtstart' => $this->rule->treatment->start_date,
            'until' => $this->rule->treatment->end_date
        ]);

        return $parsed_rule;

    }

    private function create_w_rrule() {

        $parsed_rule = new RRule([
            'freq' => $this->rule->freq,
            'interval' => $this->rule->interval,
            'byday' => $this->rule->day_of_week,
            'dtstart' => $this->rule->treatment->start_date,
            'until' => $this->rule->treatment->end_date
        ]);

        return $parsed_rule;
    }

    private function create_m_rrule() {

        $parsed_rule = new RRule([
            'freq' => $this->rule->freq,
            'interval' => $this->rule->interval,
            'byweekno' => $this->rule->week_of_month,
            'dtstart' => $this->rule->treatment->start_date,
            'until' => $this->rule->treatment->end_date
        ]);

        return $parsed_rule;
    }

    public function get_rrule() {

        $this->rrule->clearCache();
        return $this->rrule;
    }

    public function getRule()
    {
        $this->rrule->clearCache();
        return $this->rrule->getRule();

    }

    public function allOccurrences() {

        $this->rrule->clearCache();
        return $this->rrule->getOccurrences();

    }

    public function nextOccurrence() {

        $this->rrule->clearCache();
        return $this->rrule->getOccurrencesBetween(Carbon::today(), null, 1);

    }

    public function getMaxOccurrence() {

        return $this->rrule->count();

    }

    public function is_infinite() {

        return $this->rrule->isInfinite();

    }





}