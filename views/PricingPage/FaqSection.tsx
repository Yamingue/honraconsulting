import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Question fréquemment posée</SectionTitle>
      <Accordion title="honraconsulting - nous offrons des services en consulting ?">
      depuis 20 ans, honraconsulting est un cabinet de conseil unique à intervenir sur tous les problèmes complexes qui se posent dans les entreprises : organisation, restructuration, réorganisation.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
