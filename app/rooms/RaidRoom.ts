import { Room, Client, Delayed } from "colyseus";
import { RaidState } from "./schema/RaidState";

export class RaidRoom extends Room {

  public delayedInterval!: Delayed;


  onCreate (options: any) {
      this.setState(new RaidState())
  
      this.onMessage("action", (client, message) => {
        console.log('action received')
      });
    }
  
    onJoin (client: Client, options: any) {
      this.delayedInterval = this.clock.setInterval(() => {
        const time = this.clock.currentTime
        console.log(`Heartbeat ${time}`);
        client.send("heartbeat", { time: this.clock.currentTime });        
      }, 500);
    }      
  
    onLeave (client: Client, consented: boolean) {
      
    }
  
    onDispose() {
      
    }
}
