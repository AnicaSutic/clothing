import React from 'react'
import './index.scss';
import Directory from '../../components/Directory';
import { HomePageContainer } from './index.styles';

export default function HomePage() {
     //throw Error; //for check when error is thrown
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}
