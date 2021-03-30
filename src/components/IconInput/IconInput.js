import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
	small: {
		fontSize: 14,
		iconSize: 16,
		borderThickness: 1,
		height: 24,
	},
	large: {
		fontSize: 18,
		iconSize: 24,
		borderThickness: 2,
		height: 36,
	},
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
	const styles = STYLES[size];

	return (
		<Wrapper style={{ '--fontSize': styles.fontSize + 'px' }}>
			<Input
				style={{
					'--width': width + 'px',
					'--height': styles.height + 'px',
					'--thickness': styles.borderThickness + 'px',
				}}
				{...delegated}
			/>
			<IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
				<Icon size={styles.iconSize} id={icon} />
			</IconWrapper>
			<VisuallyHidden>{label}</VisuallyHidden>
		</Wrapper>
	);
};

const Wrapper = styled.label`
	position: relative;
	display: block;
	height: var(--height);
	font-size: var(--fontSize);
`;

const Input = styled.input`
	height: var(--height);
	width: var(--width);
	font-size: inherit;
	border: none;
	/* border-bottom: 1px solid black; */
	border-bottom: var(--thickness) solid black;
	padding-left: var(--height);
	color: ${COLORS.gray700};
	${Wrapper}:hover & {
		color: ${COLORS.black};
	}
	&:focus {
		outline: 2px solid #4374cb;
		outline-offset: 5px;
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	height: var(--size);
	${Wrapper}:hover & {
		color: ${COLORS.black};
	}
`;

export default IconInput;
