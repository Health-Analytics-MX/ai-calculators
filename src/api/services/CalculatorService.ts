/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Inputs } from '../models/Inputs';
import type { Metrics } from '../models/Metrics';
import type { PatientData } from '../models/PatientData';
import type { Prediction } from '../models/Prediction';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CalculatorService {

    /**
     * Read List
     * Read all calculator names that the user has access to.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readListApiV1CalculatorListGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/calculator_list',
        });
    }

    /**
     * Read Inputs
     * Read valid inputs for calculator.
     * @param name
     * @returns Inputs Successful Response
     * @throws ApiError
     */
    public static readInputsApiV1CalculatorNameInputsGet(
        name: string,
    ): CancelablePromise<Inputs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/calculator/{name}/inputs',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Prediction
     * Read prediction based on inputs.
     * @param name
     * @param requestBody
     * @returns Prediction Successful Response
     * @throws ApiError
     */
    public static readPredictionApiV1CalculatorNamePredictionPost(
        name: string,
        requestBody: PatientData,
    ): CancelablePromise<Prediction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/calculator/{name}/prediction',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Metrics
     * Get metrics of calculator for output assessment.
     * @param name
     * @param advanced
     * @returns Metrics Successful Response
     * @throws ApiError
     */
    public static readMetricsApiV1CalculatorNameMetricsGet(
        name: string,
        advanced: boolean = false,
    ): CancelablePromise<Metrics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/calculator/{name}/metrics',
            path: {
                'name': name,
            },
            query: {
                'advanced': advanced,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}