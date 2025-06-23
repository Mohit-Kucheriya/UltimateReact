**React Controlled Elements**

1. Inputs fields and the other select elements maintain their own state inside the DOM.

2. In React we usually like to keep all the state in just one central place.

3. When we do e.target.value in the onChange event handler, we are accessing the value of the input field and it's always the string value, if we want to access the number value we need to use parseInt(e.target.value) or parseFloat(e.target.value).

4. Whenever a piece of state is passed as a prop, when that state updates, both components are re-rendered. So both component owning the state and the component receiving the state as a prop will re-render.
