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
                    '50': '#e6e0f2',
                    '100': '#cdc1e5',
                    '200': '#b3a1d8',
                    '300': '#9981cb',
                    '400': '#7f61be',
                    '500': '#53108c',
                    '600': '#4f0f8c',
                    '700': '#3b0b66',
                    '800': '#270740',
                    '900': '#13031a',
                },
            },
        },
    },

    plugins: [forms],
};
