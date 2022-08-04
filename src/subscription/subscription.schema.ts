import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schema as MongooseSchema } from 'mongoose';

export type SubscriptionDocument = Subscription & Document;

@Schema()
export class Subscription {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);

export const SubscriptionSchemaDefinition = { name: 'Subscription', schema: SubscriptionSchema };
