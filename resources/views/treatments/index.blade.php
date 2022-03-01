<!DOCTYPE html>

<html>
<head>
    <title></title>
</head>

<body>

    <h1>Virtual Wellness App</h1>


        <ul>
            @forelse($treatments as $treatment)
                <li>

                    <a href="{{ $treatment->path() }}"> {{ $treatment -> title }} </a>

                </li>
            @empty
                <li>No treatments yet </li>
            @endforelse
        </ul>

</body>
</html>
