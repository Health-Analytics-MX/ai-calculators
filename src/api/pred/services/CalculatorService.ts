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
     * Read Inputs
     * Read valid inputs for calculator.
     * @param name
     * @param aws
     * @returns Inputs Successful Response
     * @throws ApiError
     */
    public static readInputsMlV1CalculatorInputsGet(
        name: string,
        aws: boolean = true,
    ): CancelablePromise<Inputs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ml/v1/calculator/inputs',
            query: {
                'name': name,
                'aws': aws,
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
     * @param aws
     * @returns Prediction Successful Response
     * @throws ApiError
     */
    public static readPredictionMlV1CalculatorPredictionPost(
        name: string,
        requestBody: PatientData,
        aws: boolean = true,
    ): CancelablePromise<Prediction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ml/v1/calculator/prediction',
            query: {
                'name': name,
                'aws': aws,
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
     * @param aws
     * @param advanced
     * @returns Metrics Successful Response
     * @throws ApiError
     */
    public static readMetricsMlV1CalculatorMetricsGet(
        name: string,
        aws: boolean = true,
        advanced: boolean = false,
    ): CancelablePromise<Metrics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ml/v1/calculator/metrics',
            query: {
                'name': name,
                'aws': aws,
                'advanced': advanced,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Test
     * Delete me
     * @param aws
     * @returns any Successful Response
     * @throws ApiError
     */
    public static testMlV1CalculatorTestGet(
        aws: boolean = true,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ml/v1/calculator/test',
            query: {
                'aws': aws,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read List
     * Read all calculator names.
     * @param aws
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readListMlV1CalculatorListGet(
        aws: boolean = true,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ml/v1/calculator/list',
            query: {
                'aws': aws,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
