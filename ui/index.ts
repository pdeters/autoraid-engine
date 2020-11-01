import {Client, Room} from "colyseus.js";
import { RaidState } from "../server/rooms/schema/RaidState";

document.addEventListener('DOMContentLoaded', async () => {
    const client = new Client('ws://localhost:2567')

    const raid: Room<RaidState> = await client.joinOrCreate("raid_room")
    
    console.log('joined raid room', raid)

    const handleInput = (ev: KeyboardEvent) => {   
        if (ev.code === "Space") {
            raid.send("action", {});
        }
    };

    raid.onStateChange((state: RaidState) => {
        if (state.running) {
            if (!(typeof document.onkeydown === "function")) {
                document.addEventListener('keydown', handleInput);
            }
        } else {
            document.removeEventListener('keydown', handleInput);
        }
    });
});
