function HomePage() {
    return (
       <>
        <h2>Home Page</h2>

        <article>
            <p>Hello! This website was made by Gregory Lion!</p>
        </article>

        <p>In this website I have created, many different technologies were incorporated in order to allow a user to use CRUD operations on a travel journal for themselves. Many different technologies were incorporated in order to give the best user experience possible</p>

        <ol>
            <li>HTML - The standard language for webpages in order to organize their contents</li>

            <li>CSS - A langauge for further manipulating how wepgaes are displayed to the user so that they are more aesthetically pleasing when compared to the generic design capabilites of HTML.</li>

            <li>Node.js - An open source runtime environment for developing server-side and networking pieces of the website. Node improves the efficiency of website development as it provides a library rich in modules in JavaScript modules to import.</li>

            <li>Express - A popular framework that provides APIs which enables the program to execute various tasks such as performing CRUD operations, serving static files, and creating templates that dynamically generate responses that incorporate user data.</li>

            <li>MongoDB - A NoSQL database program that supports efficient CRUD operations on large datasets and stores data in BSON, otherwise known as binary JSON.</li>

            <li>Mongoose - A JavaScript library that allows for interactivity between the program and MongoDB clusters. It acts as a object-document mapper that translates the classes and objects between the program's JavaScript code and MongoDB's documents</li>

            <li>REST API - An application programming interface that abides by certain constraints such as being a RESTful service. This means that servers should be stateless, so that each HTTP request occurs in isolation and future requests don't depend on past request.</li>

            <li>React - A framework for writing frontend applications so that instead of developers having to access the DOM tree directly through JavaScript code which is effort intensive and error prone, React maps the DOM tree onto a component tree which can be manipulated to render the browser much more efficiently.</li>
        </ol>
       </>
        );
    }
    export default HomePage;
    