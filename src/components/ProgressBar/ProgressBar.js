/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;
const BarOuter = styled.div`
	position: relative;
	width: 370px;
	height: ${(props) => {
		if (props.size === 'large') {
			return '24px';
		} else if (props.size === 'medium') {
			return '12px';
		} else {
			return '8px';
		}
	}};
	box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
	border-radius: 8px;
	background: ${COLORS.transparentGray15};
`;

const BarInner = styled.div`
	position: absolute;
	margin: ${(props) => (props.size !== 'large' ? '0px' : '4px')};
	width: calc(
		${(props) => props.progress}% -
			${(props) => (props.size === 'large' ? '8px' : '0px')}
	);
	height: ${(props) => (props.size !== 'large ' ? '100%' : 'calc(100% - 8px)')};
	background-color: ${COLORS.primary};
	padding: 4px;
	border-radius: 4px
		${(props) => (props.progress === 100 ? '4px 4px' : '0px 0px')} 4px;
`;

const Label = styled.strong`
	min-width: 100px;
	text-align: left;
`;

const ProgressBar = ({ value, size = 'large' }) => {
	let limitedValue = value > 100 ? 100 : value;

	return (
		<Wrapper>
			<Label>{value}</Label>
			<BarOuter
				size={size}
				role="progressbar"
				aria-valuenow={limitedValue}
				aria-valuemin="0"
				aria-valuemax="100"
			>
				<BarInner progress={limitedValue} size={size}></BarInner>
			</BarOuter>
		</Wrapper>
	);
};

export default ProgressBar;
