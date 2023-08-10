import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'example',
  templateUrl: './example.html',
  styleUrls: ['./example.scss'],
})
export class Example {
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Example';
}
