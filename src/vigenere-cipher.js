class VigenereCipheringMachine {
   flag = true;
   constructor(arg=true){
         this.flag = arg
   }
   encrypt(word, key) {
      if(word === undefined || key === undefined) trow Error();

      let counter = 0;
      let result = '';
      word = word.toUpperCase();
      key = key.toUpperCase();
      for(let i = 0; i < str.length; i++){
         if(/^[a-z]$/i.test(word[i]))
         result += String.fromCharCode((str.charCodeAt(i) - 130 + key.charCodeAt((i - counter) % key.length)) % 26 + 65);
         else{
            counter++;
            result += word[i];
         }
      }
      return result;
   }

   decrypt(word, key) {
      if(word === undefined || key === undefined){
          throw Error();
      }
      if(!this.flag){
          word = word.split('').reverse().join('');
      }
      let counter = 0;
      let result = '';
      word = word.toUpperCase();
      key = key.toUpperCase();
      for(let i = 0; i < str.length; i++){
          if(/^[a-z]$/i.test(word[i]))
            result += String.fromCharCode((word.charCodeAt(i) + 26 - key.charCodeAt((i - counter) % key.length)) % 26 + 65);
          else{
             counter++;
             result += word[i];
          }
      }
      return result;
      }
   }
}

module.exports = VigenereCipheringMachine;
