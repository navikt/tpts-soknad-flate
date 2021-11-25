import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Timeline from './details/Timeline';
import { Tab, Tabs } from '../components/Tabs';
import CentreContent from './details/CentreContent';

const DetailsPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <Timeline />
      <div className="flex flex-col items-start p-40">
        <div className="self-stretch flex border-b-2 border-gray-200 mb-16">
          <Tabs>
            <Tab>Utbetaling</Tab>
            <Tab>Inngangsvilkår</Tab>
          </Tabs>
        </div>
        <CentreContent />
      </div>
    </div>
  );
};

export default DetailsPage;
