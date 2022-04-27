/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      "Design and intelligently orchestrate all engagement activities across your customer journeys through a scalable, easy-to-use full stack communication platform."
  },
  {
    id: 2,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      "Design and intelligently orchestrate all engagement activities across your customer journeys through a scalable, easy-to-use full stack communication platform."
  },


  {
    id: 3,
    imgSrc: Partnership,
    altText: 'Flexible Plans',
    title: 'Flexible Plans',
    text:
      "Design and intelligently orchestrate all engagement activities across your customer journeys through a scalable, easy-to-use full stack communication platform."
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: 'Revised Modules',
    title: 'Revised Modules',
    text:
      "Design and intelligently orchestrate all engagement activities across your customer journeys through a scalable, easy-to-use full stack communication platform."
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="More features"
          title="Explore more features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
