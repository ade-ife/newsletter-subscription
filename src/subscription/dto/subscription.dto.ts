import { IsNotEmpty } from 'class-validator';

export class CreateSubscriptionDto {
  @IsNotEmpty()
   name: string;

  @IsNotEmpty()
  email: string;

  createdAt: Date;

}