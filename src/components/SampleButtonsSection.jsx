import React from 'react';

const SampleButtonsSection = () => {
    return (
        <section className="button-area py-12">
            <div className="container mx-auto">
                <h3 className="text-3xl font-semibold text-center mb-8">Sample Buttons</h3>
                <div className="flex flex-wrap justify-center">
                    <a href="#" className="genric-btn default mx-2 my-2">Default</a>
                    <a href="#" className="genric-btn primary mx-2 my-2">Primary</a>
                    <a href="#" className="genric-btn success mx-2 my-2">Success</a>
                    <a href="#" className="genric-btn info mx-2 my-2">Info</a>
                    <a href="#" className="genric-btn warning mx-2 my-2">Warning</a>
                    <a href="#" className="genric-btn danger mx-2 my-2">Danger</a>
                    <a href="#" className="genric-btn link mx-2 my-2">Link</a>
                    <a href="#" className="genric-btn disable mx-2 my-2">Disable</a>
                </div>
                <div className="flex flex-wrap justify-center mt-8">
                    <a href="#" className="genric-btn default-border mx-2 my-2">Default</a>
                    <a href="#" className="genric-btn primary-border mx-2 my-2">Primary</a>
                    <a href="#" className="genric-btn success-border mx-2 my-2">Success</a>
                    <a href="#" className="genric-btn info-border mx-2 my-2">Info</a>
                    <a href="#" className="genric-btn warning-border mx-2 my-2">Warning</a>
                    <a href="#" className="genric-btn danger-border mx-2 my-2">Danger</a>
                    <a href="#" className="genric-btn link-border mx-2 my-2">Link</a>
                    <a href="#" className="genric-btn disable-border mx-2 my-2">Disable</a>
                </div>
            </div>
        </section>
    );
};

export default SampleButtonsSection;
