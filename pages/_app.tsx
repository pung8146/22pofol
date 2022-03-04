import React from 'react';
import { AppProps } from 'next/app';
// import { InitStyle } from "styles/global-styles";
import { GlobalStyle } from "../styles/global-style";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyle />
      		<Component {...pageProps} />
		</>
	);
};

export default App;