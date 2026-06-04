import { Component } from '@angular/core';
import { CategoryServices } from '../../../Services/CategoryServices/category-services';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  imports: [FormsModule,RouterModule],
  templateUrl: './create-category.html',
  styleUrl: './create-category.css',
})
export class CreateCategory {

  category: any = {
    id: 0,
    name: ''
  }

  constructor(private service: CategoryServices, private router: Router) { }

  submit() {
    this.service.createcategory(this.category)
      .subscribe({
        next: (res) => {
          console.log("Category Created", res);
          alert("Category Created Successfully");

          this.router.navigate(['/category']);
        },
        error: (err) => {
          console.error(err);
          alert("Failed to create reservation");
        }
      });
  }
}
