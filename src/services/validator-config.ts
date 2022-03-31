import { Promise } from 'the-promise';
import { IService } from '../common-types'
import { ValidatorID, ValidatorSetting, ValidationConfig } from '@kubevious/entity-meta'

export interface IValidatorConfigService extends IService {

    getValidators() : Promise<ValidationConfig>;

    getValidator(validator: ValidatorID) : Promise<ValidationConfig>;

    updateValidator(validator: ValidatorID, setting: ValidatorSetting) : Promise<any>;

}
