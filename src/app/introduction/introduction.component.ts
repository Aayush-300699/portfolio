import { Component, OnInit } from '@angular/core';
import { introduction } from '../../information';
import { ThemeService } from "../theme.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  isDark = true;
  greeting = introduction;
  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode()
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode == true
    })
  }

  downloadFile(): void {
    const fileUrl = '../../assets/Aayush_Jain_CV.pdf'; // Replace with the actual path in the assets folder
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank'; // Open in a new tab
    link.download = 'My_Profile.pdf'; // Suggested filename
    link.click();
  }

}
