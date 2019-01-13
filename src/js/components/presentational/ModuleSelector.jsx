import React, {Component} from "react";
import PropTypes from "prop-types";

class ModuleSelector extends Component {
  render() {
    const variants = this.props.items.map(item => <option key={item.code} value={item.code}>{item.name}</option>);
    return (
      <select className="form-control" id="exampleFormControlSelect1" onChange={this.props.onChange} defaultValue={this.props.active}>
        {variants}
      </select>
    );
  }
}

ModuleSelector.propTypes = {
  items: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ModuleSelector;
