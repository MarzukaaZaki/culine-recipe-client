import React from 'react';

const Blog = () => {
    return (
        <div className='text-center w-50 mx-auto mb-5'>
            <div className='w-100'>
            <h1>Tell us the differences between uncontrolled and controlled components.</h1>
            <p>A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.

                An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.</p>

            <br />
            <h1>How to validate React props using PropTypes</h1>
            <p>
                When props are passed to a React component, they are checked against the type definitions configured in the propTypes property.To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function. We can also use PropTypes to define more complex shapes of props, like objects with specific properties, or arrays with specific types of items.When an invalid value is passed for a prop, a warning is displayed on the JavaScript console.
            </p>
            <br />
            <h1>Tell us the difference between nodejs and express js.</h1>
            <p>The main difference between Node.js and Express.js is that Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js. Node.js provides the infrastructure for executing JavaScript code on the server, while Express.js provides a set of tools and features that make it easier to build web applications and APIs on top of Node.js.</p>
            <br />
            <h1>What is a custom hook, and why will you create a custom hook?</h1>
            <p>A custom hook is a function in React that allows you to reuse stateful logic across multiple components. Custom hooks are a convenient method to encapsulate hook-related behavior that may be used across components.Additionally, if we have a component in which we have two or more separate pieces of useEffect logic going on, we might want to consider putting them into custom hooks to separate and name them, even if this isn’t logic that will be shared by any other component.</p>
        </div>
    </div>
    );
};

export default Blog;