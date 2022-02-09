/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
import type { FC } from 'react';
import React from 'react';
import StyledDesktop from 'styles/components/system/StyledDesktop';

const Desktop: FC = ({ children }) => <StyledDesktop>{children}</StyledDesktop>;

export default Desktop;
