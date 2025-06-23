**React State**

1. Updating state triggers React to re-render the component.

2. Whenever we update a piece of state in a component, this will make React re-render that component in the user interface.

3. React preserves the components state throughout the re-renders.

4. To update the state, always use the setter function given by React, useState() hook.

5. Don't update the state based on the current state i.e. if(count < 3){
   setState(count + 1)
   setState(count + 1)
   }

6. Insted of a value, we pass a function which will receive as the argument, the current value of the state.

7. Each component has and manages its own state, no matter how many times we render the same component.

8. The entire UI is always a representation of all the current states in all the components.

**React children prop**

1. The children prop is a special prop that is passed to every component. And the value of the children prop is exactly what is between the opening and closing tags of the component. 'children' is the predefined keyword in React.

