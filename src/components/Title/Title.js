import React from 'react'
import { Navbar } from 'react-bootstrap'
import './Title.css'
import { bounceInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    bounceInUp: {
        animationName: bounceInUp,
        animationDuration: '1s'
    }
})

const Title = props => (
    <Navbar id='navBar'>
        <Navbar.Header>
            <Navbar.Brand id='navTitle'>
                <a id='home' href="/">Super Smash Bros Pick 'Em</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Text id='result' className={css(styles.bounceInUp)}>
               {props.result}
            </Navbar.Text>
            <Navbar.Text id='scoreBoard' pullRight>Score: {props.score} | High Score: {props.highScore}</Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
)

export default Title