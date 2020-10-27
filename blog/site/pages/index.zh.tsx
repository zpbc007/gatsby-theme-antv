import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Companies from '@antv/gatsby-theme-antv/site/components/Companies';
import Features from '@antv/gatsby-theme-antv/site/components/Features';
import Cases from '@antv/gatsby-theme-antv/site/components/Cases';
import BannerSVG from '@antv/gatsby-theme-antv/site/components/BannerSVG';

const IndexPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO title={t('peng & yifei blog')} lang={i18n.language} />
      {/* <Banner
        // coverImage={coverImage}
        coverImage={<BannerSVG />}
        title={t('让数据栩栩如生')}
        description={t(
          'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        )}
        className="banner"
        buttons={bannerButtons}
        showGithubStars={false}
        video="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/file/A*PDpiR4U2oFEAAAAAAAAAAABkARQnAQ"
        onCloseVideo={() => {
          console.log('close'); // eslint-disable-line no-console
        }}
        onPlayVideo={() => {
          console.log('paly'); // eslint-disable-line no-console
        }}
      />
      <Features
        id="features"
        features={features}
        title="我们的优势"
        style={{ width: '100%' }}
      />
      <Features features={features} style={{ width: '100%' }} />
      <Cases cases={cases} />
      <Companies title={t('合作公司')} companies={companies} /> */}
      1123
      <div>qqqqqqqqqq</div>
    </>
  );
};

export default IndexPage;
