import React, {Component} from 'react';
import {graphql, QueryRenderer} from 'react-relay';

import environment from "../environment";
import SubCategoryFilter from "../components/eco/sub_category_filter";
import SubCategoriesList from "../components/eco/sub_categories_list";

export default class SubCategoriesView extends Component {
    state = {
      description: '',
      code: '',
      zobristHash: '',
    }

    render() {
      const {id} = this.props.params;

      // Set class for A and B components, it depends on presence of id in params
      // (Is a game selected, or not)
      let classA, classB;
      if(id) {
        classA = "col-sm-12 col-md-3"
        classB = "col-sm-12 col-md-9"
      } else {
        classA = "col-sm-12 col-md-12"
        classB = ""
      }

      return (
        <QueryRenderer
          environment={environment}
          query={graphql`
            query subCategoriesView_Query(
              $description: String
              $code: String
              $zobristHash: String
            ) {
              viewer {
                ...subCategoriesList_viewer @arguments(description: $description, code: $code, zobristHash: $zobristHash)
              }
            }
          `}
          variables={{
            description: this.state.description,
            code: this.state.code,
            zobristHash: this.state.zobristHash,
          }}
          render={({error, props}) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return (
              <div className="row">
                <div className={classA}>
                  <SubCategoryFilter initialState={this.state} onHandleSubmit={this.handleFilterSubmit}/>
                  <SubCategoriesList viewer={props.viewer} currentSubCategoryId={parseInt(id)} />
                </div>
                <div id="ecoPanel" className={classB}>{this.props.children}</div>
              </div>
            );
          }} 
        />
      );
    }

    handleFilterSubmit = (filterState) => {
      if (filterState === null) {
        // Reset state to default
        this.setState({
          description: '',
          code: '',
          zobristHash: '',
        });
        return;
      }
  
      const allowed = [
        'description', 'code', 'zobristHash'
      ];
  
      // It is important to clean up attributes before submitting to graphql!
      let filtered = Object.keys(filterState)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = filterState[key];
          return obj;
        }, {});
  
      this.setState(filtered);
    }
  }