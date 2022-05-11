const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const formatMessage = require('format-message');

class Scratch3myExtension {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'myextension',
            name: 'My Extension',

            blocks: [
                {
                    opcode: 'writeText',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'myText [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "hello"
                        }
                    }
                }
            ],
            menus: {
            }
        };
    }

    writeText (args) {
        const text = Cast.toString(args.TEXT);
        log.myText(text);
    }
}

Scratch.extensions.register(new scratch3myExtension());
