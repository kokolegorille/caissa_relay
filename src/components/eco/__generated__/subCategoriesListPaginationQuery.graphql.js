/**
 * @flow
 * @relayHash b0432e43d9cf984fe0712e46d90c1161
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type subCategoriesList_viewer$ref = any;
export type subCategoriesListPaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
  description?: ?string,
  code?: ?string,
  zobristHash?: ?string,
|};
export type subCategoriesListPaginationQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: subCategoriesList_viewer$ref
  |}
|};
export type subCategoriesListPaginationQuery = {|
  variables: subCategoriesListPaginationQueryVariables,
  response: subCategoriesListPaginationQueryResponse,
|};
*/


/*
query subCategoriesListPaginationQuery(
  $count: Int!
  $cursor: String
  $description: String
  $code: String
  $zobristHash: String
) {
  viewer {
    ...subCategoriesList_viewer_8nvTQ
  }
}

fragment subCategoriesList_viewer_8nvTQ on Viewer {
  subCategories(first: $count, after: $cursor, description: $description, code: $code, zobristHash: $zobristHash) {
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
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
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
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
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
  "name": "subCategoriesListPaginationQuery",
  "id": null,
  "text": "query subCategoriesListPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $description: String\n  $code: String\n  $zobristHash: String\n) {\n  viewer {\n    ...subCategoriesList_viewer_8nvTQ\n  }\n}\n\nfragment subCategoriesList_viewer_8nvTQ on Viewer {\n  subCategories(first: $count, after: $cursor, description: $description, code: $code, zobristHash: $zobristHash) {\n    edges {\n      node {\n        id\n        ...subCategoryItem_subCategory\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment subCategoryItem_subCategory on SubCategory {\n  id\n  internalId\n  category {\n    volume\n    code\n    id\n  }\n  description\n  code\n  pgn\n  zobristHash\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "subCategoriesListPaginationQuery",
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
    "name": "subCategoriesListPaginationQuery",
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
(node/*: any*/).hash = 'a833c49662aa770d363ac6cb0dcd73c7';
module.exports = node;
