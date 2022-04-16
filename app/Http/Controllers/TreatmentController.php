<?php

namespace App\Http\Controllers;

use App\Http\Requests\TreatmentRequest;
use App\Http\Resources\TreatmentResource;
use App\Models\Treatment;

use Illuminate\Http\Request;

use Symfony\Component\HttpFoundation\Response;

class TreatmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //$treatments = Treatment::paginate(10);
        //return TreatmentResource::collection($treatments);

        $treatments = auth()->user()->treatments;
        return response($treatments);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TreatmentRequest $request)
    {
       // $this->write_to_console($request);
        return auth()->user()
            ->treatments()
            ->create($request->validated());
    }

    /**
     * Allows the admin user to assign treatments to individuals users.
     * Could not use same store function as patient_id is set automatically in that case
     * @param TreatmentRequest $request
     * @return treatment
     */
    public function assign(TreatmentRequest $request)
    {
        return Treatment::create([
            'title' => $request['title'],
            'patient_id' => $request['patient_id'],
            'notes' => $request['notes'],
            'start_date' => $request['start_date'],
            'end_date'=>$request['end_date'],
            'start_time'=>$request['start_time'],
            'end_time'=>$request['end_time'],
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Treatment $treatment)
    {
        //
        return response($treatment);
    }

    public function showTreatment(int $treatmentId){

        return view('/treatmentViews/showTreatment',compact('treatmentId'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $treatment = Treatment::find($id);
        if($treatment) {

            $treatment->update(($request->all()));

            return response($treatment);
        }
    else
        {
            return response('Invalid ID, Treatment not found', Response::HTTP_UNAUTHORIZED);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Treatment $treatment)
    {
        //
        $treatment->delete();
        return response('', Response::HTTP_NO_CONTENT);
    }
}
