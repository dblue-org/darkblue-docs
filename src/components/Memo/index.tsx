import React, {ReactNode} from 'react';
import {Icon} from '@iconify/react';
import MDXContent from "@theme/MDXContent";

export enum MemoTheme {
    default = 'memo-theme-daybreak',
    dust = 'memo-theme-dust',
    volcano = 'memo-theme-volcano',
    sunset = 'memo-theme-sunset',
    calendula = 'memo-theme-calendula',
    sunrise = 'memo-theme-sunrise',
    lime = 'memo-theme-lime',
    polar = 'memo-theme-polar',
    cyan = 'memo-theme-cyan',
    geek = 'memo-theme-geek',
    purple = 'memo-theme-purple',
    magenta = 'memo-theme-magenta',
    gray = 'memo-theme-gray',
    dark = 'memo-theme-dark',
}

export interface MemoProps {
    children?: ReactNode,
    title?: string | ReactNode,
    theme?: MemoTheme | string,
    icon?: string
}

export default function Memo(props: MemoProps) {
    const theme = props.theme ? MemoTheme[props.theme] : MemoTheme.default
    const iconName = props.icon ? props.icon : 'twemoji:memo'
    return (<div className={`memoContainer ${theme}`}>
        <div className="memo-title">
            <Icon icon={iconName} height="32"/>
            <span className={'title-text'}>{props.title}</span>
        </div>
        <div className="bodyContainer">
            {props.children}
        </div>
    </div>);
}