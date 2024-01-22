let btn = document.querySelector(".btn");
let text = document.querySelector(".text");
btn.addEventListener("click",()=>{
    let hexcode= "#"+ Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor=hexcode;
    text.innerHTML=hexcode;
});
// .toString(16): Converts the resulting integer to its hexadecimal (base-16) representation. The 16 argument specifies the radix for the conversion, indicating that the result should be in base-16.
// "#" + ...: Prepends a "#" character to the beginning of the hexadecimal string. In CSS, a "#" character is used to indicate that the following characters represent a hexadecimal color code.