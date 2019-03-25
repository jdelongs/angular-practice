import { Component } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'courses',
    template: `
        {{ course.title | uppercase | lowercase}} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.price | currency:'AUD':'symbol':'3.2-2'}} <br/>
        {{ course.releaseDate | date }} <br/>
    `
})

export class CoursesComponent {
  course = {
      title: 'The Complete Angular Course',
      rating: 4.9745,
      students: 30123,
      price: 190.95,
      releaseDate: new Date(2016, 3, 1),
      text: `asdlfkjasldkfjalkdsjflakj asdfasd asdf asdf asdf asdf asdaf sf asd fads sf zzsd a fas dfs
                daf as fas a fddasd fasf asdf zsd fsasdf asdf asf`
  }
}
