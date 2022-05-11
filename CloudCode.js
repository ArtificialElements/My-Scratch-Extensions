const chars = [ // List of characters for encoding/decoding cloudcode.
	//Lowercase
	"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
	
	//Uppercase
	"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
	
	//Numbers
	"0","1","2","3","4","5","6","7","8","9",
	
	//Symbols
	" ","`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","\\","|",";",":","\'","\"",",","<",
	".",">","/","?" 
	];
	
class MyExtension {
	getInfo() {
		return {
			id: 'cloudcode',
			name: 'Cloud Code',

			blocks: [
				{ //Converting block
					opcode: 'convertToCC',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Convert [TEXT] to Cloud Code',
					arguments: {
						TEXT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "hello!"
						}
					}
				},
				
				{ // Decoding block
					opcode: 'decodeCC',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Decode Cloud Code [TEXT]',
					arguments: {
						TEXT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "hello!"
						}
					}
				}
				
			],
			menus: { // I used none
			}
		};
	}

  convertToCC({TEXT}) { // Converting block code
		let cloudCode = "";
		for (let i = 0; i < TEXT.length; i++) {
			if(chars.indexOf(TEXT[i]) > 10)
				cloudCode += chars.indexOf(TEXT[i]);
			else
				cloudCode += "0" + chars.indexOf(TEXT[i]);
		};
		return cloudCode;
	}
	
	decodeCC({TEXT}) { // Decoding block code
		let decoded = "";
		for (let i = 0; i < (TEXT.length)/2; i++) {
			decoded += chars[Number(TEXT[((i+1)*2)-2] + TEXT[((i+1)*2)-1])];
		};
		return decoded;
	}
}

Scratch.extensions.register(new MyExtension());
