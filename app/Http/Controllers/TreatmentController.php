<?php

namespace App\Http\Controllers;

use App\Http\Resources\TreatmentResource;
use App\Models\Treatment;
use Illuminate\Http\Request;

class TreatmentController extends Controller
{
    /**
     * TODO- API works with TreatmentResource but tests don't pass
     * So for manual API testing, use the current code
     * but, for passing the test using the commented out return statement
     * 
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $treatments = Treatment::paginate(10);

        return TreatmentResource::collection($treatments);

        //return response(Treatment::all());
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
    public function store(Request $request)
    {
        //
        $treatment = new Treatment();
        $treatment->title = $request->title;
        $treatment->notes = $request->body;
        if($treatment->save()) {
            return new TreatmentResource($treatment);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $treatment = Treatment::findOrFail($id);
        return new TreatmentResource($treatment);
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
    public function update(Request $request, $id)
    {
        //
        $treatment = Treatment::findOrFail($id);
        $treatment->title = $request->title;
        $treatment->notes = $request->body;
        if($treatment->save()) {
            return new TreatmentResource($treatment);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $treatment = Treatment::findOrFail($id);
        if($treatment->delete()) {
            return new TreatmentResource($treatment);
        }
    }
}
