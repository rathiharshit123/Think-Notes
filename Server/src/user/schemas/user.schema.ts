import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type userDocument = user & Document;

@Schema()
export class user{
    @Prop()
    name: String

    @Prop()
    email: String

    @Prop()
    password: String
} 


export const userSchema = SchemaFactory.createForClass(user)


