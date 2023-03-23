import { FaqsComponent } from './pages/faqs/faqs.component';
import { ArticleComponent } from './pages/article/article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogsComponent
  },
  {
    path: 'article/:year/:month/:day/:slug',
    component: ArticleComponent
  },
  {
    path: 'faq',
    component: FaqsComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
