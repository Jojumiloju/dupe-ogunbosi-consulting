import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useEffect } from 'react'

import sample from '../assets/sample1.png'
import joyce_b from '../assets/Joyce_B.jpg'
import beryl from '../assets/Beryl.jpg'
import example_vid from '../assets/3_bedroom_flat_ologuneru.mp4'
import agoro_vid from '../assets/agoro.mp4'
import piggery_vid from '../assets/piggery_farm.mp4'
import beryl_video from '../assets/beryl_video.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faBed, faToilet, faVectorSquare, faTractor, faHotel, faSchool } from '@fortawesome/free-solid-svg-icons'
import './Listings.css'

const Listings = () => {

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
        price: '₦400k /year',
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

useEffect(() => {
  const body = document.querySelector('#root');

  body.scrollIntoView({
      behavior: 'smooth'
  }, 500)

}, []);


const [editedListings, setEditedListings] = useState()
 const formik = useFormik({
  initialValues: {
    Status: 'All Status',
    Location: 'All States',
    Rooms: 'All Room-sizes'
  },
  onSubmit: values => {
    console.log(values)
    setEditedListings(
    (propertyListings.filter((item) => ((item.condition == values.Status) || (values.Status == "All Status")) && ((item.state == values.Location) || (values.Location == "All States")) && (item.bedrooms == values.Rooms || values.Rooms == "All Room-sizes"))))
  }
})

 

  function returnListings() {
    if (editedListings){
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
                          <FontAwesomeIcon icon={faBuilding} fixedWidth size='2x' /><h3>{item.type}</h3>
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
    else{
      console.log('No listings')
      console.log(editedListings)
    }
    
  }

  return (


    < >
      <div>
      <form className='search_form_Form' onSubmit={formik.handleSubmit}>
        <select name="Status" id="Status" onChange={formik.handleChange}>
          <option value="All Status" className='form_option'>All Status</option>
          <option value="For Rent">For Rent</option>
          <option value="For Sale">For Sale</option>
        </select>
      <select name="Location" id="Location" onChange={formik.handleChange}>
        <option value="All States">All States</option>
        <option value="Oyo State">Oyo State</option>
        <option value="Lagos State">Lagos State</option>
        <option value="Ogun State">Ogun State</option>
        <option value="Osun State">Osun State</option>
      </select>
      <select name="Rooms" id="Rooms" onChange={formik.handleChange}>
        <option value="All Rooms-sizes">All Room-sizes</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button type="submit" >Submit</button>
    </form>
      </div> 

    {returnListings()}

      {/* <div className='property_card'>
        <div className='property_card_image' >
          <img src={sample} alt="" />
        </div>
        <div className='property_card_details'>
          <div>
            <button disabled>{condition}</button>
            <h2>Home in Merrick Way</h2>
            <div className='location'>
              <img src="" alt="location icon" /><a href="">Merrick Way, Miami, FL 33134, USA</a>
            </div>            
            <div className='details'>
            <div style={{backgroundColor: 'white', }}>
                <img src="" alt="bed" />{noBedrooms}
              </div>
              <div>
                <img src="" alt="bath"/>
                {noBathrooms}
              </div>
              
              <div>
                <img src="" alt="area" />
              {area}
                </div>            
            </div>
          </div>
          <div className='built'>
            <p>Built {dateBuilt}</p>
            <p>${price}</p>
          </div>
        </div>
      </div> */}
    </>
  )
}

//  import React, { useState } from 'react';

// function Listings() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);

//   // This would be your actual data
//   const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];

//   // Calculate the index of the first and last items on the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   // Get the items for the current page
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   const handlePageChange = (event) => {
//     setCurrentPage(Number(event.target.value));
//   };

//   return (
//     <>
//       <div>
//         {currentItems.map((item, index) => (
//           <p key={index}>{item}</p>
//         ))}
//       </div>
//       <div>
//         <select value={currentPage} onChange={handlePageChange}>
//           {[...Array(totalPages)].map((page, i) => 
//             <option key={i} value={i + 1}>
//               {i + 1}
//             </option>
//           )}
//         </select>
//       </div>
//     </>
//   );
// }

// export default Listings;
export default Listings