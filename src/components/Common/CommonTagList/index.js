import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommonTagItem from './CommonTagItem';

export default class CommonTagList extends PureComponent {
  static propTypes = {
    tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentTag: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    activeTagClass: PropTypes.string.isRequired,
    hoverTagClass: PropTypes.string.isRequired
  };

  render() {
    const {
      tagList,
      currentTag,
      handleClick,
      activeTagClass,
      hoverTagClass
    } = this.props;

    return (
      <ul>
        {tagList.map(tag => (
          <CommonTagItem
            key={tag}
            tag={tag}
            isSelected={tag === currentTag}
            handleClick={handleClick}
            activeTagClass={activeTagClass}
            hoverTagClass={hoverTagClass}
          />
        ))}
      </ul>
    );
  }
}
