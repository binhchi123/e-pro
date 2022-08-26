import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ContentComponent } from './pages/content/content.component';
import { SpecialComponent } from './pages/special/special.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayComponent } from './pages/overlay/overlay.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProductComponent } from './pages/product/product.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    ContentComponent,
    SpecialComponent,
    ContactComponent,
    OverlayComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
    FaqComponent,
    ProductComponent,
    MenuComponent,
    DetailComponent,
    ReviewsComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
