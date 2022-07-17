import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .category-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryDialog: boolean;

  categories: Category[]=[];

  category: Category;

  selectedCategories: Category[]=[];

  submitted: boolean;

  constructor(private categoryService: CategoryService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
  ngOnInit(): void {

    this.getAllCategoryxx();
  }


  openNew() {
    this.category = {};
    this.submitted = false;
    this.categoryDialog = true;
}



editProduct(category: Category) {
    this.category = {...category};
    this.categoryDialog = true;
}

deleteCategory(category: Category) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + category.name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.categories = this.categories.filter(val => val.id !== category.id);
            this.category = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Category Deleted', life: 3000});
        }
    });
}
getAllCategoryxx() {
  debugger
  this.categoryService.getAllCategory().subscribe((response)=>{
debugger
    if ((this.categories = response.data)) {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    } else {
      this.messageService.add({severity:'errror', summary: 'Success', detail: 'Message Content'});
    }
  });

}
onDelete(id: number) {
  debugger
  this.confirmationService.confirm({

      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoryService.deleteCategory(id).subscribe(res=>{
          this.categories=this.categories.filter(item=>item.id !==id);
          console.log('Post deleted successfully!');
          this.category = {};
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
          }
        );


    }
  });
}
// onDelete(id:number)
// {
// this.categoryService.deleteCategory(id).subscribe(res=>{
// this.categories=this.categories.filter(item=>item.id !==id);
// console.log('Post deleted successfully!');
// })
// }

hideDialog() {
    this.categoryDialog = false;
    this.submitted = false;
}

saveProduct() {
    this.submitted = true;

  this.categoryService.addCategory(this.category).subscribe(response=>{console.log(response)});




        this.categories = [...this.categories];
        this.categoryDialog = false;
        this.category = {};
    }
}

// findIndexById(id: string): number {
//     let index = -1;
//     for (let i = 0; i < this.categories.length; i++) {
//         if (this.categories[i].id === id) {
//             index = i;
//             break;
//         }
//     }

//     return index;
// }

// createId(): string {
//     let id = '';
//     var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for ( var i = 0; i < 5; i++ ) {
//         id += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return id;
// }

