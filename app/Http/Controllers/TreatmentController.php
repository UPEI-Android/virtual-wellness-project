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
        //

       // $this->write_to_console($request);
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

    function write_to_console($data) {
        $console = $data;
        if (is_array($console))
            $console = implode(',', $console);

       echo "<script>console.log('Console: " . $console . "' );</script>";
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



            $treatment->update(($request['state']));
        }


      
        //$treatment->update($request->all());
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
