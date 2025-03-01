import mongoose, { Schema, Document } from 'mongoose';
import { IDevice } from './Device';
import { TAdditionalNumbers } from '@/types/types';

export interface IDeviceDetails extends IDevice {
    buyPrice?: number
    buyDate?: string
    additionalNumbers?: TAdditionalNumbers[]
    performerUser?: string
}

const DeviceSchema: Schema = new Schema({
    serialNumber: {type: String, required: true},
    deviceType: {type: String, required: true},
    date: {type: Date, required: true},
    buyPrice: {type: Number, required: false},
    buyDate: {type: String, required: false},
    additionalNumbers: [ {
        label: {type: String, required: false},
        value: {type: String, required: false},
        }, 
    ],
    performerUser: {type: String, required: false}
})

export default mongoose.models.DeviceDetails || mongoose.model<IDeviceDetails>('DeviceDetails', DeviceSchema)