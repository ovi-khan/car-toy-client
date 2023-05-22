import React from "react";

const Blog = () => {
  return (
    <div className="mx-20 my-20 font-semibold">
      <h2 className="text-2xl text-blue-700">
        1. What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h2>
      <p className="text-green-600 mt-2 mb-5">
        An access token is a credential that represents the authorization
        granted to a client application to access protected resources on behalf
        of a user. It is typically used in token-based authentication systems,
        such as OAuth. A refresh token is a separate token issued alongside the
        access token. It is used to obtain a new access token when the current
        one expires. The refresh token is sent to the server, which exchanges it
        for a new access token without requiring the user to re-authenticate.
      </p>
      <h2 className="text-2xl text-blue-700">
        2. Compare SQL and NoSQL databases?
      </h2>
      <p className="text-green-600 mt-2 mb-5">
        SQL (Structured Query Language) and NoSQL (Not only SQL) are two
        different types of database systems that serve different purposes and
        have distinct characteristics. Here are some key differences between SQL
        and NoSQL databases NoSQL databases are designed for horizontal
        scalability, allowing them to distribute data across multiple servers.
        They can handle large amounts of data and high traffic loads by adding
        more servers to the cluster. SQL databases use the SQL query language
        for defining and manipulating data. SQL provides a standardized way to
        interact with the database, with support for complex querying, joins,
        and transactions.
      </p>
      <h2 className="text-2xl text-blue-700">
        3. What is express js? What is Nest JS?
      </h2>
      <p className="text-green-600 mt-2 mb-5">
        Express.js is a minimal and flexible web framework for Node.js. It
        provides a simple and straightforward approach to building web
        applications and APIs. It offers a thin layer of abstractions over the
        core Node.js HTTP module, making it easy to handle HTTP requests, define
        routes, and send responses. Express.js emphasizes simplicity and allows
        developers to have granular control over the application's behavior by
        using middleware functions, which are functions executed in the
        request-response cycle.
      </p>
      <h2 className="text-2xl text-blue-700">
        4. What is MongoDB aggregate and how does it work?
      </h2>
      <p className="text-green-600 mt-2 mb-5">
        Once you define the stages, you can execute the aggregate operation
        using a MongoDB driver or an ORM (Object-Relational Mapping) library,
        passing the stages array as a parameter. The output of the aggregate
        operation is a cursor or an array containing the transformed and
        aggregated data. Overall, the aggregate operation in MongoDB provides a
        flexible and powerful way to process and analyze data within the
        database, enabling complex data transformations and aggregations that go
        beyond simple querying capabilities
      </p>
    </div>
  );
};

export default Blog;
