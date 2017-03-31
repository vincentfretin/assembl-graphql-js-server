import { find, filter } from 'lodash';
import { pubsub } from './subscriptions';

const authors = [
  { id: 542, name: 'Thomas' },
  { id: 693, name: 'Randy Anderson' },
  { id: 139, name: 'Willie Shaw' },
];

const posts = [
  {"id": "proposition:1", "creatorId": 542,
  "ideaId": "question:3",
   "body": "Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
   "sentimentCounts": {"like": 45, "disagree": 123},
  },
];


const ideas = [
  {
    "id": "thematic:1",
    "identifier": "survey",
    "title": "Comprendre les dynamiques et les enjeux",
    "numPosts": 29,
    "numContributors": 32,
    "imgUrl": "/data/Discussion/6/documents/422/data",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu scelerisque magna. Ut sapien enim, vestibulum in ante quis, vehicula facilisis libero.",
    questions:[
      {
        "id": "question:38",
        "title": "Selon vous aaaa, quelles opportunités l'Intelligence Artificielle pourrait représenter ?"
      },
      {
        "id": "question:39",
        "title": "Selon vous bbb, quelles opportunités l'Intelligence Artificielle pourrait représenter ?"
      },
      {
        "id": "question:40",
        "title": "Selon vous ccc, quelles opportunités l'Intelligence Artificielle pourrait représenter ?"
      },
      {
        "id": "question:41",
        "title": "Selon vous ddd, quelles opportunités l'Intelligence Artificielle pourrait représenter ?"
      },
      {
        "id": "question:51",
        "title": "Selon vous eee, quelles politiques devons-nous mener vis à vis de l'Intelligence Artificielle ?"
      }
    ]
  },
  {
    "id": "thematic:2",
    "identifier": "survey",
    "title": "Envisager de nouvelles opportunités",
    "video": {
      "title": "Laurent Alexandre, chirurgien et expert en intelligence artificielle nous livre ses prédictions pour le 21e siècle.",
      "description": "Personne ne veut d'un monde où on pourrait manipuler nos cerveaux et où les états pourraient les bidouiller",
      "htmlCode":"https://www.youtube.com/embed/gacuFWZRjw0", 
    },
    "numPosts": 34,
    "numContributors": 12,
    "imgUrl": "/data/Discussion/6/documents/425/data",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu scelerisque magna. Ut sapien enim, vestibulum in ante quis, vehicula facilisis libero.",
    "questions": [
      {
        "id": "question:3",
        "title": "Comment qualifiez-vous l'emergence de l'Intelligence Artificielle dans notre société ?",
        "posts": [
          {
            "id": "proposition:1",
            "creatorId": 542,
            "body": "1.1 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 132,
              "disagree": 102
            }
          },
          {
            "id": "proposition:2",
            "creatorId": 693,
            "body": "1.2 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 80,
              "disagree": 20
            }
          },
          {
            "id": "proposition:3",
            "creatorId": 139,
            "body": "1.3 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 78,
              "disagree": 135
            }
          },
          {
            "id": "proposition:1",
            "creatorId": 542,
            "body": "1.4 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 132,
              "disagree": 102
            }
          },
          {
            "id": "proposition:2",
            "creatorId": 693,
            "body": "1.5 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 80,
              "disagree": 20
            }
          },
          {
            "id": "proposition:3",
            "creatorId": 139,
            "body": "1.6 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 78,
              "disagree": 135
            }
          },
          {
            "id": "proposition:1",
            "creatorId": 542,
            "body": "1.7 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 132,
              "disagree": 102
            }
          },
          {
            "id": "proposition:2",
            "creatorId": 693,
            "body": "1.8 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 80,
              "disagree": 20
            }
          },
          {
            "id": "proposition:3",
            "creatorId": 139,
            "body": "1.9 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 78,
              "disagree": 135
            }
          },
          {
            "id": "proposition:3",
            "creatorId": 139,
            "body": "1.10 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 78,
              "disagree": 135
            }
          }
        ]
      },
      {
        "id": "question:4",
        "title": "Selon vous, quelles opportunités l'Intelligence Artificielle pourrait représenter ?",
        "posts": [
          {
            "id": "proposition:1", "creatorId": 52,
            "body": "2.1 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 78,
              "disagree": 223
            },
          },
          {
            "id": "proposition:2",
            "creatorId": 723,
            "body": "2.2 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 25,
              "disagree": 676
            },
          },
          {
            "id": "proposition:3",
            "creatorId": 139,
            "body": "2.3 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 85,
              "disagree": 323
            },
          },
          {
            "id": "proposition:1",
            "creatorId": 542,
            "body": "2.4 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 132,
              "disagree": 102
            }
          },
          {
            "id": "proposition:2",
            "creatorId": 693,
            "body": "2.5 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 80,
              "disagree": 20
            }
          },
          {
            "id": "proposition:3",
            "creatorId": 139,
            "body": "2.6 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 78,
              "disagree": 135
            }
          },
          {
            "id": "proposition:1",
            "creatorId": 542,
            "body": "2.7 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 132,
              "disagree": 102
            }
          },
          {
            "id": "proposition:2",
            "creatorId": 693,
            "body": "2.8 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 80,
              "disagree": 20
            }
          },
          {
            "id": "proposition:3",
            "creatorId": 139,
            "body": "2.9 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 78,
              "disagree": 135
            }
          },
          {
            "id": "proposition:3",
            "creatorId": 139,
            "body": "2.10 Transformer l'échelle des quartiers, en somme, pour se rapprocher du rythme des pas. Modifier les distances et aménager la hauteur des bâtiments. Reconcevoir des agencements urbains \"à hauteur d'homme\".",
            "sentimentCounts": {
              "like": 78,
              "disagree": 135
            }
          }
        ]
      },
      {
        "id": "question:5",
        "title": "Selon vous, quelles politiques devons-nous mener vis à vis de l'Intelligence Artificielle ?"
      }
    ]
  },
  {
    "id": "thematic:6",
    "identifier": "survey",
    "title": "Analyser les défis politique",
    "numPosts": 29,
    "numContributors": 32,
    "imgUrl": "/data/Discussion/6/documents/424/data",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu scelerisque magna. Ut sapien enim, vestibulum in ante quis, vehicula facilisis libero."
  },
  {
    "id": "thematic:7",
    "identifier": "survey",
    "title": "Inventer un cadre stratégique mondial",
    "numPosts": 29,
    "numContributors": 32,
    "imgUrl": "/data/Discussion/6/documents/423/data",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu scelerisque magna. Ut sapien enim, vestibulum in ante quis, vehicula facilisis libero."
  },
  {
    "id": "thematic:67",
    "identifier": "thread",
    "title": "Inventer un cadre stratégique mondial",
    "numPosts": 29, "numContributors": 32,
    "imgUrl": "https://framapic.org/ibX9g8rDKkId/fHbo8OgaSvuW.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu scelerisque magna. Ut sapien enim, vestibulum in ante quis, vehicula facilisis libero."
  },
  {
    "id": "thematic:68",
    "identifier": "thread",
    "title": "Inventer un cadre stratégique mondial",
    "numPosts": 29,
    "numContributors": 32,
    "imgUrl": "https://framapic.org/3FcT7TlNGrCT/popxXrnh6ELR.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu scelerisque magna. Ut sapien enim, vestibulum in ante quis, vehicula facilisis libero."
  },
  {
    "id": "thematic:69",
    "identifier": "thread",
    "title": "Inventer un cadre stratégique mondial",
    "numPosts": 29,
    "numContributors": 32,
    "imgUrl": "https://framapic.org/ibX9g8rDKkId/fHbo8OgaSvuW.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu scelerisque magna. Ut sapien enim, vestibulum in ante quis, vehicula facilisis libero."
  },
  {
    "id": "thematic:70",
    "identifier": "thread",
    "title": "Inventer un cadre stratégique mondial",
    "numPosts": 29,
    "numContributors": 32,
    "imgUrl": "https://framapic.org/3FcT7TlNGrCT/popxXrnh6ELR.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu scelerisque magna. Ut sapien enim, vestibulum in ante quis, vehicula facilisis libero."
  }
];

