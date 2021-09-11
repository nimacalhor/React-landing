import React, { Component } from 'react';

class PhotoCard extends Component {

    // Styles________________________________________________________________________
    card = {
        width: "18rem",
        borderRadius: "0.5rem"
    };
    render() {
        const { link, id, albumId, title } = this.props

        return (
            <div className={"card m-2"} style={this.card}>
                <img src={link} className={"card-img-top p-2"} alt={id} style={{borderRadius: "0.75rem"}} />
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
