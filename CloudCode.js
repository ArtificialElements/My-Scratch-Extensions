const chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
							 
							 "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
							 "0","1","2","3","4","5","6","7","8","9",
							 
							 " ","`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","\\","|",";",":","\'","\"",",","<",
							 ".",">","/","?"];

// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best

class MyExtension {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'cloudcode',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'Cloud Code',

      blocks: [
        {
          // `opcode` is the internal ID of the block
          // It should never change!
          // It corresponds to the class method with the same name.
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
				
				{
          // `opcode` is the internal ID of the block
          // It should never change!
          // It corresponds to the class method with the same name.
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
				menus: {
			}
		};
	}

  convertToCC({TEXT}) {
		let cloudCode = "";
		for (let i = 0; i < TEXT.length; i++) {
			if(chars.indexOf(TEXT[i]) > 10)
				cloudCode += chars.indexOf(TEXT[i]);
			else
				cloudCode += "0" + chars.indexOf(TEXT[i]);
		};
		return cloudCode;
	}
	
	decodeCC({TEXT}) {
		let decoded = "";
		for (let i = 0; i < (TEXT.length)/2; i++) {
			decoded += chars[Number(TEXT[((i+1)*2)-2] + TEXT[((i+1)*2)-1])];
		};
		return decoded;
	}
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());