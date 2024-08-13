/**
 * 상태코드와 메시지를 가진 HttpError 클래스
 */
export class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}

export default HttpError;