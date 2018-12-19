/**
 * @flow
 * @relayHash a77163b8e449764edefd7773eda1d3d3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type subCategoryView_viewer$ref = any;
export type subCategoryViewRefetchQueryVariables = {|
  id: number
|};
export type subCategoryViewRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: subCategoryView_viewer$ref
  |}
|};
export type subCategoryViewRefetchQuery = {|
  variables: subCategoryViewRefetchQueryVariables,
  response: subCategoryViewRefetchQueryResponse,
|};
*/


/*
query subCategoryViewRefetchQuery(
  $id: Int!
) {
  viewer {
    ...subCategoryView_viewer_1Bmzm5
  }
}

fragment subCategoryView_viewer_1Bmzm5 on Viewer {
  subCategory(id: $id) {
    id
    internalId
    category {
      volume
      code
      id
    }
    description
    code
    zobristHash
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "subCategoryViewRefetchQuery",
  "id": null,
  "text": "query subCategoryViewRefetchQuery(\n  $id: Int!\n) {\n  viewer {\n    ...subCategoryView_viewer_1Bmzm5\n  }\n}\n\nfragment subCategoryView_viewer_1Bmzm5 on Viewer {\n  subCategory(id: $id) {\n    id\n    internalId\n    category {\n      volume\n      code\n      id\n    }\n    description\n    code\n    zobristHash\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "subCategoryViewRefetchQuery",
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
            "name": "subCategoryView_viewer",
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
    "name": "subCategoryViewRefetchQuery",
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
            "name": "subCategory",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
                "type": "Int!"
              }
            ],
            "concreteType": "SubCategory",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "internalId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "category",
                "storageKey": null,
                "args": null,
                "concreteType": "Category",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "volume",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  v1
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              v2,
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
(node/*: any*/).hash = 'e2a4b8fe80cb83bd48ad345a3b399274';
module.exports = node;
