import React from 'react';
import { useEffect } from 'react';
import './Main.css'


import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import img1 from '../../media/img (1).jpg'
import img2 from '../../media/img (2).jpg'
import img3 from '../../media/img (3).jpg'
import img4 from '../../media/img (4).jpg'
import img5 from '../../media/img (5).jpg'
import img6 from '../../media/img (6).jpg'
import img7 from '../../media/img (7).jpg'
import img8 from '../../media/img (8).jpg'
import img9 from '../../media/img (9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data =[
    {
        id:1,
        imgSrc:img1,
        desTitle:'Bora-Bora',
        location:'New-Zealand',
        grade:'CUTURAL RELAX',
        fees:'$700',
        description:'The epitome of romance , Bora Bora is one of the best travel destination in the World . This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:2,
        imgSrc:img2,
        desTitle:'Machu Picchu',
        location:'Peru',
        grade:'CUTURAL RELAX',
        fees:'$600',
        description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is smply spectacular'
    },
    {
        id:3,
        imgSrc:img3,
        desTitle:'Great Barrier Reef',
        location:'Australia',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. the hallmark of this place is lavish and beauty . Alwais interesting to be this place'
    },
    {
        id:4,
        imgSrc:img4,
        desTitle:'Bora-Bora',
        location:'New-Zealand',
        grade:'CUTURAL RELAX',
        fees:'$700',
        description:'The epitome of romance , Bora Bora is one of the best travel destination in the World . This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:5,
        imgSrc:img5,
        desTitle:'Machu Picchu',
        location:'Peru',
        grade:'CUTURAL RELAX',
        fees:'$600',
        description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is smply spectacular'
    },
    {
        id:6,
        imgSrc:img6,
        desTitle:'Great Barrier Reef',
        location:'Australia',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. the hallmark of this place is lavish and beauty . Alwais interesting to be this place'
    },
    {
        id:7,
        imgSrc:img7,
        desTitle:'Bora-Bora',
        location:'New-Zealand',
        grade:'CUTURAL RELAX',
        fees:'$700',
        description:'The epitome of romance , Bora Bora is one of the best travel destination in the World . This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:8,
        imgSrc:img8,
        desTitle:'Machu Picchu',
        location:'Peru',
        grade:'CUTURAL RELAX',
        fees:'$600',
        description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is smply spectacular'
    },
    {
        id:9,
        imgSrc:img9,
        desTitle:'Great Barrier Reef',
        location:'Australia',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. the hallmark of this place is lavish and beauty . Alwais interesting to be this place'
    },
]

function Main() {
    useEffect(()=>{
        Aos.init({duration: 2000})
    })
    return (
        <div>
            <section className='main container section'>
                <div className="secTitle">
                    <h3 data-aos='fade-right' className="title">
                        Most visited destinations
                    </h3>
                </div>
                <div className="secContent grid">
                    {
                        Data.map(({id, imgSrc ,desTitle ,location, grade ,fees ,description})=>{
                            return(
                                <div data-aos='fade-up' key={id} className='singleDestination'>
                                   <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle} />
                                    </div> 
                                    <div className="cardInfo">
                                        <h4 className="desTitle">{desTitle}</h4>
                                        <span className="continent flex">
                                            <HiOutlineLocationMarker className='icon'/>
                                            <span className="name">{location}</span>
                                        </span>
                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>{grade}<small>+1</small></span>
                                            </div>
                                            <div className="price">
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>
                                        <button className='btn flex'>DETAILS <HiOutlineClipboardCheck className='icon' /></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default Main;