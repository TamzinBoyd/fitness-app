// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryBlack: '#585758',
                primaryWhite: '#FFFFFF',
                primaryBlue: '#9AB7D3',
                secondaryBlue: '#304E6B',
                pastelOne: '#F5C8AB',
                pastelTwo: '#DFCCF1',
                pastelThree: '#F5D2D3',
                pastelFour: '#BDD0C4'
            }
        }
    },
    plugins: [require('daisyui')]
};
