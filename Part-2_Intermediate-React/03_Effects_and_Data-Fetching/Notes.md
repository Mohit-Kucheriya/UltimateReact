**Component (Instance) Lifecycle**

1. The first phase in any component's lifecycle is that a component instance is mounted, which is also called initial render i.e. component is 'BORN' in this phase.

2. The second phase is that the component instance is updated, which is also called re-render i.e. happnes when State changes, Props changes, Parent re-renders, Context changes etc.

3. The third phase is that the component instance is unmounted, which is also called 'DESTROY' in this phase.

**How to NOT to fetch Data in React?**

1. It's not allowed to setState in render logic.

**useEffect**

1. useEffect is a hook that allows us to run side effects in a controlled way. Take two arguments, the first one is a function that contains the code as we want to run as a side effect and the second one is an array of dependencies.

2. The side effects registered with the useEffect hook will only be executed after the certain renders. For example, only after the initial render.

3. useEffect doesn't return any value, so we don't store the result in any variable, but instead we pass in a function and it contains the code as we want to run as a side effect.

4. Each effect can return so-called cleanup function, which is a function that will be called before the component re-renders or unmounts.

5. We use effects to keep a component in sync with the external world.

6.

**Where to create side effects?**

1. Triggered by EVENTS - onClick, onSubmit etc. Sometimes this is not enough for the application's needs. Preferred way of creating side effects!

2. Triggered by RENDERING (useEffects) - Allows us to wriite the code that will run at different moments i.e. component instance lifecycle: mount, re-render, or unmount.

**What's the useEffect DEPENDENCY Array?**

1. By default, effects run after every render. We can prevent that by passing a dependency array.

2. Each time one of the dependencies changes, the effect will be executed again.

3. Every state variable and props used inside the effect must be included in the dependency array.

**Example**

useEffect(()=>{
console.log(`After the initial render`)
},[])

useEffect(()=>{
console.log(`After every render`)
})

useEffect(()=>{
console.log(`After the initial render and when query changes: ${query}`)
},[query])
