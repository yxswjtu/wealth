import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	height: 66px;	
	background-color: #1C2B36;
	width: 100%;
	position: relative
    box-shadow: 2px 0 3px rgba(0,0,0,.5);
    min-width: 320px;
    padding: 0 32px 0 40px;
    box-sizing: border-box;
    top: 0px;
    left: 0px;
`

export const Logo = styled.a`
	color: #fff;
    display: block;
    font-size: 24px;
    font-family: Roboto,sans-serif;
    white-space: nowrap;
    float: left;
    line-height: 60px;
`

export const LeftSideBar = styled.ul`
	width: 180px;
    top: 66px;
    left: 0;
    z-index: 904;
    display: block;
    min-height: 100%;
    background-color: #1C2B36;
    height: 100%;
    position: fixed;
`