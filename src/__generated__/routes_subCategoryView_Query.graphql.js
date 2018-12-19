/**
 * @flow
 * @relayHash 090dd662748be03d01e2b300d75feac9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type subCategoryView_viewer$ref = any;
export type routes_subCategoryView_QueryVariables = {|
  id: number
|};
export type routes_subCategoryView_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: subCategoryView_viewer$ref
  |}
|};
export type routes_subCategoryView_Query = {|
  variables: routes_subCategoryView_QueryVariables,
  response: routes_subCategoryView_QueryResponse,
|};
*/


/*
query routes_subCategoryView_Query(
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
  "name": "routes_subCategoryView_Query",
  "id": null,
  "text": "query routes_subCategoryView_Query(\n  $id: Int!\n) {\n  viewer {\n    ...subCategoryView_viewer_1Bmzm5\n  }\n}\n\nfragment subCategoryView_viewer_1Bmzm5 on Viewer {\n  subCategory(id: $id) {\n    id\n    internalId\n    category {\n      volume\n      code\n      id\n    }\n    description\n    code\n    zobristHash\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "routes_subCategoryView_Query",
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
    "name": "routes_subCategoryView_Query",
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
(node/*: any*/).hash = '4d31fcfed63911ce02606c25ab0cde49';
module.exports = node;
