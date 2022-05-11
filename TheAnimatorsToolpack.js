class AnimatorToolPack {
	getInfo() {
		return {
			id: 'theanimatorstoolpack',
			name: "The Animators' Tool pack",

			blocks: [
				{ // Sprite Width
					opcode: 'spriteWidth',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Sprite width[NUM]%',
					arguments: {
						NUM: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: "100"
						}
					}
				},
				
				{ // Sprite Heigth 
					opcode: 'spriteHeigth',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Sprite heigth[NUM]%',
					arguments: {
						NUM: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: "100"
						}
					}
				}
				
			],
			menus: { // I used none
			}
		};
	}

  spriteWidth({NUM}) {
		
	}
	
	spriteHeigth({NUM}) { 
		
	}
}

Scratch.extensions.register(new MyExtension());
