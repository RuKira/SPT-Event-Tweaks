import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { IQuestConfig } from "@spt/models/spt/config/IQuestConfig";

import config from "../config/config.json";

class Mod implements IPostDBLoadMod {
    public postDBLoad(container: DependencyContainer): void {
        const logPrefix = "[Event Tweaks]";
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const questConfig: IQuestConfig = configServer.getConfig<IQuestConfig>(ConfigTypes.QUEST);

        if (config.enabled) {
            console.log(`${logPrefix} Enabled!`);
            if (!config.chaos) {
                if (config.debugLogging) console.log(`${logPrefix} Event Quests Enabled!`);
                    // 641dbfd7f43eda9d810d7137 : "Important Patient" [Bandages Event (7 April 2023)]

                    // 64764abcd125ab430a14ccb5 : "Bloodhounds" [Bloodhounds Reveal (9 June 2023)]

                    // 647710905320c660d91c15a5 : "Hint" [Bosses, take a Hint! (2 June 2023)]

                    // 649567f359eab30d1b7c9585 : "Hustle" {2023} [Bosses & Rogues Wander (3 July 2023)]
                    // 649570491bb4d158bc4d0168 : "Tourists" [Bosses & Rogues Wander (3 July 2023)]

                    // 64916da7ad4e722c106f2345 : "Failed Setup" [Cultist Hunting (26 June 2023)]

                    // 649af47d717cb30e7e4b5e26 : "Cocktail Tasting" [Hardcore Mode (7 July 2023)]

                    // 655e427b64d09b4122018228 : "The Punisher: Harvest" [Ammo Shortage (25 November 2023)]

                    // "Down the Rabbit Hole - Part 1" [Down the Rabbit Hole (2 December 2023)]
                    // "Down the Rabbit Hole - Part 2" [Down the Rabbit Hole (2 December 2023)]
                    // "Down the Rabbit Hole - Part 3" [Down the Rabbit Hole (2 December 2023)]
                    // "Down the Rabbit Hole - Part 4" [Down the Rabbit Hole (2 December 2023)]
                    // "Down the Rabbit Hole - Part 5" [Down the Rabbit Hole (2 December 2023)]
                    // "Down the Rabbit Hole - Part 6" [Down the Rabbit Hole (2 December 2023)]

                    // "Afterparty" [Afterparty (8 December 2023)]
                    
                    // "Poisioning" [Unknown Toxin Poisoning (15 December 2023)]
                    // "Parasites" [Unknown Toxin Poisoning (15 December 2023)]
                    // "Healer" [Unknown Toxin Poisoning (15 December 2023)]
                    // "Remedy" [Unknown Toxin Poisoning (15 December 2023)]
                    // "Straw" [Unknown Toxin Poisoning (15 December 2023)]
                    // "Healing" [Unknown Toxin Poisoning (15 December 2023)]
                    // "Virtue" [Unknown Toxin Poisoning (15 December 2023)]
                    // "Pursuit of Power" [Unknown Toxin Poisoning (15 December 2023)]
                    // "Key Component" [Unknown Toxin Poisoning (15 December 2023)]

                    // "To the Tree!" [Christmas (25 December 2023)]
                    // 61bb474b1ab5304c3817a53a : "Disrupting the Party" [Christmas (25 December 2023)]
                    // 61bb47578d7cac1532300ccd : "Bad Santa" [Christmas (25 December 2023)]
                    // 61bb47481908c67d4249a205 : "No Gifts For You" [Christmas (25 December 2023)]
                    // 61bb474dce7374453b45dfd2 : "Fairy Tale Showdown" [Christmas (25 December 2023)]
                    // 61bb47516b70332c062ca7b9 : "Stop The Fight!" [Christmas (25 December 2023)]
                    // 61bb4756883b2c16a163870a : "Home Comfort" [Christmas (25 December 2023)]
                    // 61bb475467f83663e155e26a : "A Kind Snow Maiden" [Christmas (25 December 2023)]
                    // 61bb468b8d7cac1532300ccc : "Party Preperations" [Christmas (25 December 2023)]

                    // "Spring Never Changes" [Winter Tales (28 March 2024)]
                    // "Evil Spirits" [Winter Tales (28 March 2024)]
                    // "Granny's Tales" [Winter Tales (28 March 2024)]
                    // "Fishing With Shishiga" [Winter Tales (28 March 2024)]
                    // "Spring!" [Winter Tales (28 March 2024)]

                    // 65e85198e32da31f2b30978e : ?

                    // 6603fe74e773dcf3b0099f88 : "The Tarkov Mystery" [The Tarkov Mystery (15 May 2024)]
                    // "Break Through"  [The Tarkov Mystery (15 May 2024)]
                    // "Decryption Hurdles - Part 1"  [The Tarkov Mystery (15 May 2024)]
                    // "Decryption Hurdles - Part 2"  [The Tarkov Mystery (15 May 2024)]
                    // "Decryption Hurdles - Part 3"  [The Tarkov Mystery (15 May 2024)]
                    // "Take Two had been added."  [The Tarkov Mystery (15 May 2024)]
                    // "Photo Hunt had been added."  [The Tarkov Mystery (15 May 2024)]
                    // "U Turn"  [The Tarkov Mystery (15 May 2024)]
                    // "Getting to the Core"  [The Tarkov Mystery (15 May 2024)]
                    // "No Peeking!"  [The Tarkov Mystery (15 May 2024)]
                    // "Forgotten Acquaintance"  [The Tarkov Mystery (15 May 2024)]
                    // "Seeking Information"  [The Tarkov Mystery (15 May 2024)]
                    // "Obstacle Course"  [The Tarkov Mystery (15 May 2024)]
                    // "Obstruction Destruction"  [The Tarkov Mystery (15 May 2024)]
                    // "Radio Club"  [The Tarkov Mystery (15 May 2024)]
                    // "A New Hope"  [The Tarkov Mystery (15 May 2024)]
                    // "Liaison"  [The Tarkov Mystery (15 May 2024)]
                    // "Ceasefire - Information"  [The Tarkov Mystery (15 May 2024)]
                    // "Ceasefire - Part 2"  [The Tarkov Mystery (15 May 2024)]
                    // "Trade Embargo"  [The Tarkov Mystery (15 May 2024)]
                    // "Trade Embargo - Last Chance"  [The Tarkov Mystery (15 May 2024)]
                    // "Atonement"  [The Tarkov Mystery (15 May 2024)]
                    // "Redemption"  [The Tarkov Mystery (15 May 2024)]
                    // "Ding-Ding-Ding"  [The Tarkov Mystery (15 May 2024)]

                    // 6658a15615cbb1b2c6014d5b : "Hustle" {2024} [Hustle (31 May 2024)]

                    // 6672ec2a2b6f3b71be794cc5 : "A Key to Salvation" [A Key to Salvation (24 June 2024)]

                    // 668bcccc167d507eb01a268b : "Import Control" [Arms Race (16 July 2024)]
                    // "What’s Your Evidence?" [Arms Race (16 July 2024)]
                    // "Caught Red-Handed" [Arms Race (16 July 2024)]
                    // "Risks of Small Business" [Arms Race (16 July 2024)]
                    // "Protection of Interests" [Arms Race (16 July 2024)]
                    // "Western Quality Standards" [Arms Race (16 July 2024)]
                    // "Time-Tested" [Arms Race (16 July 2024)]

                    // "Bad Feeling" [Bad Feeling (26 July 2024)]

                    // 66a74c628410476dd65543be : "Gunsmith: Special Order" [Supply and Demand (2 August 2024)]
                    // Gun Connoisseur [Supply and Demand (2 August 2024)]
                    // Customer Communication [Supply and Demand (2 August 2024)]
                    // Supply and Demand [Supply and Demand (2 August 2024)]

                    // "Marathon - From Beginning to End" [Marathon (20 August 2024)]
                    // "Marathon - Sightseeing" [Marathon (20 August 2024)]
                    
                    // 66e01aca214f88109006a4b5 : "Into The Inferno" [Mortar Strike (26 September 2024)]
                    // "In and Out" [Mortar Strike (26 September 2024)]
                    // "Ours by Right" [Mortar Strike (26 September 2024)]
                    // "Provide Cover" [Mortar Strike (26 September 2024)]
                    // "Cream of the Crop" [Mortar Strike (26 September 2024)]
                    // "Before the Rain" [Mortar Strike (26 September 2024)]

                    // 66e3e2ee2136472d220bcb36 : "Night of The Cult" [Night of The Cult (11 October 2024)]
                    // "The Graven Image" [Night of The Cult (11 October 2024)]
                    // "Until Dawn" [Night of The Cult (11 October 2024)]

                    // 670404a2ea1caa8f2e0be106 : "Don't Believe Your Eyes" [Halloween 2024 (31 October 2024)]
                    // "Dirty Blood" [Halloween 2024 (31 October 2024)]
                    // "Burn It Down" [Halloween 2024 (31 October 2024)]
                    // "The Root Cause" [Halloween 2024 (31 October 2024)]
                    // "Matter of Technique" [Halloween 2024 (31 October 2024)]
                    // "Find the Source" [Halloween 2024 (31 October 2024)]
                    // "Gloves Off" [Halloween 2024 (31 October 2024)]
                    // "Sample IV - A New Hope" [Halloween 2024 (31 October 2024)]
                    // "Darkest Hour Is Just Before Dawn" [Halloween 2024 (31 October 2024)]
                    // "Contagious Beast" [Halloween 2024 (31 October 2024)]
                    // "Radical Treatment" [Halloween 2024 (31 October 2024)]
                    // "Forgotten Oaths" [Halloween 2024 (31 October 2024)]
                    // "Clear Conscience" [Halloween 2024 (31 October 2024)]
                    // 67190f6c1b3f4964d90d71e9 : "Global Threat" [Halloween 2024 (31 October 2024)]
                    // "Watch the Watcher" [Halloween 2024 (31 October 2024)]
                    // "Not a Step Back!" [Halloween 2024 (31 October 2024)]
                    // "Conservation Area" [Halloween 2024 (31 October 2024)]
                    // "Every Man for Himself" [Halloween 2024 (31 October 2024)]
                    // "Pressured by Circumstances" [Halloween 2024 (31 October 2024)]
                    // "Reduce the Distance" [Halloween 2024 (31 October 2024)]
                    // "Spread the Damage" [Halloween 2024 (31 October 2024)]
                    // "Foreign Support" [Halloween 2024 (31 October 2024)]
                    // "Forced Measure" [Halloween 2024 (31 October 2024)]

                    // 674647f38466ebb03408b291 : "That’s a Great Plan, Walter" [Smugglers (6 December 2024)]
                    // 6746480cd0b2f8eb9b034e3e : "Chop the Thieving Hand" [Smugglers (6 December 2024)]
                    // 6746480040ea3d1d4f0e5d51 : "Shell Game" [Smugglers (6 December 2024)]

                    // "Dark Times" [Dark Times (16 December 2024)]
                }
            }
            else if (config.chaos) {
                if (config.debugLogging) console.log(`${logPrefix} Chaos Mode Enabled!`);
                questConfig.showNonSeasonalEventQuests = true;
                for (const eventQuest in questConfig.eventQuests) {
                    if (config.debugLogging) console.log(`${logPrefix} Event Quest: ${eventQuest}`);
            }
        }
        else {
            console.log(`${logPrefix} Disabled!`);
        }
    }
}
export const mod = new Mod();