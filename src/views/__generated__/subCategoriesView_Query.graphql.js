/**
 * @flow
 * @relayHash c70b9e88008a610275675e5227493267
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type subCategoriesList_viewer$ref = any;
export type subCategoriesView_QueryVariables = {|
  description?: ?string,
  code?: ?string,
  zobristHash?: ?string,
|};
export type subCategoriesView_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: subCategoriesList_viewer$ref
  |}
|};
export type subCategoriesView_Query = {|
  variables: subCategoriesView_QueryVariables,
  response: subCategoriesView_QueryResponse,
|};
*/


/*
query subCategoriesView_Query(
  $description: String
  $code: String
  $zobristHash: String
) {
  viewer {
    ...subCategoriesList_viewer_tHHDt
  }
}

fragment subCategoriesList_viewer_tHHDt on Viewer {
  subCategories(first: 30, description: $description, code: $code, zobristHash: $zobristHash) {
    edges {
      node {
        id
        ...subCategoryItem_subCategory
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

fragment subCategoryItem_subCategory on SubCategory {
  id
  internalId
  category {
    volume
    code
    id
  }
  description
  code
  pgn
  zobristHash
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "description",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "code",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "zobristHash",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "code",
    "variableName": "code",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "description",
    "variableName": "description",
    "type": "String"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 30,
    "type": "Int"
  },
  {
    "kind": "Variable",
    "name": "zobristHash",
    "variableName": "zobristHash",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "subCategoriesView_Query",
  "id": null,
  "text": "query subCategoriesView_Query(\n  $description: String\n  $code: String\n  $zobristHash: String\n) {\n  viewer {\n    ...subCategoriesList_viewer_tHHDt\n  }\n}\n\nfragment subCategoriesList_viewer_tHHDt on Viewer {\n  subCategories(first: 30, description: $description, code: $code, zobristHash: $zobristHash) {\n    edges {\n      node {\n        id\n        ...subCategoryItem_subCategory\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment subCategoryItem_subCategory on SubCategory {\n  id\n  internalId\n  category {\n    volume\n    code\n    id\n  }\n  description\n  code\n  pgn\n  zobristHash\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "subCategoriesView_Query",
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
            "name": "subCategoriesList_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "code",
                "variableName": "code",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "description",
                "variableName": "description",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "zobristHash",
                "variableName": "zobristHash",
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
    "name": "subCategoriesView_Query",
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
            "name": "subCategories",
            "storageKey": null,
            "args": v1,
            "concreteType": "SubCategoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "SubCategoryEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubCategory",
                    "plural": false,
                    "selections": [
                      v2,
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
                          v3,
                          v2
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
                        "args": null,
                        "storageKey": null
                      },
                      v3,
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
                        "name": "zobristHash",
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
            "name": "subCategories",
            "args": v1,
            "handle": "connection",
            "key": "subCategoriesList_subCategories",
            "filters": [
              "description",
              "code",
              "zobristHash"
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
(node/*: any*/).hash = '5f28fbfdc37d0f408c361cff93e3e451';
module.exports = node;
