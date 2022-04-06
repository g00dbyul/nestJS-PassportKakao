import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {AuthModule} from "./domain/auth/auth.module";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: './config/env/.env'
      }),
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
