import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryServices } from '../../../Services/CategoryServices/category-services';
import { CategoryModel } from '../../../Models/CategoryModel';

@Component({
  selector: 'app-category-details',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './category-details.html',
  styleUrl: './category-details.css',
})
export class CategoryDetails implements OnInit {

  category?: CategoryModel;
  isEditMode: boolean = false;

  constructor(
    private categoryService: CategoryServices,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.categoryService.getById(id).subscribe({
        next: (data) => {
          this.category = data;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err)
      });
    }
  }

  enableEdit() {
    this.isEditMode = true;
  }

  cancelEdit() {
    this.router.navigate(['/category']);
  }

  updateCategory() {
    if (!this.category) return;

    this.categoryService.updateCategory(this.category.id, this.category)
      .subscribe({
        next: () => {
          alert('Category updated successfully ✅');
          this.isEditMode = false;
        },
        error: (err) => console.error(err)
      });
  }

  goBack() {
    this.router.navigate(['/category']);
  }

  deleteCategory() {
    if (!this.category) return;

    const confirmDelete = confirm(
      `Are you sure you want to delete "${this.category.name}"?`
    );

    if (confirmDelete) {
      this.categoryService.deleteCategory(this.category.id)
        .subscribe({
          next: () => {
            alert('Category deleted successfully ✅');
            this.router.navigate(['/Category']);
          },
          error: (err) => {
            console.error(err);
            alert('Failed to delete category ❌');
          }
        });
    }
  }


}
