import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IDevice extends Document {
    _id: string
    serialNumber: string
    deviceType: "Urządzenie elektroniczne" | "AGD" | "Materiał budowlany"
    date: string
}

const DeviceSchema: Schema = new Schema({
    _id: { type: Types.ObjectId, default: () => new Types.ObjectId() },
    serialNumber: {type: String, required: true},
    deviceType: {type: String, required: true},
    date: {type: String, required: true}
})

export default mongoose.models.Device || mongoose.model<IDevice>('Device', DeviceSchema)