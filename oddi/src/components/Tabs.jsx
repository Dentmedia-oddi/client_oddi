import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import CookiesPolicy from './CookiesPolicy';
import DataProtectionPolicy from './DataProtectionPolicy'

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === tab ? ' text-white' : 'bg-[#0076A5]'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="px-4 py-2 bg-white rounded-b-lg mt-4">
        {activeTab === tabs[0] && <PrivacyPolicy/>}
        {activeTab === tabs[1] && <CookiesPolicy/>}
        {activeTab === tabs[2] && <DataProtectionPolicy/>}

      </div>
    </div>
  );
};

export default Tabs;
