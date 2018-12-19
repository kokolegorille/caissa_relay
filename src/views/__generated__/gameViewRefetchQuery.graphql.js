/**
 * @flow
 * @relayHash feb008ec59ad78db81768370984bf089
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type gameView_viewer$ref = any;
export type gameViewRefetchQueryVariables = {|
  id: number
|};
export type gameViewRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: gameView_viewer$ref
  |}
|};
export type gameViewRefetchQuery = {|
  variables: gameViewRefetchQueryVariables,
  response: gameViewRefetchQueryResponse,
|};
*/


/*
query gameViewRefetchQuery(
  $id: Int!
) {
  viewer {
    ...gameView_viewer_1Bmzm5
  }
}

fragment gameView_viewer_1Bmzm5 on Viewer {
  game(id: $id) {
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
  "name": "gameViewRefetchQuery",
  "id": null,
  "text": "query gameViewRefetchQuery(\n  $id: Int!\n) {\n  viewer {\n    ...gameView_viewer_1Bmzm5\n  }\n}\n\nfragment gameView_viewer_1Bmzm5 on Viewer {\n  game(id: $id) {\n    id\n    internalId\n    gameInfo\n    blackPlayer {\n      lastName\n      firstName\n      id\n    }\n    whitePlayer {\n      lastName\n      firstName\n      id\n    }\n    event\n    site\n    round\n    result\n    year\n    positions {\n      move\n      moveIndex\n      fen\n      zobristHash\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "gameViewRefetchQuery",
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
            "name": "gameView_viewer",
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
    "name": "gameViewRefetchQuery",
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
(node/*: any*/).hash = 'f3a232c8923429f3c50b7b397036a5ee';
module.exports = node;
