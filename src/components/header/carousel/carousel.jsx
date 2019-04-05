import React, { Component } from 'react';
import "./carousel.scss"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://i.ibb.co/ypWcdxn/82ca09c772b70646a3341a59219d4803.jpg',
        altText: 'Welcome to Api-Football Actu-foot in real time',
        caption: 'live match news, upcoming matches and finished match scores'
    },
    {
        src: 'https://i.imgur.com/gMdgPvO.jpg',
        altText: 'Bet on your Best Team',
        caption: 'MyMatch - Create your match scenario and get your personalized rating'
    },
    {
        src: 'https://png.pngtree.com/thumb_back/fw800/back_pic/03/86/72/4157cfcc9b5ab2c.jpg',
        altText: 'More about it',
        caption: 'Follow your favorite teams in the Myteam section choose between a selection of leagues stay informed about upcoming games check team composition '
    }
];

class Carousel1 extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} width="100%" height="700" />
                    <div className="sizeTitleCarousel"><CarouselCaption font-size captionText={item.caption} captionHeader={item.altText} /></div>
                </CarouselItem>
            );
        });

        return (
            <Carousel className="styleCarousel"
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default Carousel1;