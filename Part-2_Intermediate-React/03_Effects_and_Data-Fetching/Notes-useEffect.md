The data fetching we are doing right here is actually introducing a side effect into the component's render logic. So it is clearly an interaction with the outside world, which should never be allowed in render logic.

So the code which is at the top will run as the component first mounts and therefore it is called render logic.

Currently we only logging the data to the console, but in a real application we would want to set the state with the fetched data and if we do that, we will end up in an infinite loop because the component will re-render and the fetch will be called again and again.
To avoid this, we need to use the `useEffect` hook which allows us to run side effects in a controlled way.

fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=batman`)
.then((res) => res.json())
.then((data) => console.log(data));
