import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false //This makes pipe impure by rerunning the pipe on any new data added
})

export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:any, propName:string): any {
    const resultArray=[];
    if(value.lenth===0 || filterString===''){
      return value;
    }
    for(const item of value){
      if(item[propName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
