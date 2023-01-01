import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type userDocument = user & Document;

@Schema()
export class user{
    @Prop()
    name: string

    @Prop()
    email: string

    @Prop()
    password: string
} 


export const userSchema = SchemaFactory.createForClass(user)


