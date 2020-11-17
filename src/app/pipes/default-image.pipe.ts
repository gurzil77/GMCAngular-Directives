import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  imageValue= '../../assets/green-forest.png';
  transform(value) {
    if (value ==='' || value === null) {
    alert ('nja7t')
    return this.imageValue;
  }
  }
}
