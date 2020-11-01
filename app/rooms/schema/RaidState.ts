import { Schema, type } from "@colyseus/schema";

export class RaidState extends Schema {

    @type("boolean")
    running: boolean = true

    @type("number")
    dmg: number
}
