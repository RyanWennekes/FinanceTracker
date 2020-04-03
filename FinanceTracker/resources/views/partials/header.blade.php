<div class="header">
    <h1>{{config('app.name')}}</h1>
    @include('components.menu-icon')
</div>

@push('script')
    <script src="{{asset('js/header.js')}}"></script>
@endpush
