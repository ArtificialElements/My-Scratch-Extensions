class AnimatorsToolPack {
	getInfo() {
		return {
			id: 'theanimatorstoolpack',
			name: "The Animators' Tool pack",

			blocks: [
				{ // Sprite Width
					opcode: 'spriteWidth',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Sprite width [NUM] %',
				},
				
				{ // Sprite Heigth 
					opcode: 'spriteHeigth',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Sprite heigth [NUM] %',
				}
				
			],
			menus: { // I used none
			}
	};

	spriteWidth({NUM}) {

	}

	spriteHeigth({NUM}) { 

	}
}

Scratch.extensions.register(new MyExtension());
