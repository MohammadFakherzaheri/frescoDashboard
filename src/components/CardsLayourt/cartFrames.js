import React from "react";
import {CardFrame} from "./style";
import propTypes from 'prop-types'
import {SubHeaders} from "../headers/headers";




const Cards = props => {
    const {
        title,
        children,

        size,
        headless,
        caption,
 
        bodyStyle,
        headStyle,
        border,
        bodypadding,
      } = props;
      return(
    <>
        {!headless ? (
            <CardFrame
                title={title}
                size={size}
                bodyStyle = {bodyStyle}
                bordered = {border}
                bodypadding = {bodypadding && bodypadding}
                headStyle = {headStyle}
               >
                    {children}
               </CardFrame>
        ):(
            <CardFrame 
            size={size}
            bodypadding = {bodypadding && bodypadding}
            style = {{width:"100%",background:"#ecccec"}}
            bordered = {border}
            >
                {title && <SubHeaders as="h4">{title}</SubHeaders>}
                {caption && <p>{caption}</p>}
                {children}
            </CardFrame>
        )}
    
    </>
)
}

Cards.defaultProps = {
    border:false,
}

Cards.propTypes = {
    title: propTypes.oneOfType([propTypes.string, propTypes.object , propTypes.node]),
    size : propTypes.string,
    bodyStyle: propTypes.object,
    headStyle : propTypes.object,
    isbutton: propTypes.node,
    headless : propTypes.bool,
    border:propTypes.bool,
    caption:propTypes.string,
    bodypadding: propTypes.string,
    children: propTypes.oneOfType([propTypes.object,propTypes.string, propTypes.node]),
}
export{Cards}