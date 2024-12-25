import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Bricolage Grotesque', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                classydog: {
                    50: '#fdba74',
                    100: '#7249a5',
                    200: '#623099',
                    300: '#53108c',
                    400: '#470c79',
                    500: '#3b0967',
                    600: '#300655',
                    700: '#300655',
                    800: '#300655',
                    900: '#300655',
                },
                secondary: {
                    50: '#f5c8d1',
                    100: '#f4c1cc',
                    200: '#f2bac6',
                    300: '#f2bac6',
                    400: '#d2a1ac',
                    500: '#b48992',
                    600: '#b48992',
                    700: '#b48992',
                    800: '#b48992',
                    900: '#b48992',
                },
                warning: '#ffdd80',
                error: '#d81e5b'
            },
        },
    },

    plugins: [forms],
};
