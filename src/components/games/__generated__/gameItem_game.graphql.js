/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type gameItem_game$ref: FragmentReference;
export type gameItem_game = {|
  +id: string,
  +internalId: ?number,
  +pgn: ?string,
  +blackPlayer: ?{|
    +lastName: ?string,
    +firstName: ?string,
  |},
  +whitePlayer: ?{|
    +lastName: ?string,
    +firstName: ?string,
  |},
  +whiteElo: ?number,
  +blackElo: ?number,
  +event: ?string,
  +site: ?string,
  +round: ?string,
  +result: ?string,
  +year: ?number,
  +month: ?number,
  +day: ?number,
  +$refType: gameItem_game$ref,
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
  "name": "gameItem_game",
  "type": "Game",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "whiteElo",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "blackElo",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "month",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "day",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '408bab75597a645ee9141ec0c096b163';
module.exports = node;
