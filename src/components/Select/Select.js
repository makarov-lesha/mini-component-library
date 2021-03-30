import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<NativeSelect value={value} onChange={onChange}>
				{children}
			</NativeSelect>
			<DesignedSelect>
				{displayedValue}
				<IconWrapper>
					<Icon id="chevron-down" label="Select component" size={24} />
				</IconWrapper>
			</DesignedSelect>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

const NativeSelect = styled.select`
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
`;

const DesignedSelect = styled.div`
	background-color: ${COLORS.transparentGray15};
	color: ${COLORS.gray700};
	padding: 12px 52px 12px 16px;
	border-radius: 8px;
	width: 100%;

	${NativeSelect}:focus + & {
		outline: 1px dotted blue;
		outline: 5px auto -webkit-focus-ring-color;
	}

	${NativeSelect}:hover + & {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 10px;
	right: 6px;
	pointer-events: none;
`;

export default Select;
