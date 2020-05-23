import {Text} from '../../components';
import React from 'react';

export default {
    auth: {
        walkthrough: {},
        sign_in: {},
        sign_up: {},
        reset_password: {}
    },
    main: {
        home: {},
        booking: {
            booking: 'Booking',
            change_to: 'Change to %{lang}',
            book_room: 'Book now',
	        booking_history: 'Booking History',
	        payment_method: {
		        pay_now: 'Pay now'
	        }
        },
        news: {},
        account: {
            profile_setting: {
                settings: 'Settings',
                language: 'Language',
                theme: 'Theme',
                font: 'Font',
                theme_mode: 'Theme Mode',
                reminders: 'Reminders',
                app_version: 'App Version',
            },
            profile_language: {
                change_language: 'Change Language',
            }
        }
    },
    shared: {
        apply: 'Apply',
        cancel: 'Cancel',
        dark: 'Dark',
        light: 'Light',
        save: 'Save'
    },
    locale: {
        en: 'English',
        vi: 'Vietnamese'
    }
};
