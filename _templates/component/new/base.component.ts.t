---
to: projects/components/ui-library/src/lib/components/<%= h.changeCase.param(name) %>/<%= h.changeCase.param(name) %>.component.ts
---
import { Component, Input } from '@angular/core';

@Component({
  selector: '<%= h.changeCase.param(name) %>',
  templateUrl: './<%= h.changeCase.param(name) %>.html',
  styleUrls: ['./<%= h.changeCase.param(name) %>.scss'],
})
export class <%= h.changeCase.pascal(name) %> {
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = '<%= h.changeCase.pascal(name) %>';
}
