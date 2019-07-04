import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, OnChanges {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  @Output() createServer = new EventEmitter<any>();
  @Input('test') test;
  @ViewChild('newInputElement') newInputElement: string;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('Changes', changes);
      this.onCreateServer();
  }
  onCreateServer() {
    // this.createServer.emit(event);
    console.log(this.newInputElement);
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onServerAdded() {
    this.createServer.emit(event);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
