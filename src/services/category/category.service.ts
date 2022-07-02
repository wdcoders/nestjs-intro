import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { CategoryEntity } from 'src/entities/category.entity';
import { Repository } from 'typeorm';
import { Category } from '../../models/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  getAllCategories(): Observable<Category[]> {
    return from(this.categoryRepository.find());
  }
}
