import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform{

    //Transform
    transform(value: any, limit:number) {
        if(value.length > limit){
            return value.substr(0,limit)+ ' ...'; 
            //Convert a large string to a small substring using pipes
        }
        else{
            return value;
        }
    }

}