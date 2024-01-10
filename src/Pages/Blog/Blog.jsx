import React from 'react';

const Blog = () => {
    return (
        <div className='mycontainer mx-auto grid md:grid-cols-2 p-4 gap-6 py-16'>
            <div className="qun-ans bg-yellow-100 p-5 rounded-lg">
                <h2 className='pb-4'>Difference between uncontrolled and controlled components</h2>
                <p>
                    <span>Answer: </span>
                    the main difference between uncontrolled and controlled components in ReactJS is the level of control and management over the form input data. Uncontrolled components are simpler to implement but offer less control, while controlled components provide more control and flexibility but require more setup and code.
                </p>
            </div>
            <div className="qun-ans bg-pink-100 p-5 rounded-lg">
                <h2 className='pb-4'>How to validate React props using PropTypes?</h2>
                <p>
                    <span>Answer: </span>
                    Properties validation is a useful way to force the correct usage of the components. This will help during development to avoid future bugs and problems, once the app becomes larger. It also makes the code more readable, since we can see how each component should be used.<br/>

                    Example: we are creating App component with all the props that we need. App.propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App.defaultProps.
                </p>
            </div>
            <div className="qun-ans bg-blue-100 p-5 rounded-lg">
                <h2 className='pb-4'>difference between nodejs and express js.?</h2>
                <p>
                    <span>Answer: </span>
                    Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It provides the ability to execute JavaScript outside of a web browser, which makes it useful for creating server-side applications. Express.js is a web framework built on top of Node.js. It provides a simple, flexible, and robust set of features for building web applications and APIs. While Node.js allows developers to build server-side applications, Express.js makes it easier to build these applications by providing a set of powerful tools and middleware that simplifies common web development tasks such as routing, handling requests, and working with databases. In short, Node.js provides the runtime environment for JavaScript on the server-side, while Express.js provides the web development framework and tools needed to build web applications and APIs..
                </p>
            </div>
            <div className="qun-ans bg-green-100 p-5 rounded-lg">
                <h2 className='pb-4'>What is a custom hook, and why will you create a custom hook?</h2>
                <p>
                    <span>Answer: </span>
                    A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That’s it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.<br/>

                    <span>When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!</span>
                </p>
            </div>
        </div>
    );
};

export default Blog;