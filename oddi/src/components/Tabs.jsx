import React, { useState } from 'react';
import PrivacyPolicy from "./PrivacyPolicy";
import CookiesPolicy from "./CookiesPolicy";
// import DataProtectionPolicy from "./DataProtectionPolicy";
// import FormDataProtectionPolicy from "./FormDataProtectionPolicy";
import DataResponsabilityPolicy from "./DataResponsabilityPolicy";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

    // Function to handle the redirection to the Cookies tab
    const handleRedirectToCookies = () => {
      setActiveTab("Cookies");
    };

    // Function to handle the redirection to the Privacy policy tab
    // const handleRedirectToPrivacyPolicy = () => {
    //   setActiveTab("Privacidad");
    // };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2  ${
              activeTab === tab ? ' text-[#1DCAD3] font-bold underline' : 'text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="px-4 py-2 bg-white rounded-b-lg mt-4">
        {activeTab === tabs[0] && <PrivacyPolicy redirectToCookies={handleRedirectToCookies} />}
        {activeTab === tabs[1] && <CookiesPolicy />}
        {/* {activeTab === tabs[2] && <DataProtectionPolicy redirectToCookies={handleRedirectToCookies} />}
        {activeTab === tabs[3] && <FormDataProtectionPolicy redirectToPrivacyPolicy={handleRedirectToPrivacyPolicy} />} */}
        {activeTab === tabs[2] && <DataResponsabilityPolicy />}
      </div>
    </div>
  );
};

export default Tabs;

