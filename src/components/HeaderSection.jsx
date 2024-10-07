import React from 'react';

const HeaderSection = () => {
    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-6">
                        <div className="text-sm">
                            <strong>Mon-Fri:</strong> 8am to 2pm
                        </div>
                        <div className="text-sm">
                            <strong>Sat-Sun:</strong> 11am to 4pm
                        </div>
                    </div>
                    <div className="text-sm">
                        <strong>Call Us:</strong> 
                        <a href="tel:(012)69852367512" className="text-yellow-400 hover:underline ml-1">(+92) 331 6490171</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderSection;
