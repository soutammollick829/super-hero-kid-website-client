const Blog = () => {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-4xl font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <p className="text-2xl font-bold mt-5 text-teal-600">Access Token:</p>
        <p>
          Definition: An access token is a credential that is issued to a client
          (such as a web or mobile application) after successful authentication.
          It represents the authorization granted to the client to access
          protected resources or perform specific actions on behalf of a user.
          How it works: When a user authenticates with their credentials (e.g.,
          username/password or social login), the server verifies the
          credentials and generates an access token. This token is then included
          in subsequent API requests as an authorization header or query
          parameter.
        </p>
        <h2 className="text-2xl font-bold mt-5 text-teal-600">
          Refresh Token:
        </h2>
        <h4>
          Definition: A refresh token is a credential that is issued alongside
          the access token. It is used to obtain a new access token when the
          current access token expires. How it works: When the access token
          expires, the client can send the refresh token to the server to
          request a new access token. The server verifies the refresh tokens
          validity and, if valid, issues a new access token. Lifespan: Refresh
          tokens typically have a longer lifespan{" "}
        </h4>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-bold">Compare SQL and NoSQL databases?</h1>
        <h2 className="text-2xl font-bold mt-5 text-teal-600">Data Model:</h2>
        <p>
          SQL (Relational databases): SQL databases use a structured data model
          based on tables with predefined schemas. Data is organized into rows
          and columns, and relationships between tables are established using
          keys and foreign keys. SQL databases enforce data integrity and
          support ACID (Atomicity, Consistency, Isolation, Durability)
          transactions.
        </p>
        <p>
          NoSQL (Non-relational databases): NoSQL databases have a flexible and
          dynamic data model. They can use various data models like key-value,
          document, columnar, or graph. NoSQL databases do not enforce strict
          schemas, allowing for more agile development and schema evolution.
          They often sacrifice some transactional guarantees to achieve
          scalability and performance.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-bold">
          What is express js? What is Nest JS?
        </h1>
        <h3 className="text-2xl font-bold mt-5 text-teal-600">Express.js:</h3>
        <p>
          Express.js is a minimalistic and flexible web application framework
          for Node.js. It provides a set of features and utilities for building
          web applications and APIs. Express.js follows the middleware pattern,
          allowing developers to define a series of middleware functions that
          process requests and responses.
        </p>
        <h3 className="text-2xl font-bold mt-5 text-teal-600">Key Features:</h3>
        <p>
          Routing: Express.js provides a simple and intuitive routing mechanism
          to handle HTTP requests based on URL paths and HTTP methods.
          Middleware: Express.js has a middleware system that allows developers
          to handle request processing, perform actions before and after request
          handling, and modify request/response objects.
        </p>
      </div>
    </div>
  );
};

export default Blog;
