import { IService } from '../common-types'
import { ValidatorID, ValidatorSetting, ValidationConfig } from '@kubevious/entity-meta'

export interface IValidatorConfigService extends IService {

    getValidators() : Promise<ValidationConfig>;

    getValidator(validatorId: ValidatorID) : Promise<ValidatorItem>;

    updateValidator(item: ValidatorItem) : Promise<void>;

}


export interface ValidatorIdBody
{
    validator: ValidatorID;
}

export interface ValidatorItem
{
    validator: ValidatorID;
    setting: ValidatorSetting;
}