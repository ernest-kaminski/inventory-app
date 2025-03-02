import mongoose, { Schema, Document, Types } from 'mongoose';
import { IDevice } from './Device';
import { TAdditionalNumbers, TLocalization } from '@/types/types';

export interface IDeviceDetails extends IDevice {
    buyPrice?: number
    buyDate?: string
    additionalNumbers?: TAdditionalNumbers[]
    performerUser?: string
    localization: TLocalization
}

const DeviceSchema: Schema = new Schema({
    _id: { type: Types.ObjectId, default: () => new Types.ObjectId() },
    deviceId: {type: String, required: false},
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
    localization: {
        address: {type: String, required: true},
        city: {type: String, required: false},
        building: {type: String, required: false},
        room: {type: String, required: false},
    },
    performerUser: {type: String, required: false}
})

export default mongoose.models.DeviceDetails || mongoose.model<IDeviceDetails>('DeviceDetails', DeviceSchema)