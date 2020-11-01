import { Room, Client } from "colyseus";
import { RaidState } from "./schema/RaidState";

export class RaidRoom extends Room {
    onCreate (options: any) {
        this.setState(new RaidState())
    
        this.onMessage("action", (client, message) => {
          console.log('onMessage: action')
        });
      }
    
      onJoin (client: Client, options: any) {
        console.log('onJoin')
      }      
    
      onLeave (client: Client, consented: boolean) {
        console.log('onLeave')
      }
    
      onDispose() {
        console.log('onDispose')
      }
}
