import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="inline-flex rounded-md shadow-sm">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm6 9.546a8 8 0 008-8.001h-4a4 4 0 11-4 4.5l-.001 3.501zm2-15.093a8 8 0 00-8 8H0a12 12 0 0112-12v4.002z"></path>
                </svg>
                <p className="font-medium text-gray-700">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;
