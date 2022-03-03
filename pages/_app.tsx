import React from 'react';
import { AppProps } from 'next/app';
import { InitStyle } from "styles/global-styles";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<InitStyle />
      		<Component {...pageProps} />
		</>
	);
};

export default App;