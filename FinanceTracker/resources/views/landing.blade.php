<html>
    <head>
        <link href="{{asset('css/landing.css')}}" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <h1>{{config('app.name')}}</h1>
        <form>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="Password"/>
            <input type="submit" value="Login" />
        </form>
    </body>
</html>
