import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';

export type InputType = { value: number };
export type SectionType = InputType[];

@Component({
  selector: 'app-lab-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab-five.component.html',
  styleUrls: ['./lab-five.component.scss'],
})
export class LabFiveComponent {
  items = [{ value: 0 }, { value: 0 }];
  sections = [[{ value: 0 }]];

  // onChange(index: number, value: number): void {
  //   this.items[index].value = value;
  //   console.log(index, value, this.items);
  // }
  add(): void {
    this.items.push({ value: 0 });
  }
  delete(index: number): void {
    this.items.splice(index, 1);
  }

  private createInput(): InputType {
    return { value: 0 };
  }

  private createSection(): SectionType {
    return [this.createInput()];
  }

  addSection(): void {
    this.sections.push(this.createSection());
  }

  removeSection(index: number): void {
    this.sections.splice(index, 1);
  }

  addInput(section: SectionType): void {
    section.push(this.createInput());
    console.log(section);
  }

  removeInput(section: SectionType, index: number): void {
    section.splice(index, 1);
  }

  onChange(section: SectionType, index: number, value: number): void {
    section[index].value = value;
  }

  getResult(section: SectionType): number {
    return section
      .map((input) => input.value)
      .reduce((carry, value) => carry + value, 0);
    
  }
}
