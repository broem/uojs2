import React, { Component, PropTypes } from 'react';

import Intro from 'component/intro'

import style from './style'

class Application extends Component {

    static displayName = '[component] application';

    static propTypes = {
        children : PropTypes.element.isRequired
    };

    state = {
        intro : !!localStorage.getItem('intro'),
    };

    get elIntro() {
        if(!this.state.intro) {
            const props = {
                onExit : e => {
                    this.setState({
                        intro : true
                    }, () => {
                        localStorage.setItem('intro', true);
                    });
                }
            };

            return <Intro {...props} />
        }
    }

    render() {
        return(
            <div className={style['app']}>
                {this.elIntro}
                {/* reserve sound manager component */}
                {this.props.children}
            </div>
        )
    }
}

export default Application;