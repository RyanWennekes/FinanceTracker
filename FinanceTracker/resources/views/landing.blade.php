<html>
    <head>
        <link href="{{asset('css/landing.css')}}" rel="stylesheet" type="text/css" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
    </head>
    <body>
        <h1>{{config('app.name')}}</h1>
        <p>
            <span class="stress">Become debt-free,</span> <span class="stress">FOR free!</span>
        </p>
        <div class="options">
            @include('components/login-key')
            @include('components/signup-pen')
        </div>
    <script src="{{asset('js/landing.js')}}"></script>
    </body>
</html>
