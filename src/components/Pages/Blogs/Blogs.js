import React from 'react';

const Blogs = () => {
    return (
        <div className="m-10">
            <div className="m-10">
                <h1 className="text-2xl font-bold text-cyan-500 my-2 "> What is the difference between SQL and NoSQL?</h1>
                <p>The five critical differences between SQL vs NoSQL are:

                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li> SQL databases use structured query language and have a predefined schema. </li>
                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </p>
            </div>
            <div className="m-10">
                <h1 className="text-2xl font-bold text-cyan-500 my-2 ">What is JWT, and how does it work?</h1>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.Once decoded, you will get two JSON strings:The header and the payload.The signature.The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
            </div>
            <div className="m-10">
                <h1 className="text-2xl font-bold text-cyan-500 my-2 ">What is the difference between javascript and NodeJS?</h1>
                <p>
                <li>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
                </li>
                <li>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</li>
                <li>Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</li>
                <li>A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.
                </li>
                <li>Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
                </li>
                    </p>
            </div>
            <div className="m-10">
                <h1 className="text-2xl font-bold text-cyan-500 my-2 "> How does NodeJS handle multiple requests at the same time?</h1>
                <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. How NodeJS handle multiple client requests?NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blogs;