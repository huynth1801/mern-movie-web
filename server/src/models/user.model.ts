import mongoose, {Schema, Document, Model} from "mongoose";
import modelOptions from "./models.options";
import bcrypt from "bcrypt-ts";

export interface IUser extends Document {
    username: string,
    displayname: string,
    password: string,
    salt: string,
    setPassword:(password: string) => Promise<void>,
    validPassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    displayname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
}, modelOptions)

userSchema.methods.setPassword = async function(this: IUser, password: string): Promise<void> {
    this.salt = await bcrypt.genSalt(16);
    this.password = await bcrypt.hash(password, this.salt)
}

userSchema.methods.validPassword = async function(this: IUser, password: string) : Promise<boolean> {
    return await bcrypt.compare(password, this.password)
}

const userModel: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default userModel;