import PropTypes from 'prop-types';
import React from 'react';

import logo from '../../images/logo.svg';
import styles from './Header.module.scss';
import { getPosition } from '../../utils/header.js';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeElement: null};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let activeElement = false;

    if(window.scrollY > window.innerHeight) {
      document.getElementsByClassName(styles.header)[0].style.backgroundColor = '#FFFFFF';
      document.getElementsByClassName(styles.menu)[0].style.backgroundColor = '#FFFFFF';
    }
    else {
      document.getElementsByClassName(styles.header)[0].style.backgroundColor = 'rgba(0,0,0,0)';
      document.getElementsByClassName(styles.menu)[0].style.backgroundColor = 'rgba(0,0,0,0)';
    }

    this.props.listItems.forEach((value,i) => {
      let element = document.getElementById(value.link.substring(1));
      if(element) {
        if(getPosition(element).y <= 0){
          activeElement = value.link;
        }
      }
    });
    this.setState({
      activeElement: activeElement
    });
  }

  render() {
    return (
      <header className={styles.header}>
        <a href="/#">
          <img alt="well this was supposed to be my logo"
            className={styles.logo} src={logo}/>
        </a>
        <div className={styles.menu}>
          {
            this.props.listItems.map(item => {
              return (
                <div className={styles.menuItem  + ' ' +
                  (this.state.activeElement === item.link ? styles.active: '')}
                  key={item.link}>
                  <a href={item.link}>{item.name}</a>
                </div>
              )
            })
          }
        </div>
        <hr/>
      </header>
    )
  }
}

Header.propTypes = {
  listItems: PropTypes.array.isRequired
}

export default Header;
