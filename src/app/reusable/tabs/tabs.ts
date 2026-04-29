import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {

  @Input() tabList: string[] = [];

  @Output() onTabClicked = new EventEmitter<string>();

  currentTab: string = "";

  onTabChange(tabName: string) {
    debugger;
    this.currentTab = tabName;
    this.onTabClicked.emit(tabName);
  }

}
