import React from 'react'

export default function WarningBanner(props) {
    if (! props.warn === true) return null
    else return (
        <div className="banner warning">
            <b>Warning! </b> {props.message}
        </div>
    )

}