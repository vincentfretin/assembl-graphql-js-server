# Phase1 server

The is simple temporary server to be able to work on the Assembl Phase1 UI, while we're developing the server with graphene.

This is a really simple GraphQL server that uses [Apollo Server](https://github.com/apollostack/apollo-server) and [GraphQL Tools](https://github.com/apollostack/graphql-tools) to serve a simple schema.

It uses a very simple in-memory database, so if you restart the server or change the code, the data will reset.

## Installation

Clone the repository and run `yarn` or `npm install`

```
git clone https://github.com/vincentfretin/assembl-graphql-js-server
cd assembl-graphql-js-server
yarn
```

## Starting the server

```
npm start
```

The server will run on port 8080. You can change this by editing `server.js`.

Example of query:

    curl --silent -XPOST -H "Content-Type:application/json" -d '{ "variables": {"lang": "fr"}, "query": "query MyQuery($lang:String!) { ideas { ... on Thematic { id, localizedTitle(lang: $lang), description, video { title(lang: $lang), description(lang: $lang), htmlCode }, numPosts, questions: ideas { ... on Idea { id, title, propositions: posts { ... on Proposition { id, creator { id, name }, body, sentimentCounts { like, disagree } } } } } } } }" }' http://localhost:8080/graphql  | python -m json.tool
