import React from 'react'
import styles from '../../styles/styles'

const CheckoutSteps = ({ active }) => {
    console.log(active);
    return (
        <>
            <div className='hidden md:flex justify-center w-full'>
                <div className="w-[90%] 800px:w-[50%] flex items-center flex-wrap justify-center">
                    <div className={`${styles.noramlFlex}`}>
                        <div className={`${styles.cart_button}`}>
                            <span className={`${styles.cart_button_text}`}>1.Shipping</span>
                        </div>
                        <div className={`${active > 1 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
                            : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
                            }`} />
                    </div>

                    <div className={`${styles.noramlFlex}`}>
                        <div className={`${active > 1 ? `${styles.cart_button}` : `${styles.cart_button} !bg-[#FDE1E6]`}`}>
                            <span className={`${active > 1 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#f63b60]`}`}>
                                2.Payment
                            </span>
                        </div>
                    </div>

                    <div className={`${styles.noramlFlex}`}>
                        <div className={`${active > 3 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
                            : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
                            }`} />
                        <div className={`${active > 2 ? `${styles.cart_button}` : `${styles.cart_button} !bg-[#FDE1E6]`}`}>
                            <span className={`${active > 2 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#f63b60]`}`}>
                                3.Success
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            {/* mobile view */}

            <div className='md:hidden justify-center w-full'>
                <div className="flex items-center flex-wrap justify-center">
                    {active === 1 && (
                        <div className={`${styles.noramlFlex}`}>
                            <div className={`${styles.cart_button}`}>
                                <span className={`${styles.cart_button_text}`}>Shipping</span>
                            </div>
                        </div>
                    )}

                    {active === 2 && (
                        <div className={`${styles.noramlFlex}`}>
                            <div className={`${styles.cart_button}`}>
                                <span className={`${styles.cart_button_text}`}>Payment</span>
                            </div>
                        </div>
                    )}

                    {active === 3 && (
                        <div className={`${styles.noramlFlex}`}>
                            <div className={`${styles.cart_button}`}>
                                <span className={`${styles.cart_button_text}`}>Success</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CheckoutSteps