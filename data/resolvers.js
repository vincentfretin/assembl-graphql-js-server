import { find, filter } from 'lodash';
import { pubsub } from './subscriptions';

const authors = [
  { id: 542, name: 'Thomas' },
  { id: 693, name: 'Randy Anderson' },
  { id: 139, name: 'Willie Shaw' },
];

const ideas = [
    {"id": "idea:456"},
    {"id": "thematic:1", "localizedTitle": "Comprendre les dynamiques et les enjeux", "numPosts": 29},
    {"id": "thematic:2", "localizedTitle": "Envisager de nouvelles opportunités",
     "video": {
       "title": "Laurent Alexandre, chirurgien et expert en intelligence artificielle nous livre ses prédictions pour le 21e siècle.",
       "description": "Personne ne veut d'un monde où on pourrait manipuler nos cerveaux et où les états pourraient les bidouiller",
       "htmlCode": "<object>....</object>"
     },
     "numPosts": 34,
     "ideas": [
       {"id": "question:3",
        "title": "Comment qualifiez-vous l'emergence de l'Intelligence Artificielle dans notre société ?",
        "posts": [
          {"id": "proposition:1", "creatorId": 542,
           "body": "Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
           "sentimentCounts": {"like": 45, "disagree": 123},
          },
          {"id": "proposition:2", "creatorId": 693,
           "body": "Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
           "sentimentCounts": {"like": 45, "disagree": 123},
          },
          {"id": "proposition:3", "creatorId": 139,
           "body": "Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
           "sentimentCounts": {"like": 45, "disagree": 123},
          }
        ]
       },
       {"id": "question:4", "subject": "Selon vous, quelles opportunités l'Intelligence Artificielle pourrait représenter ?"},
       {"id": "question:5", "subject": "Selon vous, quelles politiques devons-nous mener vis à vis de l'Intelligence Artificielle ?"}
     ]
    },
    {"id": "thematic:6", "localizedTitle": "Analyser les défis politique", "numPosts": 29},
    {"id": "thematic:7", "localizedTitle": "Inventer un cadre stratégique mondial", "numPosts": 29},
];

const resolveFunctions = {
  Query: {
    ideas() {
      return ideas;
    },
    // author(_, { id }) {
    //   return find(authors, { id: id });
    // },
  },
  IdeaTypes: {
    __resolveType(data, context, info) {
      if (data.id.split(':')[0] === 'thematic') {
        return info.schema.getType('Thematic');
      }

      return info.schema.getType('Idea');
    },
  },
  // Mutation: {
  //   upvotePost(_, { postId }) {
  //     const post = find(posts, { id: postId });
  //     if (!post) {
  //       throw new Error(`Couldn't find post with id ${postId}`);
  //     }
  //     post.votes += 1;
  //     pubsub.publish('postUpvoted', post);
  //     return post;
  //   },
  // },
  // Subscription: {
  //   postUpvoted(post) {
  //     return post;
  //   },
  // },
  // Author: {
  //   posts(author) {
  //     return filter(posts, { authorId: author.id });
  //   },
  // },
  PostInterface: {
    creator(post) {
      return find(authors, { id: post.creatorId });
    },
  },
  Post: {
    __resolveType(data, context, info) {
      if (data.id.split(':')[0] === 'proposition') {
        return info.schema.getType('Proposition');
      }

      return info.schema.getType('AssemblPost');
    },
  },
};

export default resolveFunctions;
