class AnimatorsToolPack {
	getInfo() {
		return {
			id: 'theanimatorstoolpack',
			name: "The Animators' Tool pack",

			blocks: [
				{ // Sprite Width
					opcode: 'spriteWidth',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Sprite width',
				},
				
				{ // Sprite Heigth 
					opcode: 'spriteHeigth',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Sprite heigth',
				}
				
			],
			menus: { // I used none
			}
		};
	}

	spriteWidth() {

	};

	spriteHeigth() { 

	};
}

Scratch.extensions.register(new AnimatorsToolPack());
