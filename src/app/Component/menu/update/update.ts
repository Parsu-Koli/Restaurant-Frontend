import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../Services/MenuServices/menu-service';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update implements OnInit {

  updateForm!: FormGroup;
  menuId!: number;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.menuId = Number(this.route.snapshot.paramMap.get('id'));

    this.updateForm = this.fb.group({
      id: this.menuId,
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
    });

    // Load existing data
    this.menuService.getMenuItemById(this.menuId).subscribe(data => {
      this.updateForm.patchValue(data);
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {

      this.menuService
        .updateMenuItem(this.menuId, this.updateForm.value)
        .subscribe({
          next: () => {
            alert('Menu updated successfully!');
            this.router.navigate(['/Menu']);
          },
          error: (err) => console.error(err)
        });
    }
  }

  goBack() {
  this.router.navigate(['/menu/', this.menuId]);
}

}
