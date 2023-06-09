import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const PolicyPage = () => {
    return (
        <div>
            <Header activeHeading={5} />
            <Policy />
            <Footer />
        </div>
    );
};

const Policy = () => {
    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setActiveTab(0);
        } else {
            setActiveTab(tab);
        }
    };

    return (
        <div className={`${styles.section} my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Notice</h2>
            <div className="mx-auto space-y-4">
                {/* single Faq */}

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(2)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            Our Privacy Commitment
                        </span>
                        {activeTab === 2 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 2 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                Unimak Builders Supply a publicly listed corporation and in furtherance of the principles of corporate responsibility and good governance, respects and values your personal data privacy. WDI commits to safeguard the integrity, confidentiality andsecurity of the personal data that it collects, processes, uses and stores in accordance with the Data Privacy Act of 2012 (DPA) and its Implementing Rules and Regulations (IRR). For this purpose, WDI implements technological, organizational and physical security measures that are designed to secure and protect your personal data.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(3)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            Your Personal Data
                        </span>
                        {activeTab === 3 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 3 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                WDI collects, processes, uses and stores any and all personal data necessary and mandatory for WDI to perform its services to you. Such data may include the following:

                                Complete Name
                                Date of Birth
                                Age
                                Gender
                                Home Address
                                Email Address
                                Contact Number
                                Customer Profile Picture
                                Loyalty Card Data
                                WDI account and password for online/e-commerce
                                WDI collects personal data when you manually or electronically submit to us your orders, inquiries, requests or concerns (collectively “services”). Should you choose not to provide any of the above personal data, WDI may not be able to accommodate and respond to your request or perform the services.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(4)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Use
                        </span>
                        {activeTab === 4 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 4 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                            WDI collects, processes and uses your personal data to give you better services in processing your orders, payments, deliveries, to accommodate and respond to your inquiries or concerns, to inform you of our products, services, promotions, raffles, events and for other legitimate business purposes (collectively “purposes”). These may be disseminated to you via electronic or physical means.

WDI utilizes the collected personal data only for the abovementioned services and purposes.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(5)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Protection Measures
                        </span>
                        {activeTab === 5 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 5 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                            Only authorized WDI personnel has access to your personal data, duly informed of their obligation to hold these information with utmost confidentiality. The exchange of these data may be facilitated through email or hard copy. Personal data collected via electronic means are stored in a well-maintained database managed by our system expert while physical data are stored in locked filing cabinets monitored by CCTV cameras.

WDI stores and processes personal data within the Philippines only. Should there be a need to transfer personal data in another country, WDI shall comply with relevant laws and regulations and shall ensure that personal data are protected and covered by a data sharing or outsourcing agreement in accordance with relevant laws and regulations including the DPA and its IRR.

As a general rule, WDI is not allowed to share your personal data with third parties except if imperative and necessary to perform the services and purposes and unless with your consent. Third parties may include WDI’s business partners, contractors, subcontractors and service providers. Any personal data shared with such third parties will be safeguarded by a data sharing or outsourcing agreement in accordance with relevant laws and regulations including the DPA and its IRR
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(6)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Access and Correction
                        </span>
                        {activeTab === 6 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 6 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                            The accuracy and correctness of any personal data provided shall be your responsibility as well as the consequences of your failure to disclose your correct and updated personal data to WDI.

In accordance with the DPA and its IRR, you have the right to access or ask for a copy of any personal data we hold about you as well as to ask for it to be corrected and/or updated. Should you wish to obtain a hard copy or printout of your personal data, any expenses in relation thereto shall be for your account.

To correct and/or update your personal data, you may contact WDI’s customer service inside our stores or via Contact Us menu stating the personal data you wish to access or be corrected and/or updated. WDI shall provide to you the data you want to access as well as process the correction and/or update of your personal data within the time allowed by law and regulations.

In the event that correcting or updating of personal data is not possible due to legal and technical reasons, WDI will contact you and explain the reason/s thereof.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(7)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Retention Period
                        </span>
                        {activeTab === 7 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 7 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                            WDI reserves the right to retain and keep your personal data while you are a customer or unless you request your personal data to be deleted and for such period allowed by relevant laws and regulations. In the event that retention of which is no longer allowed by you or by the applicable laws and regulations, WDI shall dispose of your physical records through shredding while digital files shall be anonymized. Once deleted, your personal data will no longer be searchable or accessible and will be completely removed from our database.

WDI may also delete or remove your personal data in the event that such personal data is not or no longer necessary for the services or purposes.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PolicyPage;
