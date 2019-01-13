import React, {Component} from "react";
import PropTypes from "prop-types";

class NavSelector extends Component {
  render() {
    const variants = this.props.items.map(item => {
      const className = "flex-sm-fill text-sm-center nav-link " + (item.code === this.props.active ? 'active' : '');
      return <a className={className} key={item.code} href="#" onClick={e => this.props.onChange(e, item.code)}>
        {item.name}
      </a>;
    });
    return (
      <nav className="nav nav-pills flex-column">
        {variants}
      </nav>
    );
  }
}

NavSelector.propTypes = {
  items: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NavSelector;
