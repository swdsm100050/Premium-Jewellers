import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textpipe'
})
export class TextpipePipe implements PipeTransform {

  transform(text: any, length: number = 10, showAll: boolean = false, suffix: string = '...'): any {
    
    if (showAll) {
      return text;
    }

    if ( text.split(" ").length > length ) {
      
      return text.split(" ").splice(0, length).join(" ") + suffix;
    }

    return text;
  }

}
