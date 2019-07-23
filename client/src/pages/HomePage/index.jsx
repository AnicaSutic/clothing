import React from 'react'
import './index.scss';
import Directory from '../../components/Directory';
import { HomePageContainer } from './index.styles';

export default function HomePage() {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}
