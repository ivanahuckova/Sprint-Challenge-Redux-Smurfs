1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extendin the properties of another object?

    Array methods that do not produce side-effects: .concat, .filter, .map. The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

2)  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.
    Reducers specify how the application's state changes in response to actions sent to the store.
    The Store is the object that brings reducers and actions together. The store holds application state.
    In very simple terms, the single source of truth is our state tree, that is not rewritten or reshaped.

3)  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global, and component state is local - it lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

4)  What is middleware?

    Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer.

5)  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

6)  Which `react-redux` method links up our `components` with our `redux store`?

    The connect() function connects a React component to a Redux store.
