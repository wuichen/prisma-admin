import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
// import { withApollo } from 'helper/apollo';
import StoreNav from 'Components/StoreNav/StoreNav';
import Carousel from 'Components/Carousel/Carousel';
import Banner from 'containers/Banner/Banner';
import Sidebar from 'containers/Sidebar/Sidebar';
import Products from 'containers/Products/ProductsFood';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from 'styled/pages.style';
// Static Data Import Here
import OFFERS from 'data/offers';
import BannerImg from 'image/food.png';
import storeType from 'constants/storeType';
import { SEO } from 'Components/seo';

const PAGE_TYPE = 'restaurant';

function HomePage({ deviceType, platform }) {
  const { query } = useRouter();
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: 'smooth',
      });
    }
  }, [query]);

  return (
    <>
      <SEO title="Restaurant - PickBazar" description="Restaurant Details" />
      <Modal>
        <Banner intlTitleId="foodsTitle" intlDescriptionId="foodsSubTitle" imageUrl={BannerImg} />

        {deviceType.desktop ? (
          <>
            <MobileCarouselDropdown>
              <StoreNav items={storeType} />
              <Sidebar type={platform.slug} deviceType={deviceType} />
            </MobileCarouselDropdown>
            {/* <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection> */}
            <MainContentArea>
              <SidebarSection>
                <Sidebar type={platform.slug} deviceType={deviceType} />
              </SidebarSection>
              <ContentSection>
                <div ref={targetRef}>
                  <Products type={platform.slug} deviceType={deviceType} fetchLimit={16} />
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <StoreNav items={storeType} />
            <Sidebar type={platform.slug} deviceType={deviceType} />
            {/* <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection> */}
            <ContentSection style={{ width: '100%' }}>
              <Products type={platform.slug} deviceType={deviceType} fetchLimit={16} />
            </ContentSection>
          </MainContentArea>
        )}
      </Modal>
    </>
  );
}

export default HomePage;
