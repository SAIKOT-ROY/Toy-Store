import React from "react";
import useTitle from "../Hook/useTitle";

const Blogs = () => {

  useTitle('Ani Toy | Blog')

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-8">Blog Page</h2>
      <div className="grid md:grid-cols-2 gap-5 w-4/5 mx-auto mb-7">
        <div className="">          
          <p className="w-3/4 mb-2">
            <span>1 .</span> What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p>
            An access token is a short-lived credential used for authentication,
            while a refresh token is a longer-lived credential used to obtain
            new access tokens without re-authenticating. Store the access token
            in memory or a short-lived storage, and the refresh token in a more
            secure and persistent storage like an HTTP-only secure cookie or
            local storage.
          </p>
        </div>
        <div>        
          <p className="w-3/4 mb-2"> <span>2 .</span> Compare SQL and NoSQL databases?</p>
          <p>
            SQL databases use structured schemas and fixed relationships, scale
            vertically, enforce strong consistency, and use SQL as the query
            language. NoSQL databases offer flexible data models, scale
            horizontally, prioritize availability over strict consistency, and
            use different query languages specific to their data model.
          </p>
        </div>
        <div> 
          <p className="w-3/4 mb-2"><span>3 .</span> What is express js? What is Nest JS ?</p>
          <p>
            Express.js is a lightweight and flexible web application framework
            for Node.js, used for building web applications and APIs.
          </p>
          <p>
            Nest.js is a scalable and opinionated Node.js framework built on top
            of Express.js, incorporating TypeScript, decorators, and
            architectural patterns to create maintainable and modular
            server-side applications.
          </p>
        </div>
        <div>
          <p className="w-3/4 mb-2"><span>4 .</span> What is MongoDB aggregate and how does it work ?</p>
          <p>
            In MongoDB, the aggregate function performs advanced data
            aggregation by applying a sequence of stages to the data. Each stage
            represents an operation or transformation, and the output of one
            stage becomes the input for the next stage in the pipeline. It
            allows you to process and analyze data, perform calculations, and
            generate aggregated results based on specified criteria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
