import React from 'react'
import './GameCard.css'
import { slideInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    slideInUp: {
        animationName: slideInUp,
        animationDuration: '1s'
    }
})

const GameCard = props => (
        <div className='card'>
            <div className='imgContainer' onClick={() => props.pickBro(props.id)}>
                <img className={css(styles.slideInUp)} alt={props.id} src={props.img} />
            </div>
        </div>
)

export default GameCard