const resolveFunctions = {
  Query: {
    thematics(_, { identifier }) {
      return ideas.filter(idea => idea.identifier === identifier);
    },
    node(_, { id }) {
      return find(ideas, { id: id });
    },
    // author(_, { id }) {
    //   return find(authors, { id: id });
    // },
  },
  Mutations: {
    addSentiment(_, { postId, type }) {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      switch (type) {
        case 'LIKE':
          post.sentimentCounts.like += 1;
          break;
        case 'DISAGREE':
          post.sentimentCounts.disagree += 1;
          break;
        default:
      }
      // pubsub.publish('postUpvoted', post);
      return post.sentimentCounts;
    },
    createPost(_, { ideaId }) {
      
    }
  },
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
  PostUnion: {
    __resolveType(data, context, info) {
      if (data.id.split(':')[0] === 'proposition') {
        return info.schema.getType('PropositionPost');
      }

      return info.schema.getType('AssemblPost');
    },
  },
  Node: {
    __resolveType(data, context, info) {
      if (data.id.split(':')[0] === 'proposition') {
        return info.schema.getType('PropositionPost');
      }
      if (data.id.split(':')[0] === 'thematic') {
        return info.schema.getType('Thematic');
      }
      return info.schema.getType('AssemblPost');
    },
  },
};

export default resolveFunctions;
