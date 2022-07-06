import { createGlobalStyle } from 'styled-components';

export const theme = {
	colors: {
		subtitle: 'rgba(0, 0, 0, 0.6)',
		cardBg: '#E7FAFE',
		badgeBg: 'rgba(0, 0, 0, 0.05)',
		blueToWhiteBg:
			'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%)',
		blue: '#e7f9fd',
	},
	fontFamily: 'Inter',
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: '${(props) => props.theme.fontFamily}', sans-serif;
    }
`;
