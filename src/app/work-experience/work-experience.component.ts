import { Component, OnInit } from '@angular/core';
import { myCorporateJourney } from '../../information';
import { ThemeService } from "../theme.service";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  isDark = false;
  workExperience = myCorporateJourney

  constructor(private theme: ThemeService) {
  }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode()
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode == true
    })
  }
}
