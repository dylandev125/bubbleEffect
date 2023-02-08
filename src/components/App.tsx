import React, { FC } from 'react';
import { css } from '@emotion/css';
import { publicPath } from '../modules/utils';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';

export const App: FC = () => {
	return (
		<div className={styles.container}>
			<TCanvas />
			
		</div>
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
	`
}
