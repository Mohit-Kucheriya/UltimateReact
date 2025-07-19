1. The initial value which we passed in the useState("") only really matter on the initial render.

2. The state is set asynchronously i.e. we do not get the access to the updated state immediately after we set it.

3. Whenever the initial value of the useState hook depends on some sort of computation, it is recommended to use the callback function to set the initial value. So function that React can execute on its initial render. Function must be pure and accept no arguments.

4. Great advantage of using the useEffct is, when we delete a movie from the list, it get deleted from the localStorage as well because we are using the watched state as the dependency of the useEffect hook.
   useEffect(function () {
   localStorage.setItem("watched", JSON.stringify(watched));
   },
   [watched]
   );

**useState Summary**

1. So we use useState Hook to first create state (varaible) and then the setter function to update the state.
