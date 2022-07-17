import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryComponent } from './components/category/category.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { CategoryService } from './services/category.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MainComponent,
    MenuComponent,
    CategoryComponent,
    SidebarComponent
  ],
  imports: [
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    BrowserModule,
    ToolbarModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }), // ToastrModule added


  ],
  providers: [CategoryService,MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
