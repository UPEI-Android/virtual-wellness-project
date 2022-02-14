@extends('layouts.app')

@section('content')
<div class="container background" style="padding-top:5%">
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card" style="padding-top:60px; padding-bottom:60px">
                <div class="card-header">{{ __('Login') }}</div>
                <div class="card-subtitle" style="text-align:center">
                                {{ __('Welcome! Login to access the Virtual Wellness App.') }}
                                <br>
                                @if (Route::has('password.request'))
                                    {{ __('Did you')}}
                                    <a class="btn btn-link" style="text-decoration:none; color:#629cdb; display:inline; padding:0" href="{{ route('password.request') }}">
                                        {{__('forget your password?')}}
                                    </a>
                                @endif
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3 justify-content-center">

                            <div class="col-md-6">
                                <input placeholder= "Email Address" id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3 justify-content-center">

                            <div class="col-md-6">
                                <input placeholder= "Password" id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3 justify-content-center">
                            <div class="col-md-6 " style="align-items:center; justify-content:center; display:flex">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3 justify-content-center">
                            <div class="col-md-6" style="align-items:center; justify-content:center; display:flex">
                                <button type="submit" class="btn btn-primary" style="padding-left:100px; padding-right:100px;">
                                    {{ __('Login') }}
                                </button>

                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
