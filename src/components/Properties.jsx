import React from 'react'
import sample from '../assets/sample1.png'
import joyce_b from '../assets/Joyce_B.jpg'
import beryl from '../assets/Beryl.jpg'
import example_vid from '../assets/3_bedroom_flat_ologuneru.mp4'
import agoro_vid from '../assets/agoro.mp4'
import piggery_vid from '../assets/piggery_farm.mp4'
import beryl_video from '../assets/beryl_video.mp4'
import './Properties.css'
import { useState } from 'react'
import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faBed, faToilet, faVectorSquare, faTractor, faHotel, faSchool } from '@fortawesome/free-solid-svg-icons'

const Properties = () => {

    const propertyListings = [
        {
            name: '',
            location: 'Aroro, Beryl, Basorun Ojo, Ibadan',
            bedrooms: '3 ',
            bathrooms: '',
            condition: 'For Rent',
            state: 'Oyo State',
            type: 'Apartment',
            typeIcon: faBuilding,
            price: '₦600k /year',
            description: '',
            image: beryl,
            video: true,
            video_link: beryl_video,
        },
        {
          name: '',
          location: 'Ologuneru, Ibadan',
          bedrooms: '3',
          bathrooms: '',
          condition: 'For Rent',
          state: 'Oyo State',
          type: 'Apartment',
          typeIcon: faBuilding,
          price: '₦600k /year',
          description: 'All rooms en-suite',
          image: sample,
          video: true,
          video_link: example_vid,
        },
        {
          name: '',
          location: 'Ohisa street, Igando',
          bedrooms: '3',
          bathrooms: '',
          condition: 'For Rent',
          state: 'Lagos State',
          type: 'Apartment',
          typeIcon: faBuilding,
          price: '₦400k /year',
          description: '',
          image: sample,
        },
        {
          name: '',
          location: 'Off Elewuro, Festac, Akobo, Ibadan',
          bedrooms: '',
          bathrooms: '',
          condition: 'For Sale',
          state: 'Oyo State',
          type: 'Piggery farm',
          typeIcon: faTractor,
          price: '₦12m (asking)',
          description: '',
          image: sample,
          video: true,
          video_link: piggery_vid,
        },
        {
          name: '',
          location: 'Agoro, along Iletutun-elenushonsho road, Idi-ishin, Ibadan',
          bedrooms: '',
          bathrooms: '',
          condition: 'For Sale',
          state: 'Oyo State',
          type: 'Land',
          typeIcon: faVectorSquare,
          price: '₦2m (asking)',
          description: '',
          image: sample,
          video: true,
          video_link: agoro_vid,
        },
        {
          name: '',
          location: 'Oke-alayun village of Awotan, Akufo road',
          bedrooms: '',
          bathrooms: '',
          condition: 'For Sale',
          state: 'Oyo State',
          type: 'Land',
          typeIcon: faVectorSquare,
          price: '₦400k /plot',
          description: '',
          image: sample,
        },
        {
          name: '',
          location: 'Along Ikoyi road, after Federal Government College FGC, Ogbomosho',
          bedrooms: '2',
          bathrooms: '',
          condition: 'For Sale',
          state: 'Oyo State',
          type: 'Apartment',
          typeIcon: faBuilding,
          price: '₦15m (asking)',
          description: '2 Bedroom and 3 Bedroom flat for Sale',
          image: sample,
        },
        {
          name: '',
          location: 'Joyce-B',
          bedrooms: '15',
          bathrooms: '15',
          condition: 'For Sale',
          state: 'Oyo State',
          type: 'Hotel',
          typeIcon: faHotel,
          price: '₦250m (asking)',
          description: 'Uncompleted Hotel with 15 rooms en-suite with ample parking space',
          image: joyce_b,
        },
        {
          name: '',
          location: 'Adjacent Conoil filling station sitting on 5 plots of land for sale at Onibukun, Sange-Ota road',
          bedrooms: '',
          bathrooms: '',
          condition: 'For Sale',
          state: 'Ogun State',
          type: 'School',
          typeIcon: faSchool,
          price: '₦100m (asking)',
          description: '',
          image: sample,
        },
        {
          name: '',
          location: 'Ohisa street, igando',
          bedrooms: '3',
          bathrooms: '',
          condition: 'For Sale',
          state: 'Lagos State',
          type: 'Apartment',
          typeIcon: faBuilding,
          price: '₦35m (asking)',
          description: '4 units of 3 bedroom Flats',
          image: sample,
        },
    ]

    const statusListings = [
      {
        name: '',
        location: 'Off Elewuro, Festac, Akobo, Ibadan',
        bedrooms: '',
        bathrooms: '',
        condition: 'For Sale',
        state: 'Oyo State',
        type: 'Piggery farm',
        typeIcon: faTractor,
        price: '₦12m (asking)',
        description: '',
        image: sample,
        video: true,
        video_link: piggery_vid,
      },
      {
        name: '',
        location: 'Agoro, along Iletutun-elenushonsho road, Idi-ishin, Ibadan',
        bedrooms: '',
        bathrooms: '',
        condition: 'For Sale',
        state: 'Oyo State',
        type: 'Land',
        typeIcon: faVectorSquare,
        price: '₦2m (asking)',
        description: '',
        image: sample,
        video: true,
        video_link: agoro_vid,
      },
      {
        name: '',
        location: 'Oke-alayun village of Awotan, Akufo road',
        bedrooms: '',
        bathrooms: '',
        condition: 'For Sale',
        state: 'Oyo State',
        type: 'Land',
        typeIcon: faVectorSquare,
        price: '₦400k /plot',
        description: '',
        image: sample,
      },
      {
        name: '',
        location: 'Along Ikoyi road, after Federal Government College FGC, Ogbomosho',
        bedrooms: '2',
        bathrooms: '',
        condition: 'For Sale',
        state: 'Oyo State',
        type: 'Apartment',
        typeIcon: faBuilding,
        price: '₦15m (asking)',
        description: '2 Bedroom and 3 Bedroom flat for Sale',
          image: sample,
      },
      {
        name: '',
        location: 'Joyce-B',
        bedrooms: '15',
        bathrooms: '15',
        condition: 'For Sale',
        state: 'Oyo State',
        type: 'Hotel',
        typeIcon: faHotel,
        price: '₦250m (asking)',
        description: 'Uncompleted Hotel with 15 rooms en-suite with ample parking space',
        image: joyce_b,
      },
      {
        name: '',
        location: 'Adjacent Conoil filling station sitting on 5 plots of land for sale at Onibukun, Sange-Ota road',
        bedrooms: '',
        bathrooms: '',
        condition: 'For Sale',
        state: 'Ogun State',
        type: 'School',
        typeIcon: faSchool,
        price: '₦100m (asking)',
        description: '',
        image: sample,
      },
      {
        name: '',
        location: 'Ohisa street, igando',
        bedrooms: '3',
        bathrooms: '',
        condition: 'For Sale',
        state: 'Lagos State',
        type: 'Apartment',
        typeIcon: faBuilding,
        price: '₦35m (asking)',
        description: '4 units of 3 bedroom Flats',
        image: sample,
      },
      {
          name: '',
          location: 'Aroro, Beryl, Basorun Ojo, Ibadan',
          bedrooms: '3 ',
          bathrooms: '',
          condition: 'For Rent',
          state: 'Oyo State',
          type: 'Apartment',
          typeIcon: faBuilding,
          price: '₦400k /year',
          description: '',
          image: sample,
          video: true,
          video_link: beryl_video,
      },
      {
        name: '',
        location: 'Ologuneru, Ibadan',
        bedrooms: '3',
        bathrooms: '',
        condition: 'For Rent',
        state: 'Oyo State',
        type: 'Apartment',
        typeIcon: faBuilding,
        price: '₦600k /year',
        description: 'All rooms en-suite',
        image: sample,
        video: true,
        video_link: example_vid,
      },
      {
        name: '',
        location: 'Ohisa street, Igando',
        bedrooms: '3',
        bathrooms: '',
        condition: 'For Rent',
        state: 'Lagos State',
        type: 'Apartment',
        typeIcon: faBuilding,
        price: '₦400k /year',
        description: '',
        image: sample,
      },
  ]

  const typeListings = [
    {
      name: '',
      location: 'Ologuneru, Ibadan',
      bedrooms: '3',
      bathrooms: '',
      condition: 'For Rent',
      state: 'Oyo State',
      type: 'Apartment',
      typeIcon: faBuilding,
      price: '₦600k /year',
      description: 'All rooms en-suite',
      image: sample,
          video: true,
          video_link: example_vid,
    },
    {
        name: '',
        location: 'Aroro, Beryl, Basorun Ojo, Ibadan',
        bedrooms: '3 ',
        bathrooms: '',
        condition: 'For Rent',
        state: 'Oyo State',
        type: 'Apartment',
        typeIcon: faBuilding,
        price: '₦400k /year',
        description: '',
        image: sample,
            video: true,
            video_link: beryl_video,
    },
    {
      name: '',
      location: 'Ohisa street, Igando',
      bedrooms: '3',
      bathrooms: '',
      condition: 'For Rent',
      state: 'Lagos State',
      type: 'Apartment',
      typeIcon: faBuilding,
      price: '₦400k /year',
      description: '',
      image: sample,
    },
    {
      name: '',
      location: 'Along Ikoyi road, after Federal Government College FGC, Ogbomosho',
      bedrooms: '2',
      bathrooms: '',
      condition: 'For Sale',
      state: 'Oyo State',
      type: 'Apartment',
      typeIcon: faBuilding,
      price: '₦15m (asking)',
      description: '2 Bedroom and 3 Bedroom flat for Sale',
      image: sample,
    },
    {
      name: '',
      location: 'Ohisa street, igando',
      bedrooms: '3',
      bathrooms: '',
      condition: 'For Sale',
      state: 'Lagos State',
      type: 'Apartment',
      typeIcon: faBuilding,
      price: '₦35m (asking)',
      description: '4 units of 3 bedroom Flats',
      image: sample,
    },
    {
      name: '',
      location: 'Off Elewuro, Festac, Akobo, Ibadan',
      bedrooms: '',
      bathrooms: '',
      condition: 'For Sale',
      state: 'Oyo State',
      type: 'Piggery farm',
      typeIcon: faTractor,
      price: '₦12m (asking)',
      description: '',
      image: sample,
      video: true,
      video_link: piggery_vid,
    },
    {
      name: '',
      location: 'Agoro, along Iletutun-elenushonsho road, Idi-ishin, Ibadan',
      bedrooms: '',
      bathrooms: '',
      condition: 'For Sale',
      state: 'Oyo State',
      type: 'Land',
      typeIcon: faVectorSquare,
      price: '₦2m (asking)',
      description: '',
      image: sample,
      video: true,
      video_link: agoro_vid,
    },
    {
      name: '',
      location: 'Oke-alayun village of Awotan, Akufo road',
      bedrooms: '',
      bathrooms: '',
      condition: 'For Sale',
      state: 'Oyo State',
      type: 'Land',
      typeIcon: faVectorSquare,
      price: '₦400k /plot',
      description: '',
      image: sample,
    },
    {
      name: '',
      location: 'Joyce-B',
      bedrooms: '15',
      bathrooms: '15',
      condition: 'For Sale',
      state: 'Oyo State',
      type: 'Hotel',
      typeIcon: faHotel,
      price: '₦250m (asking)',
      description: 'Uncompleted Hotel with 15 rooms en-suite with ample parking space',
      image: joyce_b,
    },
    {
      name: '',
      location: 'Adjacent Conoil filling station sitting on 5 plots of land for sale at Onibukun, Sange-Ota road',
      bedrooms: '',
      bathrooms: '',
      condition: 'For Sale',
      state: 'Ogun State',
      type: 'School',
      typeIcon: faSchool,
      price: '₦100m (asking)',
      description: '',
      image: sample,
    },
]

const stateListings = [
  {
    name: '',
    location: 'Ohisa street, igando',
    bedrooms: '3',
    bathrooms: '',
    condition: 'For Sale',
    state: 'Lagos State',
    type: 'Apartment',
    typeIcon: faBuilding,
    price: '₦35m (asking)',
    description: '4 units of 3 bedroom Flats',
    image: sample,
  },
  {
    name: '',
    location: 'Ohisa street, Igando',
    bedrooms: '3',
    bathrooms: '',
    condition: 'For Rent',
    state: 'Lagos State',
    type: 'Apartment',
    typeIcon: faBuilding,
    price: '₦400k /year',
    description: '',
    image: sample,
  },
  {
    name: '',
    location: 'Adjacent Conoil filling station sitting on 5 plots of land for sale at Onibukun, Sange-Ota road',
    bedrooms: '',
    bathrooms: '',
    condition: 'For Sale',
    state: 'Ogun State',
    type: 'School',
    typeIcon: faSchool,
    price: '₦100m (asking)',
    description: '',
    image: sample,
  },
  {
      name: '',
      location: 'Aroro, Beryl, Basorun Ojo, Ibadan',
      bedrooms: '3 ',
      bathrooms: '',
      condition: 'For Rent',
      state: 'Oyo State',
      type: 'Apartment',
      typeIcon: faBuilding,
      price: '₦400k /year',
      description: '',
      image: sample,
      video: true,
      video_link: beryl_video,
  },
  {
    name: '',
    location: 'Ologuneru, Ibadan',
    bedrooms: '3',
    bathrooms: '',
    condition: 'For Rent',
    state: 'Oyo State',
    type: 'Apartment',
    typeIcon: faBuilding,
    price: '₦600k /year',
    description: 'All rooms en-suite',
    image: sample,
    video: true,
    video_link: example_vid,
  },
  {
    name: '',
    location: 'Off Elewuro, Festac, Akobo, Ibadan',
    bedrooms: '',
    bathrooms: '',
    condition: 'For Sale',
    state: 'Oyo State',
    type: 'Piggery farm',
    typeIcon: faTractor,
    price: '₦12m (asking)',
    description: '',
    video: true,
    video_link: piggery_vid,
  },
  {
    name: '',
    location: 'Agoro, along Iletutun-elenushonsho road, Idi-ishin, Ibadan',
    bedrooms: '',
    bathrooms: '',
    condition: 'For Sale',
    state: 'Oyo State',
    type: 'Land',
    typeIcon: faVectorSquare,
    price: '₦2m (asking)',
    description: '',
    image: sample,
    video: true,
    video_link: agoro_vid,
  },
  {
    name: '',
    location: 'Oke-alayun village of Awotan, Akufo road',
    bedrooms: '',
    bathrooms: '',
    condition: 'For Sale',
    state: 'Oyo State',
    type: 'Land',
    typeIcon: faVectorSquare,
    price: '₦400k /plot',
    description: '',
    image: sample,
  },
  {
    name: '',
    location: 'Along Ikoyi road, after Federal Government College FGC, Ogbomosho',
    bedrooms: '2',
    bathrooms: '',
    condition: 'For Sale',
    state: 'Oyo State',
    type: 'Apartment',
    typeIcon: faBuilding,
    price: '₦15m (asking)',
    description: '2 Bedroom and 3 Bedroom flat for Sale',
    image: sample,
  },
  {
    name: '',
    location: 'Joyce-B',
    bedrooms: '15',
    bathrooms: '15',
    condition: 'For Sale',
    state: 'Oyo State',
    type: 'Hotel',
    typeIcon: faHotel,
    price: '₦250m (asking)',
    description: 'Uncompleted Hotel with 15 rooms en-suite with ample parking space',
    image: joyce_b,
  },
]

useEffect(() => {
  const body = document.querySelector('#root');

  body.scrollIntoView({
      behavior: 'smooth'
  }, 500)

}, []);

  const [editedListings, setEditedListings] = useState(propertyListings)

  

      function returnProperties() {
            return(editedListings.map((item) => {
                return(
                  <div className='property_card'>
                    <div className='property_card_image' >
                      {item.video ? <video src={item.video_link} controls style={{objectFit: 'contain', width: '100%', height: '100%', borderBottomLeftRadius: '1rem'}}></video>: <img src={item.image} alt="" />}                      
                    </div>
                    <div className='property_card_details'>
                      <div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                          <div className='location'>
                          <FontAwesomeIcon icon={item.typeIcon} fixedWidth size='2x' style={{marginRight: '1rem'}}/><h3>{item.type}</h3>
                        </div>
                        <div><h4 style={{backgroundColor: '#B24C62', color:'white', padding: '0.3rem', borderRadius: '0.5rem'}}>{item.condition}</h4></div>
                          </div>                                               
                        <div className='details'>
                         <h2>{item.location}</h2>
                         <h2>{item.state}</h2>    
                        </div>
                        <div>
                          <h2>{item.price}</h2>
                        </div>
                        <div className='room_icons'>
                          <FontAwesomeIcon icon={faBed}/><span>{item.bedrooms}</span><FontAwesomeIcon icon={faToilet}/><span>{item.bathrooms}</span>
                        </div>
                        <div>
                          <p>{item.description}</p>
                        </div> 
                      </div>
                    </div>
                  </div>
              )}))
    }

  return (
    <>
      <div className='sort_by'>
        <h2>Sort by</h2>
        <div>
          <button onClick={()=> setEditedListings(propertyListings)}>Default</button>
          <button onClick={()=> setEditedListings(statusListings)}>Status</button>
        <button onClick={()=> setEditedListings(typeListings)}>Type</button>
        <button onClick={()=> setEditedListings(stateListings)}>State</button>
        </div>
        

      </div>
    {returnProperties()}

    

    </>
  )
}

export default Properties
