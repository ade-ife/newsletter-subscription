import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/subscription.dto';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {

    constructor(
        @Inject(SubscriptionService) private readonly subscriptionService: SubscriptionService,
      ) {
      }


    @Get()
    async getAllSubscriptions() {
      try {
        const response = await this.subscriptionService.getSubscriptions();
        return { message: 'Subscriptions fetched successfully', response };
      } catch (error) {
        throw new HttpException(
          error.message || 'Operation failed',
          error.status || HttpStatus.BAD_REQUEST,
        );
      }
    }


    @Post()
    async createSubscription(@Body() payload: any) {
        try {
          const response = await this.subscriptionService.createSubscription(
            payload,
          );
          return { message: 'Subscription added successfully', response };
        } catch (error) {
          throw new HttpException(
            error.message || 'Operation failed',
            error.status || HttpStatus.BAD_REQUEST,
          );
        }
      }

  }


