/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                info: '#A0AEC0',
                border: '#E2E8F0',
                grey800: '#2D3748',
                grey600: '#718096',
                grey500: '#A0AEC0',
                grey400: '#CBD5E0',
                accent: '#0066FF',
                secondary: '#DEEBFC',
                halfaccent: '#3385FF',
                success: '#66CB9F',
                error: '#F16063',
                warning: '#FFD363',
                pressSecondary: '#76ACFB',
            },
            boxShadow: {
                sm: '0px 3px 8px -1px rgba(50, 50, 71, 0.05),0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
            },
        },
        fontFamily: {
            openSans: ['OpenSans'],
            inter: ['Inter'],
            raleway: ['Raleway'],
        },
        fontSize: {
            s1: '36px',
            s2: '32px',
            s3: '24px',
            s4: '18px',
            s5: '16px',
            s6: '14px',
            s7: '12px',
            s8: '10px',
        },
    },
    plugins: [],
}
