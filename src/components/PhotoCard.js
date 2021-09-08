import React, { Component } from 'react';

class PhotoCard extends Component {
    render() {
        const { link, id, albumId, title } = this.props

        return (
            <div className={"card"} style={{width: '18rem'}}>
                <img src={link} class="card-img-top" alt={id} />
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{title}</h5>
                    <p className={"card-text"}>{albumId}: {id}</p>
                    <a className={"btn btn-primary"}>Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default PhotoCard;
