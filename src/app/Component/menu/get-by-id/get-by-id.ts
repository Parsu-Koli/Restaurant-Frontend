import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../Services/MenuServices/menu-service';

@Component({
  selector: 'app-get-by-id',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './get-by-id.html',
  styleUrl: './get-by-id.css',
})
export class GetById implements OnInit {

  menuItem: any;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,   
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.menuService.getMenuItemById(id).subscribe({
        next: (data) => {
          this.menuItem = data;
          console.log('Menu item fetched:', this.menuItem);
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching menu item:', error);
        }
      });
    }
  }

  goToCreate(){
    this.router.navigate(['/Create-Menu']);
  }

  
  goToUpdate(id: number) {
    this.router.navigate(['/update-menu', id]);
  }

  deleteMenuItem(id: number) {

  const confirmDelete = confirm("Are you sure you want to delete this menu item?");

  if (confirmDelete) {
    this.menuService.deleteMenuItem(id).subscribe({
      next: () => {
        alert("Menu deleted successfully ✅");
        this.router.navigate(['/menu']);  // Go back to list
      },
      error: (err) => {
        console.error(err);
        alert("Failed to delete ❌");
      }
    });
  }

}

}
