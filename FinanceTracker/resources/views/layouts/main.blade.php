<html>
    <head>
        <link href="{{asset('css/global.css')}}" rel="stylesheet" type="text/css" />
        @stack('style')
    </head>
    <body>
        @include('partials.header')

        <div class="content">
            @yield('content')
        </div>

    @stack('script')
    </body>
</html>
