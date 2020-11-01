import { Room, Client } from "colyseus";
import { RaidState } from "./schema/RaidState";

export class RaidRoom extends Room {
    onCreate (options: any) {
        this.setState(new RaidState())
    
        this.onMessage("action", (client, message) => {
          console.log('action received')
        });
      }
    
      onJoin (client: Client, options: any) {
        
      }      
    
      onLeave (client: Client, consented: boolean) {
        
      }
    
      onDispose() {
        
      }
}
