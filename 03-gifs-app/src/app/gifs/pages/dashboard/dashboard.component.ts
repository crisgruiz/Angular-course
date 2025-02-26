import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from '../../components/gifs-side-menu/gifs-side-menu-header/gifs-side-menu-header.component';
import { SideMenuOptionsComponent } from '../../components/gifs-side-menu/gifs-side-menu-options/gifs-side-menu-options.component';
import { SideMenuComponent } from '../../components/gifs-side-menu/gifs-side-menu.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {}
