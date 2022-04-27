/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

// import FeatureThumb from 'assets/core-feature.png';
import FeatureThumb from 'assets/account.jpg';
//import shapePattern from 'assets/shape-pattern2.png';
import shapePattern from 'assets/group.png';


const data = {
  subTitle: 'Core features',
  title: 'Labour costs made simple',
  description:
    'Our software helps you get a handle on employee costs and how much money your projects are making. Helps track project expenses, income, time and labour.',
  btnName: 'Start Free Trial',
  btnURL: '#',
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
      borderRadius: "7px"
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -115,
    right: -135,
    zIndex: -1,

    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
