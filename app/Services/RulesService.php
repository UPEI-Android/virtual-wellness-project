<?php

namespace App\Services;

use App\Models\Rule;
use Illuminate\Support\Carbon;
use RRule\RRule;
use function PHPUnit\Framework\isInfinite;

class RulesService
{
    const DEFAULT_COUNT = 5;

    protected Rule $rule;

    protected RRule $rrule;

    public function __construct(Rule $rule) {

        $this->rule = $rule;

        $this->rrule = $this->createRRule($rule->freq);
        $this->rrule->clearCache();

    }

    public function createRRule(string $freq): RRule
    {

        if($freq == 'yearly' || $freq == 'YEARLY') {
            return $this->create_y_rrule();
        } elseif ($freq == 'monthly' || $freq == 'MONTHLY') {
            return $this->create_m_rrule();
        }elseif ($freq == 'weekly' || $freq == 'WEEKLY') {
            return $this->create_w_rrule();
        }elseif($freq == 'daily' || $freq == ('DAILY')) {
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
            'until' => $this->rule->treatment->end_date,
            'count' => $this->rule->max_num_of_occurrences
        ]);

        return $parsed_rule;

    }

    private function create_d_rrule(): RRule
    {

        ($this->rule->treatment->end_date != null) ? $parsed_rule = $this->create_d_rrule_until() : $parsed_rule = $this->create_d_rrule_count();

        return $parsed_rule;

    }

    private function create_d_rrule_until(): RRule
    {

        $parsed_rule = new RRule([
            'freq' => $this->rule->freq,
            'interval' => $this->rule->interval,
            'dtstart' => $this->rule->treatment->start_date,
            'until' => $this->rule->treatment->end_date,
        ]);

        return $parsed_rule;
    }

    private function create_d_rrule_count(): RRule
    {

        $parsed_rule = new RRule([
            'freq' => $this->rule->freq,
            'interval' => $this->rule->interval,
            'dtstart' => $this->rule->treatment->start_date,
            'count' => $this->rule->max_num_of_occurrences
        ]);

        return $parsed_rule;
    }

    private function create_w_rrule() {

        $parsed_rule = new RRule([
            'freq' => $this->rule->freq,
            'interval' => $this->rule->interval,
            'byday' => $this->rule->day_of_week,
            'dtstart' => $this->rule->treatment->start_date,
            'until' => $this->rule->treatment->end_date,
            'count' => $this->rule->max_num_of_occurrences
        ]);

        return $parsed_rule;
    }

    private function create_m_rrule() {

        $parsed_rule = new RRule([
            'freq' => $this->rule->freq,
            'interval' => $this->rule->interval,
            'byweekno' => $this->rule->week_of_month,
            'dtstart' => $this->rule->treatment->start_date,
            'until' => $this->rule->treatment->end_date,
            'count' => $this->rule->max_num_of_occurrences
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

        if(!isInfinite()) {
            return $this->rrule->count();
        } else {
            return 5; // DEFAULT COUNT
        }

    }

    public function is_infinite() {

        return $this->rrule->isInfinite();

    }





}
