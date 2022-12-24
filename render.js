 function redirect_text(){
    window.location.href = "./text_encrypt.html";
 }
 function redirect_decrypt_text(){
   window.location.href = "./text_decrypt.html";
}
 // start encrypting
//  let encryption_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function encrypt() {
   // Get the input message
   var message = document.getElementById("encrypt_text").value;
   
   // Generate a random seed for the encryption
   var seed = Math.floor(Math.random() * 1000000);
   
   // Encrypt the message using the seed
   var encrypted = "";
   for (var i = 0; i < message.length; i++) {
     encrypted += String.fromCharCode(message.charCodeAt(i) + seed);
   }
   
   // Display the seed and encrypted message
   document.getElementById("result").innerHTML = "Result: " + encrypted;
   document.getElementById("seed").innerHTML = "Seed: " + seed;
   event.preventDefault();
 }

 function Decrypt(){

      event.preventDefault();
      const seed = Number(document.querySelector('.seed_decrypt').value);
      const result = document.querySelector('.result_decrypt').value;
      let output = '';
      for (let i = 0; i < result.length; i++) {
        output += String.fromCharCode(result.charCodeAt(i) - seed);
      }
      document.querySelector('.decrypted_txt_result').innerHTML = `Result: ${output}`;
 } 