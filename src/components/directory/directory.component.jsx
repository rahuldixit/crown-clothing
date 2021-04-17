import React from 'react';
import sections from './directory.data.js';
import MenuItem from '../menu-item/menu-item'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: sections
        }
    }

    render() {
        return (
        <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps}) => 
        (<MenuItem key = {id} {...otherSectionProps}></MenuItem>
        ))}
        </div>
        );
    }
}

export default Directory;