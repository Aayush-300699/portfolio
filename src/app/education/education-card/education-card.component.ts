import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import ColorThief from "colorthief";
import { EducationCardModel } from "./education-card.model";
import { ThemeService } from "../../theme.service";

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {
  isDark = false;
  colorArrays = [];
  @Input('item') experience: EducationCardModel;
  @ViewChild('imgRef', { static: false }) img: ElementRef;

  constructor(private theme: ThemeService) {
  }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode()
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode
    })
  }

  getColorArrays() {
    this.colorArrays = new ColorThief().getColor(this.img.nativeElement);
  }

  rgb() {
    return this.colorArrays.length === 0 ? 'rgb(0,0,0)' : 'rgb(' + this.colorArrays.join(', ') + ')';
  }
}
