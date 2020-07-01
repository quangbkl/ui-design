import FlightResultScreen from '../screens/home/FlightResult/FlightResultScreen';
import FlightTicketScreen from '../screens/home/FlightTicket/FlightTicketScreen';

const appRoutes = {
    AUTH: 'Auth',
    MAIN: 'Main',

    // AUTH
    WALKTHROUGH: 'Walkthrough',
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Sign Up',
    RESET_PASSWORD: 'Reset Password',

    // MAIN
    HOME: 'Home',
    BOOKING: 'Booking',
    NEWS: 'News',
    ACCOUNT: 'Account',

    // HOME
    SEARCH_HOTEL: 'Search Hotel',
    HOTELS: 'Hotels',
    HOTEL_DETAIL: 'Hotel Detail',
    HOTEL_SEARCH: 'Hotel Search',
    SELECT_PROVINCE: 'Select Province',
    PREVIEW_GGMAP: 'Preview GGMap',
    HOTEL_FILTERING: 'Hotel Filtering',
    HOTEL_FILTERING_ADVANCE: 'Hotel Filtering Advance',
    HOTEL_ROOM: 'Hotel Room',
    HOTEL_GALLERY: 'Hotel Gallery',
    BOOKINGV2: 'BookingV2',
    BOOKING_AUTHENTICATE: 'Booking Authenticate',
    BOOKING_TOUR_AUTHENTICATE: 'Booking Tour Authenticate',
    FLIGHT_SEARCH: 'Flight Search',
    SELECT_FLIGHT: 'Select Flight',
    FLIGHT_RESULT: 'Flight Result',
    FLIGHT_SUMMARY: 'Flight Summary',
    FLIGHT_TICKET: 'Flight Ticket',
    PREVIEW_BOOKING: 'Preview Booking',
	BOOKING_TOUR_V2: 'BookingTourV2',
	
	SEARCH_TOUR: 'Search Tour',
    TOURS: 'Tours',
    TOUR_DETAIL: 'Tour Detail',
    TOUR_OPEN: 'Tour Open',

    // BOOKING
    BOOKING_DETAIL: 'Booking Detail',

    // NEWS
    POSTS: 'Posts',
    POST_DETAIL: 'Post Detail',

    // ACCOUNT
    PROFILE_SETTING: 'Profile Setting',
    PROFILE_EDIT: 'Profile Edit',
    CHANGE_PASSWORD: 'Change Password',
    PROFILE_CHANGE_PASSWORD: 'Profile Change Password',
    PROFILE_NOTIFICATIONS: 'Profile Notifications',
    PROFILE_INFO: 'Profile Info',
    PROFILE_CURRENCY: 'Profile Currency',
    PROFILE_LANGUAGE: 'Profile Language',
    PROFILE_THEME: 'Profile Theme',
    PROFILE_FONT: 'Profile Font',
    PROFILE_THEME_MODE: 'Profile Theme Mode',

    // REST
    CHECKOUT_REVIEW: 'Checkout Review',
    CHECKOUT: 'Checkout',
    PAYMENT_METHODS: 'Payment Methods',
    PAYMENT_METHOD: 'Payment Method',
	BOOKING_HOTEL: 'Booking Hotel'
};

export default appRoutes;
