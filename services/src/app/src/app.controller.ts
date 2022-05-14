import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("event")
  createItem(@Body() body){
    return this.appService.createItem(body);
  }

  @Get("event")
  getAll(@Param() params) {
    return this.appService.getAll();
  }


  @Get("event/:id")
  getItem(@Param() params) {
    return this.appService.getItem(params.id);
  }

  @Put("event/:id")
  updateItem(@Param() params, @Body() body){
    return this.appService.updateItem(params.id, body);
  }

  @Delete("event/:id/:rev")
  deleteItem(@Param() params){
    return this.appService.deleteItem(params.id, params.rev);
  }

}
