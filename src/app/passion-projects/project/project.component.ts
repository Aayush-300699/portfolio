import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() openSource: { experience: any[] };
  @Input() isDark: boolean;

  constructor() { }

  ngOnInit(): void {
    // Ensure openSource.experience is an array
    if (!Array.isArray(this.openSource.experience)) {
      console.error('openSource.experience is not an array');
    }
  }
}