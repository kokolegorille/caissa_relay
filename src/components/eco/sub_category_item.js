import React, {Component} from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { withRouter } from 'found';

class SubCategoryItem extends Component {
  render() {
    const {subCategory, currentSubCategoryId} = this.props;
    const cssClass = (subCategory.internalId === currentSubCategoryId) ? "active" : null;
    return (
      <tr className={cssClass} onClick={this.handleClick}>
        <td>{subCategory.category.volume}{subCategory.category.code}{subCategory.code}</td>
        <td>{subCategory.description}</td>
        <td>{subCategory.pgn}</td>
        <td>{subCategory.zobristHash}</td>
      </tr>
    );
  }

  handleClick = () => {
    const {internalId} = this.props.subCategory;
    // Programatically replace path... instead of using Link!
    this.props.router.replace(`/eco/${internalId}`);
  }
}

export default createFragmentContainer(withRouter(SubCategoryItem), {
  subCategory: graphql`
    fragment subCategoryItem_subCategory on SubCategory {
      id
      internalId
      category {
        volume
        code
      }
      description
      code
      pgn
      zobristHash
    }
  `,
});