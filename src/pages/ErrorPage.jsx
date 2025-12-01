import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ErrorPage = ({ status = 404, title, message }) => {
    const navigate = useNavigate();
    const location = useLocation();

    let errorTitle = title;
    let errorMessage = message;
    let errorColor = 'text-stone-900 dark:text-stone-300 ';

    if (!errorTitle) {
        switch (status) {
            case 400:
                errorTitle = 'Bad Request';
                errorMessage = errorMessage || 'The server could not understand the request due to invalid syntax.';
                break;
            case 401:
                errorTitle = 'Unauthorized';
                errorMessage = errorMessage || 'You must be logged in to access this resource.';
                break;
            case 403:
                errorTitle = 'Forbidden';
                errorMessage = errorMessage || 'You do not have permission to access this resource.';
                break;
            case 404:
                errorTitle = 'Page Not Found';
                errorMessage = errorMessage || `The page "${location.pathname}" could not be found.`;
                break;
            case 500:
                errorTitle = 'Internal Server Error';
                errorMessage = errorMessage || 'Something went wrong on our end. Please try again later.';
                break;
            case 503:
                errorTitle = 'Service Unavailable';
                errorMessage = errorMessage || 'The server is currently unavailable. Please try again later.';
                break;
            default:
                errorTitle = 'An Error Occurred';
                errorMessage = errorMessage || 'Something went wrong.';
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-stone-800 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <h1 className={`text-9xl font-extrabold ${errorColor} opacity-80`}>
                        {status}
                    </h1>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-stone-300 tracking-tight">
                        {errorTitle}
                    </h2>
                    <p className="mt-2 text-base text-gray-900 dark:text-stone-300">
                        {errorMessage}
                    </p>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-colors duration-200 cursor-pointer"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-stone-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-colors duration-200 cursor-pointer"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
