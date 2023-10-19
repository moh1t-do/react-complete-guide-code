# React Redux

A state management for cross-component or app-wide state.

### Types of state

- local state : binded to a component
- cross-component : prop chains
- app-wide : decentralized

> Redux is stable in multiple changes. One central data store.

**Reducer function** : updates store data.
**Components** : dispatch actions.

![Core Redux concepts](https://www.freecodecamp.org/news/content/images/2022/06/2.png)

```javascript
const redux = require("redux");

// reducer requires a prev state and action
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type == "increment")
    return {
      counter: state.counter + 1,
    };
  else if (action.type == "decrement")
    return {
      counter: state.counter - 1,
    };
  return state;
};

// make a store
const store = redux.createStore(counterReducer);

// subscriber : whenever data changes run this;
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("My latest state : ", latestState);
};

store.subscribe(counterSubscriber);

// actions
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
```

### Redux Toolkit

slices : part of a global state.
mutation is allowed in toolkit

```javascript
const store = configureStore({ reducer: { counter: counterSlice.reducer } });
```
