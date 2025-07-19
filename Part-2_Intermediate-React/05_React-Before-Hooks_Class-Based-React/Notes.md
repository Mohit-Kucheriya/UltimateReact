**Class Based React**

1. Before 2019, In react we would write components, not using functions but using JavaScript classes.

2. So every single React component that is written with classes needs to include the render method which returns some JSX.

3. If we want to add state to a component, we first need to call the constructor method and it receives props and it calls the parent constructor as well by using the super method and it does so by passing in the props again.

4. The render method is equivalent to the function body of a function component.

5. Our handler functions are defined as class methods.

6. 'this' keyword refers to the current component instance, which will inherit method from the class definition.

7. The only thing that matter to know is that all event hadlers that are called inside the JSX will lose their binding to the 'this' keyword.

8. So in-order to fix this, we basically need to ovverride the method.
   e.g. this.handleClick = this.handleClick.bind(this);

9. Lifecycle methods are not exactly the same thing as the useEffect hook in function components; but they are the closest similar thing that we have in class components.
