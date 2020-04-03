<html>
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="{{asset('css/landing.css')}}" rel="stylesheet" type="text/css" />
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
        @include('partials.footer')
    <script src="{{asset('js/landing.js')}}"></script>
    </body>
</html>
