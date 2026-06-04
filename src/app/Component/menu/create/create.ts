// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Menu } from '../../../Models/menu';
// import { Router } from '@angular/router';
// import { MenuService } from '../../../Services/MenuServices/menu-service';


// @Component({
//   selector: 'app-create',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './create.html',
//   styleUrl: './create.css',
// })
// export class Create {

//   menuForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private menuService: MenuService,
//     private router: Router 
//   ) {

//     this.menuForm = this.fb.group({
//       name: ['', Validators.required],
//       price: ['', [Validators.required, Validators.min(1)]],
//       description: [''],
//       categoryId: ['', Validators.required],
//       isvalid: [true]   
//     });
//   }

//   onSubmit() {
//     if (this.menuForm.valid) {

//       const menuData: Menu = this.menuForm.value;

//       this.menuService.CreateMenuItem(menuData)
//         .subscribe({
//           next: () => {
//             alert("Menu Created Successfully ✅");
//             this.menuForm.reset();
//             this.router.navigate(['/Menu']);
//           },
//           error: (err) => {
//             console.error(err);
//             alert("Something went wrong ❌");
//           }
//         });
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuService } from '../../../Services/MenuServices/menu-service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {

  menuForm: FormGroup;
  selectedImage!: File;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private router: Router
  ) {

    this.menuForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      categoryId: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      isAvailable: [true]
    });

  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSubmit() {

    if (this.menuForm.valid) {

      const formData = new FormData();

      formData.append('Name', this.menuForm.value.name);
      formData.append('Description', this.menuForm.value.description);
      formData.append('CategoryId', this.menuForm.value.categoryId);
      formData.append('Price', this.menuForm.value.price);
      formData.append('IsAvailable', this.menuForm.value.isAvailable);

      if (this.selectedImage) {
        formData.append('Image', this.selectedImage);
      }

      this.menuService.CreateMenuItem(formData).subscribe({
        next: () => {
          alert("Menu Created Successfully ✅");
          this.menuForm.reset();
          this.router.navigate(['/Menu']);
        },
        error: (err) => {
          console.error(err);
          alert("Something went wrong ❌");
        }
      });

    }

  }
}