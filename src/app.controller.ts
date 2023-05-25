import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('index')
  @Render('index.hbs')
  getIndex(): void {
    return;
  }

  @Get('articles')
  @Render('articles.hbs')
  getArticles(): void {
    return;
  }

  @Get('georgian-wine')
  @Render('Georgian-wine.hbs')
  getGeorgianWine(): void {
    return;
  }

  @Get('reviews')
  @Render('reviews.hbs')
  getReviews(): void {
    return;
  }

  @Get('shop')
  @Render('shop.hbs')
  getShop(): void {
    return;
  }

  @Get('slovakian-wine')
  @Render('Slovakian-wine.hbs')
  getSlovakianWine(): void {
    return;
  }

  @Get('to-buy-list')
  @Render('ToBuyList.hbs')
  getToBuyList(): void {
    return;
  }

  @Get('signin')
  @Render('signIn.hbs')
  getSignIn(): void {
    return;
  }

  @Get('auth')
  @Render('auth.hbs')
  getAuth(): void {
    return;
  }
}
