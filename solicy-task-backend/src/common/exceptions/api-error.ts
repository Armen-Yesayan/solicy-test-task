export class ApiError extends Error {
    status: number;
    errors: any[];

    constructor(status: number, message: string, errors: any[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static NotFoundError(message: string) {
        return new ApiError(404, message);
    }

    static BadRequest(message: string, errors: any[] = []) {
        return new ApiError(400, message, errors);
    }
}