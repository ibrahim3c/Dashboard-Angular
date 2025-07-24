import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  private interval?:ReturnType<typeof setInterval>;
  // pr use alternative way to component cleanup using DestroyRef
  private destroyRef=inject(DestroyRef)
  constructor() {}
  ngOnInit() {
    this.interval= setInterval(() => {
      const rnd = Math.random(); // 0-0.9999999
      if (rnd < 0.5) this.currentStatus = 'online';
      else if (rnd < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);

    // or use
    this.destroyRef.onDestroy(()=>{
       clearTimeout(this.interval)
    })
  }
  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
