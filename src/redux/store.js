

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    apartments: [
    {Home_in_Merrick_Way:{
        name: 'Home in Merrick Way',
        location: 'Merrick Way, Maimi, FL 33134, USA',
        price: 540000,
        bedrooms: 3,
        bathrooms: 3,
        gararge: 2,
        year_built: 2018,
        area: 4300,
        features: [],
        condition: 'For Sale',
    }},
    {Villa_in_Coral_Gables: {
        name: "Villa in Coral Gables",
        location: "Deering Bay Drive, Coral Gables, FL 33158, USA",
        price: 825000,
        bedrooms: 3,
        bathrooms: 3.5,
        garage: 2,
        year_built: 2019,
        area: 3500,
        features: [],
        condition: 'For Sale', 
    }},
    {Villa_on_Hollywood_Boulevard: {
        name: "Villa on Hollywood Boulevard",
        location: "Hatteras Lane, Hollywood, FL 33019, USA",
        price: 740000,
        bedrooms: 3,
        bathrooms: 4,
        garage: 2,
        year_built: 2018,
        area: 4350,
        features: [],
        condition: 'For Sale',
    }},
    {Villa_on_Grand_Avenue: {
        name: "Villa on Grand Avenue",
        location: "CocoWalk, 3015 Grand Avenue, Miami, USA",
        price: "4,700 Monthly",
        bedrooms: 4,
        bathrooms: 4,
        gararge: 2,
        year_built: 2018,
        area: 9350,
        features: [],
        condition: "For Sale",
    }},
    {Home_in_Coral_Gables: {
        name: "Home in Coral Gables",
        location: "Jeronimo Drive, Coral Gables, FL 33146, USA",
        price: 850000,
        bedrooms: 4,
        bathrooms: 4.5,
        garage: 2,
        year_built: 2019,
        area: 3800,
        features: [],
        condition: "For Sale",
    }},
    {Luxury_Apartment: {
        name: "Luxury Apartments",
        locations: "435 Southwest 12th Avenue, Miami, FL 33130, USA",
        price: "2,500 Monthly",
        bedrooms: 2,
        bathrooms: 2,
        garage: 1,
        year_built: 2019,
        area: 1650,
        features: [],
        condition: "For Rent",
    }},
    {Single_Home_at_Florida: {
        name : "Single Home at Florida 5, Pinecrest",
        location: "Pinecrest, Miami_Dade County, Florida",
        price: 580000,
        bedrooms: 4,
        bathrooms: 4,
        garage: 2,
        year_built: 2020,
        area: 5500,
        features: [],
        condition: "For Rent",
    }}
],
    
};

const itemsSlice = createSlice({
    name: 'itemsSlice',
    initialState,
    // reducers: {
    //     addItem: (state, action) => {
    //         state.items.push(action.payload);
    //     },
    //     setDetails: (state, action) => {
    //         state.details = action.payload;
    //     },
    //     updateDetail: (state, action) => {
    //         const { key, value } = action.payload;
    //         state.detials[key] = value;
    //     }
    //}
})


// export const { addItem, setDetials, updateDetail} = itemsSlice.actions;
export default itemsSlice.reducer;