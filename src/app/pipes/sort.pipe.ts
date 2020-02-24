import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any, sort?: string, desc?: boolean ): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
        if (sort) {
            if (desc === true) {
                if (a[sort] > b[sort]) {
                    return -1;
                  } else if (a[sort] < b[sort]) {
                    return 1;
                  } else {
                    return 0;
                  }
            } else {
                if (a[sort] < b[sort]) {
                    return -1;
                  } else if (a[sort] > b[sort]) {
                    return 1;
                  } else {
                    return 0;
                  }
            }
        } else {
            if (desc === true) {
                if (a > b) {
                    return -1;
                  } else if (a < b) {
                    return 1;
                  } else {
                    return 0;
                  }
            } else {
                if (a < b) {
                    return -1;
                  } else if (a > b) {
                    return 1;
                  } else {
                    return 0;
                  }
            }
        }
    });
    return array;
  }

}
