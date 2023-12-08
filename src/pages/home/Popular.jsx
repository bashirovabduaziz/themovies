import React, { useState } from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import SwitchTabs from '../../components/SwitchTabs';
import useFetch from '../../hooks/useFetch';
import Carousel from '../../components/Carousel';

const Popular = () => {
  const [endpoint, setEndpoint] = useState('movie');

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
  };

  return (
    <div className='relative mb-[70px]'>
      <ContentWrapper>
        <div className='flex items-center justify-between mb-4'>
          <span className='text-2xl text-white font-normal'>
            What's Popular
          </span>
          <SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
