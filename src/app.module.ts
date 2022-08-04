import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [SubscriptionModule, MongooseModule.forRoot('addyourmongourihere')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
