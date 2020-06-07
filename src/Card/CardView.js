import React, { Component } from 'react'

import { StyledCard, Title, Cardtext, Delta } from '../Card/Card'

export default class CardView extends Component {
    render() {
        const { data, title, deltadata, color, textcolor } = this.props
        return (

            <StyledCard

                color={color}
                className="card text-center" >
                <Title>{title}</Title>
                <Cardtext textcolor={textcolor} >{data}</Cardtext>
                {(deltadata) ? <Delta textcolor={textcolor}>
                    &#x2B;{deltadata}
                </Delta> : null}

            </StyledCard>
        )
    }
}

