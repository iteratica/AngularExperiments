import { Component } from '@angular/core';

@Component({
  selector: 'app-worker-test-component',
  templateUrl: './worker-test-component.component.html',
  styleUrls: ['./worker-test-component.component.css']
})
export class WorkerTestComponentComponent {

  
  Message: string = "";

  StartCalculationWorker(callback: (result: string) => void) {
    if (typeof Worker !== 'undefined') // check if Worker class is supported
    {
      // Create a new worker
      const worker = new Worker(new URL('./worker-test.worker', import.meta.url));

      // handle worker event by calling the callback function
      worker.onmessage = (event) => {
        callback(event.data);
      };

      worker.postMessage('hello'); // send a message to the worker, any message will start the calculation
    }
    else {
    }
  }
    
  Calc(): Promise<string> {
    return new Promise<string>(
      (resolve, reject) => {
        this.StartCalculationWorker(r => resolve(r))
      }
    )
  }

  
}
