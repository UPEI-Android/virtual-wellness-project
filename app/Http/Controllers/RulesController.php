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

        $rules = Rule::where(['treatment_id' => $treatment->id])->get();
        return response($rules);

    }

    public function store(Request $request, Treatment $treatment) {

        $request['treatment_id'] = $treatment->id;
        $rule = Rule::create($request->all());
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