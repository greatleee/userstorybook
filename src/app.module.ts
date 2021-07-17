import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { BookshelvesModule } from './bookshelves/bookshelves.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, BooksModule, BookshelvesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
