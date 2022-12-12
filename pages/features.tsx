import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
// import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Service 1.',
    description:
      'Nos professionnels interviennent sur des études, des missions, et des projets pour les différents secteurs',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Service 2',
    description:
      'Participation à la formation, élaboration de stratégies, contrôles et réflexions stratégiques',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Service 3',
    description:
      `La qualité de notre conseil augmente, ce qui génère plus de satisfactions. Cela crée une fidélité et une relation d'une durée plus longue.`,
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Service 4',
    description:
      'Nos consultants exercent toute leur passion au service de votre réussite.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Service 5',
    description:
      `En savoir plus sur les activités et besoins d'une entreprise avant de faire appel à un consultant.`,
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Service 6',
    description:
      `Nous permettons à nos clients de s'investir dans ce qu'ils savent faire de mieux: créer`,
  },
  // {
  //   imageUrl: '/grid-icons/asset-7.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-8.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-9.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
];

export default function FeaturesPage() {
  return (
    <Page title="Nos services" description="Nos activités disponible en consulting.">
      <Wrapper>
        <SectionTitle>Un service pour accompagner votre entreprise dans un large éventail de préoccupations</SectionTitle>
        {/* <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" /> */}
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
