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
        //$treatments = Treatment::paginate(10);

        //return TreatmentResource::collection($treatments);

        //$treatments = auth()->user()->treatments;
        //return response($treatments);

        $treatments = User::all()->treatments;
        return response()->json([
            'status'=> 200,
            'treatments'=>$treatments,
        ]);
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
        //
        return auth()->user()
            ->treatments()
            ->create($request->validated());

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
    public function update(TreatmentRequest $request, Treatment $treatment)
    {
        //
        $treatment->update($request->all());
        return response($treatment);
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
