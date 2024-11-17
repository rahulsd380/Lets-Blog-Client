import React from 'react';

const NewsletterSubscribe = () => {
    return (
        <div className="py-8 max-w-[1440px] w-full mx-auto  px-6 md:px-8 lg:px-0">
            <div className="bg-white md:bg-primary-80 md:border border-none md:border-neutral-30 rounded-xl p-0 md:p-4 w-full md:max-w-full lg:max-w-[706px] mx-auto  font-Inter">
            <h1 className='text-black text-lg md:text-xl font-semibold leading-7 lg:leading-6 md:leading-8'>Subscribe to our newsletter</h1>
            <p className='text-neutral-95 leading-6 lg:leading-[20.8px] mt-[10px]'>
            Over 3.5K people are enjoying the latest resources. Join the club.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-8">

            <input type="text" className="w-full h-9 px-3 rounded-xl bg-primary-60 border border-neutral-30" placeholder="Enter your email" />

<button className="w-full md:w-fit h-9 bg-primary-10 rounded-lg px-4 py-1 text-white font-semibold leading-[22px] text-xs">
Subscirbe
</button>

                </div>

                <div className="flex items-center gap-4 mt-8">
                          
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="size-5 md:size-6 bg-primary-10 border-primary-10 rounded-3xl"
                          />
                          <label
                            htmlFor="default-checkbox"
                            className="text-sm md:text-base text-neutral-95 font-medium leading-[22px] md:leading-6 cursor-pointer"
                          >
                            I agree to Privacy Policy
                          </label>
                        </div>
        </div>
        </div>
    );
};

export default NewsletterSubscribe;