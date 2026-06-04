import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoryServices } from '../../../Services/CategoryServices/category-services';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CategoryModel } from '../../../Models/CategoryModel';

@Component({
  selector: 'app-get-all-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './get-all-category.html',
  styleUrl: './get-all-category.css',
})
export class GetAllCategory implements OnInit {

  categoryItems: CategoryModel[] = [];

  constructor(
    private categoryService: CategoryServices,
    private router: Router,
    private cdf: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.categoryService.GetAllCategories().subscribe({
      next: (data: CategoryModel[]) => {
        this.categoryItems = data;
        this.cdf.detectChanges();
      },
      error: (error: any) => {
        console.error('Error fetching category items:', error);
      }
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/category', id]);
  }

}
