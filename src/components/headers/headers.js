import React from "react";
import proptypes from 'prop-types'
import {PageHeaderStyle} from './style'

const  SubHeaders = props =>{
    const {className,title,subtitle,buttons,bgColor,ghost,routes} = props

    return(
        <>
            <div style={{
                backgroundColor : '#0e0e0e'
            }}>
                <PageHeaderStyle 
                style={{
                    backgroundColor: '#0e0e0e',
                }}
                className ={className}
                title = {title}
                subtitle = {subtitle}
                breadcrumb={routes && { routes }}
                extra = {buttons}
                ghost = {ghost}
                />
                
            </div>
        
        </>
    );
};
SubHeaders.proptypes = {
    title: proptypes.oneOfType([proptypes.string,proptypes.object]),
    subtitle : proptypes.oneOf([proptypes.string,proptypes.object]),
    bgColor : proptypes.string,
    routes: proptypes.arrayOf(proptypes.object),
    className : proptypes.string,
    ghost : proptypes.bool,
    buttons : proptypes.array,
}
export {SubHeaders};
