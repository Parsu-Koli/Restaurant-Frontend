import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuService } from '../../../Services/MenuServices/menu-service';

@Component({
  selector: 'app-get-all',
  imports: [CommonModule, RouterModule],
  templateUrl: './get-all.html',
  styleUrl: './get-all.css',
})
export class GetAll implements OnInit {
    menuItems: any[] = [];
    totalItems: number = 0;
    
  
   constructor(private service: MenuService,private cdr: ChangeDetectorRef,
    private rout: Router
   ) {}
   
   goToCreate() {
  this.rout.navigate(['/create-menu']);
}

  
    ngOnInit(): void {
      this.service.getAllMenuItems().subscribe({
        next: (data : any[]) => {
          this.menuItems = data;
          this.totalItems = this.menuItems.length;
          
          this.cdr.detectChanges();
        },
        error: (error: any) => {
          console.error('Error fetching menu items:', error);
        }
      });
    }

    viewItem(id: number) {
  this.rout.navigate(['/Get-Menu-By-Id', id]);
}
  
}
