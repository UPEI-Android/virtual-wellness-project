<?php

namespace App\Http\Controllers;

use App\Models\Treatment;
use Illuminate\Http\Request;

class TreatmentController extends Controller
{
    public function add(Request $request) {
        return response()->json([
            'title'=>$request->title,
            'message' => $request->message,
        ]);
    }

    public function index() {

        $treatments = Treatment::all();

        return view('treatments.index', compact('treatments'));

    }

    public function show(Treatment $treatment) {

        return view('treatments.show', compact('treatment'));

        //We want something like this
        //$auth()->users()->patients()->view($attributes)
    }

    public function store() {

        //validated
        $attributes = request()->validate([
            'title' => 'required',
            'notes' => 'required',
        ]);

        //persisted
        auth()->user()->treatments()->create($attributes);


        //redirected
        return redirect('/treatments');
    }
    public function update(Request $request, Treatment $Treatment)
    {
        $Treatment->update($request->all());

        return response()->json($Treatment, 200);
    }

    public function delete(Treatment $Treatment)
    {
        $Treatment->delete();

        return response()->json(null, 204);
    }
}
