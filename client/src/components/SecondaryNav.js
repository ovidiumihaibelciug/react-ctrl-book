import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class SecondaryNav extends Component {
  render() {
    let {title, categories} = this.props;
    return (
      <div className="secondary-nav">
        <div className="secondary-nav-start">{title}</div>
        <div className="secondary-nav-end">
            {
                categories.map(category => {
                    let activeClass = category.active ? 'active-secnav' : '';
                    return (<a href={'/' + category.value} key={category.name} className={'navbar-item ' +  activeClass}>{category.name}</a>);
                })
            }
        </div>
      </div>
    )
  }
}

export default SecondaryNav;
