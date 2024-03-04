/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'color-info': '#A0AEC0',
                'color-border': '#E2E8F0',
                'color-grey800': '#2D3748',
                'color-grey600': '#718096',
                'color-grey500': '#A0AEC0',
                'color-grey400': '#CBD5E0',
                'color-accent': '#0066FF',
                'color-secondary': '#DEEBFC',
                'color-halfaccent': '#3385FF',
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
