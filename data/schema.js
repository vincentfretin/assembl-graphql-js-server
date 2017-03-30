import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
schema {
  query: Query
  mutation: Mutations
}

type AgentProfile implements Node {
  id: ID!
  name: String
}

type CreateThematic {
  thematic: Thematic
}

scalar DateTime

input LangStringEntryInput {
  value: String!
  localeCode: String!
}

# Type of sentiment
enum SentimentType {
  LIKE
  DISAGREE
  DONT_UNDERSTAND
  MORE_INFO
}

type Mutations {
  createThematic(video: VideoInput, identifier: String!, descriptionEntries: [LangStringEntryInput], questions: [QuestionInput], titleEntries: [LangStringEntryInput]!): CreateThematic
  addSentiment(
    postId: ID!
    type: SentimentType!
  ): SentimentCounts!
  createPost(
    ideaId: ID
    parentId: ID,
    subject: String,
    body: String!
  ): Post
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post implements Node, PostInterface {
  id: ID!
  creationDate: DateTime!
  creator: AgentProfile
  subject(lang: String): String
  body(lang: String): String
  sentimentCounts: SentimentCounts
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
}

type PostEdge {
  node: PostUnion
  cursor: String!
}

interface PostInterface {
  creationDate: DateTime!
  creator: AgentProfile
  subject(lang: String): String
  body(lang: String): String
  sentimentCounts: SentimentCounts
}

union PostUnion = PropositionPost | Post

type PropositionPost implements Node, PostInterface {
  id: ID!
  creationDate: DateTime!
  creator: AgentProfile
  subject(lang: String): String
  body(lang: String): String
  sentimentCounts: SentimentCounts
}

type Query {
  node(id: ID!): Node
  posts(before: String, after: String, first: Int, last: Int): PostConnection
  thematics(identifier: String): [Thematic]
}

type Question implements Node {
  id: ID!
  title(lang: String): String
  posts(random: Boolean): [PropositionPost]
}

input QuestionInput {
  titleEntries: [LangStringEntryInput]!
}

type SentimentCounts {
  dontUnderstand: Int
  disagree: Int
  like: Int
  moreInfo: Int
}

type Thematic implements Node {
  id: ID!
  identifier: String
  title(lang: String): String
  description(lang: String): String
  questions: [Question]
  video(lang: String): Video
  imgUrl: String
  numPosts: Int
  numContributors: Int
}

type Video {
  title: String
  description: String
  htmlCode: String
}

input VideoInput {
  titleEntries: [LangStringEntryInput]
  descriptionEntries: [LangStringEntryInput]
  htmlCode: String
}
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
