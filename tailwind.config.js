/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'color-info': '#A0AEC0',
                'color-border': '#E2E8F0',
                'color-grey800': '#2D3748',
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
