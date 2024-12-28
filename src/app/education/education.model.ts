import { EducationCardModel } from "./education-card/education-card.model"

export interface WorkExperienceModel {
  display: boolean,
  experience: EducationCardModel[]
}
