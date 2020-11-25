console.log("hello world");
const logo = document.querySelectorAll("path");
for(let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}