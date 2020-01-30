import { CommandoMessage } from "discord.js-commando";
import { Message } from "discord.js";

import CorniCommand from "../../Engine/CorniCommand";
import DiscordBot from "../../Engine/DiscordBot";

const oneLine = require("common-tags").oneLine;

export default class AddNumbersCommand extends CorniCommand {
    constructor(client: DiscordBot) {
        super(client, {
            name: "add-numbers",
            aliases: ["add", "add-nums"],
            group: "fun",
            memberName: "add",
            description: "Adds numbers together.",
            details: oneLine`
				This is an incredibly useful command that finds the sum of numbers.
				This command is the envy of all other commands.
			`,
            examples: ["add-numbers 42 1337"],
            args: [
                {
                    key: "numbers",
                    label: "number",
                    prompt: "What numbers would you like to add? Every message you send will be interpreted as a single number.",
                    type: "float",
                    infinite: true
                }
            ]
        });
    }

    async run(msg: CommandoMessage, args: { numbers: number[] }): Promise<Message | Message[]> {
        const total = args.numbers.reduce((prev: number, arg: number) => prev + arg, 0);
        return msg.reply(`${args.numbers.join(" + ")} = **${total}**`);
    }
}
