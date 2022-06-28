/* tslint:disable */
/* eslint-disable */
/**
 * Test API
 * The Test API
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@test.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NoNavTiltakspengerVedtakRoutesPersonPeriodeDTO
 */
export interface NoNavTiltakspengerVedtakRoutesPersonPeriodeDTO {
    /**
     * 
     * @type {Date}
     * @memberof NoNavTiltakspengerVedtakRoutesPersonPeriodeDTO
     */
    fra: Date;
    /**
     * 
     * @type {Date}
     * @memberof NoNavTiltakspengerVedtakRoutesPersonPeriodeDTO
     */
    til: Date;
}

export function NoNavTiltakspengerVedtakRoutesPersonPeriodeDTOFromJSON(json: any): NoNavTiltakspengerVedtakRoutesPersonPeriodeDTO {
    return NoNavTiltakspengerVedtakRoutesPersonPeriodeDTOFromJSONTyped(json, false);
}

export function NoNavTiltakspengerVedtakRoutesPersonPeriodeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoNavTiltakspengerVedtakRoutesPersonPeriodeDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fra': (new Date(json['fra'])),
        'til': (new Date(json['til'])),
    };
}

export function NoNavTiltakspengerVedtakRoutesPersonPeriodeDTOToJSON(value?: NoNavTiltakspengerVedtakRoutesPersonPeriodeDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fra': (value.fra.toISOString().substr(0,10)),
        'til': (value.til.toISOString().substr(0,10)),
    };
}

