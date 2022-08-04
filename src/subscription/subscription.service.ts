import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubscriptionDto } from './dto/subscription.dto';
import { Subscription, SubscriptionDocument } from './subscription.schema';

@Injectable()
export class SubscriptionService {
  
    constructor(@InjectModel('Subscription') private subscriptionModel: Model<SubscriptionDocument>) {
        
    }


    async getSubscriptions(): Promise<Subscription[]> {
         const subscriptions =  await this.subscriptionModel.find();
        return subscriptions;
    }


    async createSubscription(payload: CreateSubscriptionDto) {
        const subscription = await this.subscriptionModel.create({
          ...payload,
        });
        return this.getSubscriptionById(subscription.id);
      }


      async getSubscriptionById(id: any) {
        const subscription = await this.subscriptionModel.findOne({ _id: id });
        if (!subscription)
          throw new HttpException('Subscription with id not found', HttpStatus.NOT_FOUND);
        return subscription;
      }

      async getSubscriptionByEmail(email: string){
        const subscription = await this.subscriptionModel.findOne({email})
        if (!subscription)
        throw new HttpException(`Subscription with email ${email} not found`, HttpStatus.NOT_FOUND);
         return subscription;
      }

}
