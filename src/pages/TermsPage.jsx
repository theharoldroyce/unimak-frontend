import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const TermsPage = () => {
    return (
        <div>
            <Header activeHeading={5} />
            <Terms />
            <Footer />
        </div>
    );
};

const Terms = () => {
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Terms of Use</h2>
            <p className="text-md text-gray-900 mb-8">
                Welcome to Unimak Builders Supply. e-commerce platform. Please read carefully these terms and conditions before using the platform. By accessing and using this platform users hereby agree to be bound by these terms. If users do not agree with these terms and conditions please discontinue using or accessing this platform.

                Users below 18 years old, must obtain consent their parents or legal guardians to be bound by the provisions of these terms and conditions.
            </p>
            <div className="mx-auto space-y-4">
                {/* single Faq */}

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(2)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            Intellectual Property
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
                                The WDI e-commerce platform is owned and operated by WDI. Users may not copy, reproduce, use,
                                decompile, alter, create any derivative works or sell any information learned or obtained from
                                this platform. The trademarks and logos displayed on this platform are owned
                                by WDI or it has received permission for the use thereof. Users are strictly prohibited to use these
                                trademarks and logos without the prior written consent of WDI WDI reserves its rights to enforce its
                                intellectual property rights to the fullest extent.
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
                            General Use of  platform
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
                                WDI exerts utmost effort to provide accurate description of the products posted and uploaded on this platform.
                                WDI does not guarantee that such description is accurate, up to date or free from errors. Accordingly, users are advised to verify and confirm any facts that are important in making decision to purchase any product. WDI reserves the right to alter, modify and revise these terms and conditions at any time and users are deemed to be aware of and bound by these changes.
                                Users agree and undertake not to do any of the following:
                                Use this platform for any illegal, unlawful or unauthorized activities
                                Impersonate or misrepresent any person or entity
                                Interfere, disrupt or hack this platform or any network connected to it
                                Post, upload or submit any obscene, indecent, pornographic, deceptive, fraudulent, malicious offensive, racist or any discriminatory materials
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
                            Limited Liability
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
                                Users agree to comply at all times with all the terms and conditions of this platform.
                                Users shall render WDI free and harmless from any and all liability or responsibility arising directly
                                or indirectly to any system or connection failure, error, omission or delay in the use of this platform
                                or any material in it. WDI shall not be liable for any direct, indirect, punitive, special, incidental,
                                consequential or exemplary damages including without limitation loss of business, revenue, profits,
                                goodwill arising out or in connection with the platform or the use thereof.
                                Users also agree to hold WDI free and harmless from any damages even if WDI has been previously advised
                                or could have foreseen the possibility of such damages, however they arise, whether in breach of contract or in tort
                                including negligence relative to the use of the platform
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
                            Governing Laws
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
                                The terms and conditions of use and all transactions in the platform shall be governed by and
                                construed in accordance with the laws of the Philippines. Any claims, dispute or legal action
                                arising out of or connected with the use of the platform or any transactions therein shall be
                                instituted exclusively with the proper court of competent jurisdiction of Quezon City.
                                If any section, provision or other portion of this terms and conditions of use is held to be
                                illegal, invalid or otherwise unenforceable, the remaining portion not declared illegal,
                                invalid or otherwise unenforceable shall, in any event, remain valid and binding between WDI
                                and the users.
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
                            Termination
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
                                The terms and conditions as well as the materials used in the platform shall be effective unless and
                                until terminated by WDI. WDI may terminate the platform at any time and may do so immediately
                                without notice, and accordingly, users will be denied access to the platform.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4 hidden">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(7)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            What payment methods do you accept?
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
                                We accept cash on delivery system.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
