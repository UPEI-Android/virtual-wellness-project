<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use App\Models\Treatment;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RulesController extends Controller
{
    //
    public function index(Treatment $treatment) {

        $rule = $treatment->rule()->get();
        return response($rule);

    }

    public function store(Request $request, Treatment $treatment) {

        $rule = $treatment->rule()->create($request->all());

        if ($request->missing('end_date')) {
            $rule = $treatment->rule()->create(array_merge($request->all(), ['max_num_of_occurrences' => 5]));
        }

        return $rule;

    }

    public function destroy(Rule $rule) {

        $rule->delete();
        return response('', Response::HTTP_NO_CONTENT);

    }

    public function update(Rule $rule, Request $request) {

        $rule->update($request->all());
        return response($rule);

    }
}
