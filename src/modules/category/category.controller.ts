import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category.model';
import { CategoryService } from 'src/services/category/category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAllCategories(): Observable<Category[]> {
    return this.categoryService.getAllCategories();
  }
}
