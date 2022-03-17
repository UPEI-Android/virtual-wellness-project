<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Void_;

class UserController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $users = User::all();
        return response()->json([
            'status'=> 200,
            'users'=>$users,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $this->middleware("auth:api");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {

        $input = $request->all();
        $users = User::create($input);
        return response()->json($users);

        /*if(!auth("api")->user()->is_admin) {
            return response()->json(['message' => 'Unauthorized'], 500);
        }
        $this->validate($request, [
            'name' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        if($request->has('is_admin') && $request->is_admin == 1) {
            $user->is_admin = 1;
        }
        $user->save();
        return response()->json(['data' => $user, 'message' => 'Created successfully'], 201);
*/

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function show(int $id)
    {

        $user = User::findOrFail($id);

        return view('users.userprofile', compact('user'));
    }


    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function getUser(int $id)
    {
        $user = User::findOrFail($id);

        return $user->toJson();
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
     * @return JsonResponse
     */
    public function update(Request $request, int $id): JsonResponse
    {

        $user = User::find($id);
        if($user)
        {

            $user->name = $request->input('name');
            $user->treatment = $request->input('treatment');
            $user->email = $request->input('email');
            $user->phone = $request->input('phone');
            $user->update();

            return response()->json([
                'status'=> 200,
                'message'=>'Student Updated Successfully',
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => 'No Student ID Found',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if($user)
        {
            $user->delete();
            return response()->json([
                'status'=> 200,
                'message'=>'Student Deleted Successfully',
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => 'No Student ID Found',
            ]);
        }
    }


    public function updateProfile(Request $request)
    {
    }
}
