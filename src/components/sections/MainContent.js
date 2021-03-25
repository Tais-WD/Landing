import React from 'react';
import styled from 'styled-components';
import BannerSection from "./BannerSection";
import FormSection from "./FormSection";
import IntroSection from "./IntroSection";
import ProcessingSection from "./ProcessingSection";
import TermsSection from "./TermsSection";

const Main = styled.main`
 overflow: hidden;
`;

const MainContent = () => {
    return (
        <Main>
           <IntroSection/>
           <ProcessingSection/>
           <BannerSection/>
           <TermsSection/>
           <FormSection/>
        </Main>
    )
}

export default MainContent;