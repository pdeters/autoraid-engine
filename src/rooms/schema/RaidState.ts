import { Schema, type } from "@colyseus/schema";

export class RaidState extends Schema {

    @type("number")
    dmg: number
}