/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type gameView_viewer$ref: FragmentReference;
export type gameView_viewer = {|
  +game: ?{|
    +id: string,
    +internalId: ?number,
    +gameInfo: ?any,
    +blackPlayer: ?{|
      +lastName: ?string,
      +firstName: ?string,
    |},
    +whitePlayer: ?{|
      +lastName: ?string,
      +firstName: ?string,
    |},
    +pgn: ?string,
    +event: ?string,
    +site: ?string,
    +round: ?string,
    +result: ?string,
    +year: ?number,
    +positions: ?$ReadOnlyArray<?{|
      +move: ?string,
      +moveIndex: ?number,
      +fen: ?string,
      +zobristHash: ?any,
    |}>,
  |},
  +$refType: gameView_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
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
  }
];
return {
  "kind": "Fragment",
  "name": "gameView_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "id",
      "type": "Int!",
      "defaultValue": null
    }
  ],
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
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
          "selections": v0
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "whitePlayer",
          "storageKey": null,
          "args": null,
          "concreteType": "Player",
          "plural": false,
          "selections": v0
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "pgn",
          "args": null,
          "storageKey": null
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
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ff93abcc4b884f1e3814b65c71a8f629';
module.exports = node;
