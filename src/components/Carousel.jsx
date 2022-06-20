import React from 'react'
import a from '../components/assets/ICON-House-Zero/1.jpg'
import b from '../components/assets/ICON-House-Zero/2.jpg'
import c from '../components/assets/ICON-House-Zero/3.jpg'
import d from '../components/assets/ICON-House-Zero/4.jpg'
import e from '../components/assets/ICON-House-Zero/5.jpg'
import f from '../components/assets/ICON-House-Zero/6.jpg'
import g from '../components/assets/ICON-House-Zero/7.jpg'
import h from '../components/assets/ICON-House-Zero/8.jpg'
import i from '../components/assets/ICON-House-Zero/9.jpg'

import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Carousel() {

    return (
        <div className=''>

        <MultiCarousel 
            responsive={responsive}
            showDots={true}
            infinite={true}
            >
            {imageAssets.map((i, index) => {
                return (<div key={index}>
                    <img
                        src={i.link} 
                        style={{ 
                            height: "24rem",
                            width: "100%", 
                            objectFit:"cover"}}
                        // className="object-contain h-full"
                        />
                </div>)
            })}
        </MultiCarousel>
            </div>
    )
}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const imageAssets = [
        {
            link: a,
            caption: "1"
        },
        {
            link: b,
            caption: "2"
        },
        {
            link: c,
            caption: "3"
        },
        {
            link: d,
            caption: ""
        },
        {
            link: e,
            caption: ""
        },
        {
            link: f,
            caption: ""
        },
        {
            link: g,
            caption: ""
        },
        {
            link: h,
            caption: ""
        },
        {
            link: i,
            caption: ""
        },
]
