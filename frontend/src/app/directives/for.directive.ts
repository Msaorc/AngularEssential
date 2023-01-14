import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForIn') numbers: number[]

  constructor(private container: ViewContainerRef, private templete: TemplateRef<any>) { 
    this.numbers = []
  }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.templete, {$implicit: number})
    }
  }
}
