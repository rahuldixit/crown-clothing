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
        console.log(this.state.sections);
        return (
        <div className='directory-menu'>
        {this.state.sections.map(({title, imageUrl, id, size}) => 
        (<MenuItem key = {id} title={title} img = {imageUrl} size={size}></MenuItem>
        ))}
        </div>
        );
    }
}

export default Directory;