### Conceptual Exercise

Answer the following questions below:

- What is a JWT? Json Web token, It is an opend standart used to share security information between two parties, client and a server.

- What is the signature portion of the JWT? The signature is created with the the encoded header, the encoded payload, a secret, the algorithm specified in the header. What does it do? The signature is used to verify the sender JWT identity and to ensure the msg wasn't changed along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload? Yes anybody can see what is inside the payload. We should never place confidential information on it.

- How can you implement authentication with a JWT? 
JWT consist of  three parts; Header, Payload and signature. 
 + Header consist of two parts; the algorithm being used and the   type of token in this case JWT. Then the header parts (in a JSON object) are Base64Url encoded.
 + The payload contain the claims/statements about an entity or users and aditional data. There are three types of claims: registered, public, and private claims. Register claims are a set of predefined claims that are not mandatory but recommended. Public claims can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace. Pivate claims are custom claims created to share information between parties are neither publics or register claims. The payload is Base64Url encoded too.
 + The signature is made with the encoded Header and payload, a secret, the algorithm specified in the header and sign that. The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments. 
 In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources.(From: "https://jwt.io/introduction").

- Compare and contrast unit, integration and end-to-end tests.
  Unit, integration and E2E tests are type of test that require coding. Those kind of tests can be performed using the same tools. Unit tests are writen by Developers, while integration and E2E tests are usualy writen by testers or QA proffetionals. In a unit test individual API's components are tested while in the integration almost all the API's parts need to be completed to test them working together. In the E2E tests is necessary to have all the API's parts complet to test how the final user will interac whit the API. Unit test can be run in any order while Integration test usualy require a strict order and can't be run simultaneously. Integration and Unit tests are less expensive to implement than the E2E tests.

- What is a mock? It is a simmulated object that mimics the behavior of the smalles testeable part of an aplication in controlled ways. What are some things you would mock? Objects in the unit tests to focus in the behavior of the system with out worry about it's dependencies. 

- What is continuous integration? It is a process in devops where changes are merged into a central repository after which the code is automated and tested.

- What is an environment variable and what are they used for? They are a set of dynamic named values stored within the system that is used by applications. Environment variables are used to store app secrets and configuration data.

- What is TDD? Test-driven development is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. What are some benefits and drawbacks? Benefits: Code can be move or refactored with little risk to breack the code, the result code is easy to test, you only write code for the feature needed to satisfy your requierments. Drawbacks: Get to write too many testsat once, write tests that are too large. write test for trivial code.

- What is the value of using JSONSchema for validation? I makes easy the automated validation because the data structure description.

- What are some ways to decide which code to test?  Think about the observable effect that code has for the end user and developer user. We have to test the entrance values, the exit values, the code interacts with other parts of the API, requests, responses, valid and invalid values, and possible errors made for users, API connections and error messages.

- What does `RETURNING` do in SQL? The RETURNING clause allows you to retrieve values of columns (and expressions based on columns). When would you use it? When colms were modified by an insert, delete or update. Without RETURNING, you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns. 

- What are some differences between Web Sockets and HTTP? Websockets keeps a persistent connection open, while with HTTP you have to constanly request updates. Websockets is faster than HTTP conections. Websockets is stateful protocol while HTTP is an stateless protocol.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  It depends on the proyect requirements to build. Flask is lightweight, and it is based on the HTTP requests. I prefer Flask if the data traffic doesn't require constant updates, the database is not too complex for validations, and their routes' security and authentication are not complex. Otherwise, I will use Express because with the WSS you can have an open connection and automatic data updates, you can better manage all the project functions with the middleware, the use of schemas makes the validation easier, and the queries to the database are secure and fast. 
