import PropTypes from 'prop-types'
import React from 'react';
import Typed from 'react-typed';

const TypedComponent = (props) => (
  <div className={props.className}>
    <span>&lt;emily class=&quot;</span>
    <Typed
    strings={[
        'developer',
        'designer',
        'leader',
        'runner',
        'transgender',
        'gamer']}
        typeSpeed={70}
        backSpeed={70}
        loop
        />
    <span>&quot;/&gt;</span>
  </div>
)

TypedComponent.propTypes = {
  className: PropTypes.string,
}

export default TypedComponent;
