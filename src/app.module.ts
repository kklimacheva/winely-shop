import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerResponse } from './server.response.intrceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ArticleModule } from './articles/article.module';
import { ClientModule } from './clients/client.module';
import { WineModule } from './wines/wine.module';
import { ProductModule } from './products/product.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule.forRoot({
      connectionURI:
        'https://dev-db01ef81ea6f11edb9b8b90a35a84dea-eu-west-1.aws.supertokens.io:3570',
      apiKey: 'q1-2laxU134V7rIgERT0wYpkZNrzsT',
      appInfo: {
        appName: 'Winely',
        apiDomain: 'https://winely.onrender.com',
        websiteDomain: 'https://winely.onrender.com',
        apiBasePath: '/api/auth',
        websiteBasePath: '/auth',
      },
    }),
    ArticleModule,
    ClientModule,
    WineModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ServerResponse,
    },
    {
      provide: AppService,
      useClass: AppService,
    },
  ],
})
export class AppModule {}
