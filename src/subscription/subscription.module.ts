import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionSchemaDefinition } from './subscription.schema';
import { SubscriptionService } from './subscription.service';

@Module({
  imports: [MongooseModule.forFeature([SubscriptionSchemaDefinition])],
  providers: [SubscriptionService],
  controllers: [SubscriptionController]
})
export class SubscriptionModule {}
