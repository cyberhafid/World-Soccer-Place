import React, { Component } from 'react'
import { Container, } from 'reactstrap';
import LogoClub from "./LogoClub";
import "./vsbanner.scss"

export default class Vsbanner extends Component {
    render() {
        return (
            <Container className="css-banner">
                <h2>Match</h2>
                    <div className="soccer-place">
                        <LogoClub className="position-logo" url="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c4d2.png" />
                        <LogoClub className="position-logo" url="https://png.pngtree.com/element_our/md/20180427/md_5ae2bfcc6832a.png" />
                        <LogoClub className="position-logo" url="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c4d8.png" />
                    </div>
            </Container >
        )
    }
}
