import React, { Component } from 'react'
import Error_Image from '../Error_Image.jpg'
import styled from 'styled-components'
export default class PageNotFound extends Component {
    render() {
        return (
            <div>
                 <img src={Error_Image}  alt = "error_image"></img>
            </div>
        )
    }
}
