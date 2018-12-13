/**
 * @flow
 * @relayHash 97221a17772c5a7d86c2fe4f5325a76e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type gamesList_viewer$ref = any;
export type SortOrder = "ASC" | "ASC_NULLS_FIRST" | "ASC_NULLS_LAST" | "DESC" | "DESC_NULLS_FIRST" | "DESC_NULLS_LAST" | "%future added value";
export type GameFilter = {
  blackPlayer?: ?string,
  event?: ?string,
  player?: ?string,
  result?: ?string,
  round?: ?string,
  site?: ?string,
  whitePlayer?: ?string,
  year?: ?number,
  zobristHash?: ?string,
};
export type gamesListQueryVariables = {|
  count: number,
  cursor?: ?string,
  filter: GameFilter,
  order: SortOrder,
|};
export type gamesListQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: gamesList_viewer$ref
  |}
|};
export type gamesListQuery = {|
  variables: gamesListQueryVariables,
  response: gamesListQueryResponse,
|};
*/


/*
query gamesListQuery(
  $count: Int!
  $cursor: String
  $filter: GameFilter!
  $order: SortOrder!
) {
  viewer {
    ...gamesList_viewer_32tO6o
  }
}

fragment gamesList_viewer_32tO6o on Viewer {
  games(first: $count, after: $cursor, filter: $filter, order: $order) {
    edges {
      node {
        id
        ...gameItem_game
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
  }
}

fragment gameItem_game on Game {
  id
  internalId
  gameInfo
  blackPlayer {
    lastName
    firstName
    id
  }
  whitePlayer {
    lastName
    firstName
    id
  }
  event
  site
  round
  result
  year
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "GameFilter!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "order",
    "type": "SortOrder!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "GameFilter"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  },
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "order",
    "type": "SortOrder"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "lastName",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "firstName",
    "args": null,
    "storageKey": null
  },
  v2
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "gamesListQuery",
  "id": null,
  "text": "query gamesListQuery(\n  $count: Int!\n  $cursor: String\n  $filter: GameFilter!\n  $order: SortOrder!\n) {\n  viewer {\n    ...gamesList_viewer_32tO6o\n  }\n}\n\nfragment gamesList_viewer_32tO6o on Viewer {\n  games(first: $count, after: $cursor, filter: $filter, order: $order) {\n    edges {\n      node {\n        id\n        ...gameItem_game\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment gameItem_game on Game {\n  id\n  internalId\n  gameInfo\n  blackPlayer {\n    lastName\n    firstName\n    id\n  }\n  whitePlayer {\n    lastName\n    firstName\n    id\n  }\n  event\n  site\n  round\n  result\n  year\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "gamesListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "gamesList_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "filter",
                "variableName": "filter",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "order",
                "variableName": "order",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "gamesListQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "games",
            "storageKey": null,
            "args": v1,
            "concreteType": "GameConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "GameEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Game",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "event",
                        "args": null,
                        "storageKey": null
                      },
                      v2,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "gameInfo",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "blackPlayer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Player",
                        "plural": false,
                        "selections": v3
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "whitePlayer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Player",
                        "plural": false,
                        "selections": v3
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "internalId",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "site",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "round",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "result",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "year",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasPreviousPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "startCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "games",
            "args": v1,
            "handle": "connection",
            "key": "gamesList_games",
            "filters": [
              "filter",
              "order"
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '61711483ca42332ba845e0e989d4f25e';
module.exports = node;
