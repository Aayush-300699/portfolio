import { Component, OnInit } from '@angular/core';
import { openSource } from '../../information';

@Component({
  selector: 'app-passion-projects',
  templateUrl: './passion-projects.component.html',
  styleUrls: ['./passion-projects.component.scss']
})
export class PassionProjectsComponent implements OnInit {
  openSource = openSource;
  isDark = false;

  constructor() { }

  ngOnInit(): void {
  }
}