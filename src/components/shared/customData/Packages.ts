import Place1 from "src/assets/images/Bitmap.png";
import Place from "src/assets/images/packageDatial/palce1.png";
import MainImage from "src/assets/images/packageDatial/MainBannerImage.png";
export const INCLUDES = [
  "Flights Spain - Cairo / Aswan - Spain.",
  "Domestic flight Aswan - Cairo.",
  "3 nights in Cairo and 4 nights in cruise.",
  "7 Breakfasts, 4 Lunches, 4 Dinners.",
  "Visits and entrance fees according to itinerary.",
];

export const NOT_INCLUDES = [
  "Flights Spain - Cairo / Aswan - Spain.",
  "Domestic flight Aswan - Cairo.",
  "3 nights in Cairo and 4 nights in cruise.",
  "Domestic flight Alias - Tuni.",
  "Domestic flight Famaguhsta - Cairo.",
];

export const photos: any = [
  {
      source: {
          regular: '/static/images/heroImage.jpg',
          thumbnail: '/static/images/heroImage.jpg'
      }
  },
  {
      source: {
          regular: '/static/images/Bitmap1.jpg',
          thumbnail: '/static/images/Bitmap1.jpg'
      }
  },
  {
      source: {
          regular: '/static/images/Bitmap2.jpg',
          thumbnail: '/static/images/Bitmap2.jpg'
      }
  },
  {
      source: {
          regular: '/static/images/Bitmap1.jpg',
          thumbnail: '/static/images/Bitmap1.jpg'
      }
  }
];

export const ITINERARY_SCHEDULES = [
  {
    title: "Day 1: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 2: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: MainImage,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 3: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 4: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 5: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 6: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place,
    flightInfo: "Flight Spain - Cairo",
  },
];

const PackagesData: any = [
    {
      _id: 1,
      name: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      duration: {days: 7, nights: 8},
      release: 2,
      remarks: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      placeImage: Place1,
      price_model: 'commision',
      price_from: { original: {amount: 20, currency: 'EUR'}, discount: {amount: 20, currency: 'EUR'} },
      heading: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      description: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
      packages: 10,
      type: "Circuit",
      price: 624,
      id:1,
      currency : '€',
      photos:photos,
      includes: INCLUDES,
      notIncludes : NOT_INCLUDES
    },
    {
      _id: 2,
      name: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      duration: {days: 7, nights: 8},
      release: 2,
      remarks: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      placeImage: Place1,
      price_model: 'commision',
      price_from: { original: {amount: 20, currency: 'EUR'}, discount: {amount: 20, currency: 'EUR'} },
      heading: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      description: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
      packages: 10,
      type: "Circuit",
      price: 624,
      id:2,
      currency : '€',
      photos:photos,
      includes: INCLUDES,
      notIncludes : NOT_INCLUDES
    },
    {
      _id: 3,
      name: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      duration: {days: 7, nights: 8},
      release: 2,
      remarks: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      placeImage: Place1,
      price_model: 'commision',
      price_from: { original: {amount: 20, currency: 'EUR'}, discount: {amount: 20, currency: 'EUR'} },
      heading: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      description: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
      packages: 10,
      type: "Circuit",
      price: 624,
      id:3,
      currency : '€',
      photos:photos,
      includes: INCLUDES,
      notIncludes : NOT_INCLUDES
    },
    {
      _id: 4,
      name: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      duration: {days: 7, nights: 8},
      release: 2,
      remarks: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      placeImage: Place1,
      price_model: 'commision',
      price_from: { original: {amount: 20, currency: 'EUR'}, discount: {amount: 20, currency: 'EUR'} },
      heading: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
      description: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
      packages: 10,
      type: "Circuit",
      price: 624,
      id:4,
      currency : '€',
      photos:photos,
      includes: INCLUDES,
      notIncludes : NOT_INCLUDES
    },
];

export default PackagesData;



