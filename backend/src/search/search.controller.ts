import { Controller, Get, Query } from '@nestjs/common';
import { SearchHotelDto } from './dto/search-hotel.dto';
import { SearchService } from './search.service';
@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService){}
    
    @Get('rooms')
    search(@Query() filters: SearchHotelDto ){
        return this.searchService.searchHotel(filters);
    }

}
