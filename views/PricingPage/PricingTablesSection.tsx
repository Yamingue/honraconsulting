import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Un service pour accompagner votre entreprise dans un large éventail de préoccupations</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="S"
          description="Essayez-nous gratuitement"
          benefits={['2 semaine offert']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="M"
          description="Idéal pour les particuliers"
          benefits={['3 tache la semaine', 'conseil illimité']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="XL"
          description="Idéal pour les VIP"
          benefits={[
            'Revue',
            'classification',
            'disponible 24/24',
          ]}
        >
          $79<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
