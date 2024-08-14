import HttpError from '../exception/httpError.js';

/**
 * 공통 에러 핸들링 함수
 * @param {Error} error
 * @param {string} defaultMessage
 * @param {number} [statusCode=500]
 * @returns {Promise<never>}
 */
export const handleError = (error, defaultMessage, statusCode = 500) => {
    console.error('error: ', error);
    if (error instanceof HttpError) {
        return Promise.reject(error);
    } else {
        return Promise.reject(new HttpError(statusCode, `${defaultMessage}: ${error.message}`));
    }
};

export default handleError;