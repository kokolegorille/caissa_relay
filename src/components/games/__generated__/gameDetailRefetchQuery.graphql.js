/**
 * @flow
 * @relayHash 25341a6d22a631b8e340c210e951d4ec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type gameDetail_viewer$ref = any;
export type gameDetailRefetchQueryVariables = {|
  id: number
|};
export type gameDetailRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: gameDetail_viewer$ref
  |}
|};
export type gameDetailRefetchQuery = {|
  variables: gameDetailRefetchQueryVariables,
  response: gameDetailRefetchQueryResponse,
|};
*/


/*
query gameDetailRefetchQuery(
  $id: Int!
) {
  viewer {
    ...gameDetail_viewer_1Bmzm5
  }
}

fragment gameDetail_viewer_1Bmzm5 on Viewer {
  game(id: $id) {
    id
    internalId
    gameInfo
    pgn
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
    positions {
      move
      moveIndex
      fen
      zobristHash
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
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
  v1
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "gameDetailRefetchQuery",
  "id": null,
  "text": "query gameDetailRefetchQuery(\n  $id: Int!\n) {\n  viewer {\n    ...gameDetail_viewer_1Bmzm5\n  }\n}\n\nfragment gameDetail_viewer_1Bmzm5 on Viewer {\n  game(id: $id) {\n    id\n    internalId\n    gameInfo\n    pgn\n    blackPlayer {\n      lastName\n      firstName\n      id\n    }\n    whitePlayer {\n      lastName\n      firstName\n      id\n    }\n    event\n    site\n    round\n    result\n    year\n    positions {\n      move\n      moveIndex\n      fen\n      zobristHash\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "gameDetailRefetchQuery",
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
            "name": "gameDetail_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
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
    "name": "gameDetailRefetchQuery",
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
            "name": "game",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
                "type": "Int!"
              }
            ],
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
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "gameInfo",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "pgn",
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
                "selections": v2
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "whitePlayer",
                "storageKey": null,
                "args": null,
                "concreteType": "Player",
                "plural": false,
                "selections": v2
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
                "kind": "LinkedField",
                "alias": null,
                "name": "positions",
                "storageKey": null,
                "args": null,
                "concreteType": "Position",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "move",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "moveIndex",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fen",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "zobristHash",
                    "args": null,
                    "storageKey": null
                  },
                  v1
                ]
              }
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
(node/*: any*/).hash = '5fb3a25bb2040cab27406880638a6d14';
module.exports = node;
