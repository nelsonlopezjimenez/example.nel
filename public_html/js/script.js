// SCRIPT FOR CFC DIRECTORY
// AUTHOR: HOLLAND
// DATE: 2021/07

const containers = document.querySelectorAll(".videoCont");
const smallButton = document.getElementById("buttonSmall");
const medButton = document.getElementById("buttonMedium");
const bigButton = document.getElementById("buttonBig");
const smallStyle = smallButton.style;
const medStyle = medButton.style;
const bigStyle = bigButton.style;
const allVideos = document.querySelectorAll("video");
const myMap = new Map();

function changeSizeSmall() {
    let regexReplacePercent20Array = [];
  for (let i = 0; i < containers.length; i++) {
    containers[i].style.margin = "1.5%";
    containers[i].style.width = "30%";
    containers[i].style.paddingBottom = "0%";
    smallStyle.backgroundColor = "darkgrey";
    medStyle.backgroundColor = "white";
    bigStyle.backgroundColor = "white";
  }
  //console.log(allVideos.length);
  for (i of allVideoCurrentPath) {
    myMap.set(i.key, i.value);
  }

  for (i = 0; i < allVideos.length; i++) {
    let myArray = [];
    let myString = allVideos[i].currentSrc;
    myArray = myString.split("/");

    let regexReplacePercent20 = myArray[myArray.length - 1].replaceAll(
      "%20",
      " "
    );
    regexReplacePercent20Array.push(regexReplacePercent20);
    // console.log(`regexReplacePercent20 == ${regexReplacePercent20}`);
    //generateHash with sha-1 and save into array
    // use hash as key to setAttribute to current  path
    // shaXXX(regexReplacePercent20)

    // //console.log(shaXXX(regexReplacePercent20).then((i) => //console.log(i)));

    // get value  based on key
    let prefix = "/youtube.nel/public_html/";
    let newPathHashKey = shaXXX(regexReplacePercent20).then((error, it) => {
      if (error)
        //console.log(error)
        return error;
    });

    //console.log(`newPathHashKey : ${newPathHashKey}`)
    //console.log(myMap.get(newPathHashKey));
    //console.log("=================")
    allVideos[0].setAttribute(
      "src",
      "/youtube.nel/public_html/RAW-VIDEOS/2022coltsteelebootcamp/Colt's Code Camp Day 1-SF_Xl5TOGlY.mp4"
    );
    // allVideos[i].setAttribute("src", prefix + myMap.get(newPathHashKey));
  }
  console.log(`regexArray.length  == ${regexReplacePercent20Array.length}`);

  let globalArray = [] ;
  const getHashLocalNameKey = async function (regexReplacePercent20Array, myMap)  {
      let myPromiseArray = [];
      let prefix = "/youtube.nel/public_html/";
      try{
          for (let i = 0; i<regexReplacePercent20Array.length; i++){
            //   console.log(regexReplacePercent20Array[i]);
            let myPromise = shaXXX(regexReplacePercent20Array[i]); //this is a promise
            myPromiseArray = (myPromise).then(val => {
                console.log(val);  // correct local hash
                globalArray.push(val);
                console.log(globalArray.length)
                console.log(myMap.get(val));
                allVideos[i].setAttribute('src', prefix+myMap.get(val))
                return globalArray;
            })
          }
        //   console.log(myPromiseArray)// not reached for some reason
          return await myPromiseArray;  //???
      } catch (error)  {
        console.log(error);
      }
   }
  
  
  
  let myLocalHashvaluesArray = getHashLocalNameKey(regexReplacePercent20Array, myMap)

//   let my = myPromiseArray.then( i => {
      
//       return i;
//   })

//   Promise.all(myPromiseArray).then(val => {
//       console.log(val);
//   })
  
}
/** found in reference.codeproject.com/dom/subtlecrypto/*/
 function shaXXX(str) {
  // transform the string into an arraybuffer
  let buffer = new TextEncoder("utf8").encode(str);
  return  crypto.subtle.digest("sha-1", buffer).then(function (hash) {
    return hex(hash);
  });
}
 function hex(buffer) {
  let hexCodes = [];
  let view = new DataView(buffer);
  for (let i = 0; i < view.byteLength; i += 4) {
    let value = view.getUint32(i);
    let stringValue = value.toString(16);
    let padding = "00000000";
    let paddedValue = (padding + stringValue).slice(-padding.length);
    hexCodes.push(paddedValue);
  }
  return  hexCodes.join("");
}
// shaXXX("Colt's Code Camp Day 1-SF_Xl5TOGlY.mp4").then(function(digest) {
//     //console.log(digest);
// });

function changeSizeMedium() {
  for (let i = 0; i < containers.length; i++) {
    containers[i].style.margin = ".1%";
    containers[i].style.width = "49.8%";
    containers[i].style.paddingBottom = "1%";
    smallStyle.backgroundColor = "white";
    medStyle.backgroundColor = "darkgrey";
    bigStyle.backgroundColor = "white";
  }
}

function changeSizeBig() {
  for (let i = 0; i < containers.length; i++) {
    containers[i].style.margin = "1% 3%";
    containers[i].style.paddingBottom = "2%";
    containers[i].style.width = "94%";
    smallStyle.backgroundColor = "white";
    medStyle.backgroundColor = "white";
    bigStyle.backgroundColor = "darkgrey";
  }
}

smallButton.addEventListener("click", changeSizeSmall);
medButton.addEventListener("click", changeSizeMedium);
bigButton.addEventListener("click", changeSizeBig);

// END

// for (i of files){
//     let myObj = {};
//     let myBaseName = path.basename(i);
//     let basenameHash = crypto.createHash(hashMethod).update(myBaseName).digest('hex');
//     myObj.key = basenameHash;
//     myObj.value = i;

//     myObjArray.push(myObj);
//     myMap.set(basenameHash, myBaseName);
//     myPathArray.push(i);

// }

let allVideoCurrentPath = [
  {
    key: "afb44ebff6ad31984902ea4847ce07ef543f1fc9",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Colt's Code Camp Day 1-SF_Xl5TOGlY.mp4",
  },
  {
    key: "bb71ac01c22526bc605c8e4ddb7d8181163762db",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Colt's Code Camp Day 2-L1h--yeMbZc.mp4",
  },
  {
    key: "10584d1190fbace7e52fbf4f83b678a128fb91cc",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Colt's Code Camp Day 3 - HTML Tables & Entities-ZEHRyN6y71M.mp4",
  },
  {
    key: "5101f1b0c3d358d268b1f8ae255da6fa1e0b3650",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Colt's Code Camp Day 4 - Forms & Inputs-sPStRhWqNMg.mp4",
  },
  {
    key: "4aa7550a25614131bc507c797eb7a6b963f1d88a",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/CSS Color Systems HSL, RGB, HEX - Colt's Code Camp-rNtW2PHVoNM.mp4",
  },
  {
    key: "0e51461c0d17bc1b340729f18ad11abe1d885d2c",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Essential CSS Text Properties - Colt's Code Camp-v9Hqy5Nxthc.mp4",
  },
  {
    key: "c883913d417644ed2032b33b960c7d73daea3220",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Intro to CSS - Colt's Code Camp-jNwCMTQ9ico.mp4",
  },
  {
    key: "e5ff1a36c0aa21c0327e7d8985a4ff9a5654aaa5",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/JavaScript for Beginners Course (2020) - Colt Steele-x2RNw4M6cME.mp4",
  },
  {
    key: "7f804eaefb3f0b522b86292cda7e665b6856b308",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Master The All Important CSS Box Model - Colt's Code Camp-M1xEi_BBW1I.mp4",
  },
  {
    key: "3d3a925495df61738ea5678ca7af2e2c0d4c7292",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Responsive Design & Media Queries In 30ish Minutes - Colt's Code Camp-na-X_SM8vg0.mp4",
  },
  {
    key: "6cde1cf4238279d5f18ad89825a6405d9e54cf30",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/The CSS Units You Should Use - em, rem, % , vh, vw, and more - Colt's Code Camp-fi81bovqxXI.mp4",
  },
  {
    key: "c7f88effd50add7cec6d2a4ca0ecd84f59402005",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/The Ultimate CSS3 Flexbox Tutorial - Colt's Code Camp-qZv-rNx0jEA.mp4",
  },
  {
    key: "668665e750be047d08c1096e3b0917b70eb10ba8",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Top CSS Selectors You Should Know - Colt's Code Camp-qj20o5UQ3qI.mp4",
  },
  {
    key: "7f4a5adbfee3a485b7474585e0e404b9706d632c",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/Using & Optimizing Google Fonts - Colt's Code Camp-iHGxxPxGUgA.mp4",
  },
  {
    key: "b5cb2cd17ab30095f802c12279a5ed836239c441",
    value:
      "RAW-VIDEOS/2022coltsteelebootcamp/What is HTML5 Semantic Markup - Colt's Code Camp-naha1DIHK4E.mp4",
  },
  {
    key: "ca9ffc8e056a22c32a6a5a759e86bbf3c15b259a",
    value: "RAW-VIDEOS/2022coltsteelebootcamp/youtube-dl.exe",
  },
  {
    key: "42716e44b5a94483baae36b4ab22c27404a783fe",
    value: "RAW-VIDEOS/2022vscode/2import",
  },
  {
    key: "39c74dc97aa4c23597c88f92d791cd1d47318f1a",
    value:
      "RAW-VIDEOS/2022vscode/Advanced Code Editing in VS Code-rsatrlBEFFA.mp4",
  },
  {
    key: "6d184d2fe07c91184a14b430f4d7301c6278744f",
    value: "RAW-VIDEOS/2022vscode/demofile.txt",
  },
  {
    key: "951c5e7dd3e0bbfcdb4d672890a2c9c174f70708",
    value:
      "RAW-VIDEOS/2022vscode/Edit and Run Code in Visual Studio Code-MNBwGGwvvKE.mp4",
  },
  {
    key: "5dafcddcf87461c664a1567946d7a39144374e5e",
    value: "RAW-VIDEOS/2022vscode/generateindex.js",
  },
  {
    key: "73731d42d96830a32b9fc9d51b5267323df38e88",
    value:
      "RAW-VIDEOS/2022vscode/Learn Visual Studio Code in 7min (Official Beginner Tutorial)-B-s71n0dHUk.mp4",
  },
  {
    key: "69afc2f0e1303db46bafc7a4f55f478df2308101",
    value: "RAW-VIDEOS/2022vscode/names.json.txt",
  },
  {
    key: "9aaafd9db36d8d124e8e8ad81031691a796e8f2d",
    value:
      "RAW-VIDEOS/2022vscode/Personalize VS Code with Themes-HOShAQzOy4Q.mp4",
  },
  {
    key: "f94f859b77e9cf0b6e1bbd367dd9ed2b4345eed5",
    value:
      "RAW-VIDEOS/2022vscode/Remote collaboration in Visual Studio Code-A2ceblXTBBc.mp4",
  },
  {
    key: "933e66711c92665fa82b2c8364d5cbefb56bee65",
    value:
      "RAW-VIDEOS/2022vscode/Unlock the power of VS Code's Extensions-SKcZ3cwX8lA.mp4",
  },
  {
    key: "8728ece30e3a854cdc4905b6a98b35d28d13e811",
    value:
      "RAW-VIDEOS/2022vscode/Using Git with Visual Studio Code (Official Beginner Tutorial)-i_23KUAEtUM.mp4",
  },
  {
    key: "1e88464445ac6d2df358a7b4b686fb1b6e5eae72",
    value: "RAW-VIDEOS/2022vscode/VS Code - Customization-4wVF4w_53hs.mp4",
  },
  {
    key: "73a2f4321648d40f2e95a91f810e6a26fdb76839",
    value: "RAW-VIDEOS/2022vscode/VS Code - Debugging-6cOsxaNC06c.mp4",
  },
  {
    key: "f12c43819adc897c03f560ffb8276b9f0ead765b",
    value: "RAW-VIDEOS/2022vscode/VS Code - IntelliSense-lSPHucggmLo.mp4",
  },
  {
    key: "504c7ed0dbf954cd45bc6bffdef156e7c361eaa7",
    value:
      "RAW-VIDEOS/2022vscode/VS Code - Quick Intro to JavaScript-pI1skOo2yjk.mp4",
  },
  {
    key: "a6fb23d80507a219d0e58c209868fdd1421f0a1b",
    value: "RAW-VIDEOS/2022vscode/VS Code - Setup and Basics-SYRwSyjD8oI.mp4",
  },
  {
    key: "ca9ffc8e056a22c32a6a5a759e86bbf3c15b259a",
    value: "RAW-VIDEOS/2022vscode/youtube-dl.exe",
  },
  {
    key: "42716e44b5a94483baae36b4ab22c27404a783fe",
    value: "RAW-VIDEOS/2import",
  },
  {
    key: "2c596efbf17440da14962265dd8da4cfdd261dc4",
    value: "RAW-VIDEOS/2import.1",
  },
  {
    key: "42716e44b5a94483baae36b4ab22c27404a783fe",
    value: "RAW-VIDEOS/bucky-roberts/2import",
  },
  {
    key: "2499180e693cbdf0ebbd55b109072c67bbbfc65e",
    value: "RAW-VIDEOS/bucky-roberts/2import.4.bak",
  },
  {
    key: "05d4ee7fa234d3336da3e8022ce9db838ceca599",
    value: "RAW-VIDEOS/bucky-roberts/9gTw2EDkaDQ.mkv",
  },
  {
    key: "b0238a13179a56d8440fc168f4e7d1d85070ef5a",
    value:
      "RAW-VIDEOS/bucky-roberts/HTML5 Tutorial For Beginners - 5 of 6 - New Semantic Elements-dDn9uw7N9Xg.mp4",
  },
  {
    key: "c2a72ca5b6f88c78fe08364669335a050a735643",
    value:
      "RAW-VIDEOS/bucky-roberts/HTML5 Tutorial For Beginners - 6 of 6 - CSS Page Layout-CPcS4HtrUEU.webm",
  },
  {
    key: "2cad06171a50ad394fdb8a5751e64f6d52ddb0ef",
    value:
      "RAW-VIDEOS/bucky-roberts/HTML5 Tutorial For Beginners - part 1 of 6 - Getting Started-9gTw2EDkaDQ.mkv",
  },
  {
    key: "b6d0ef6cb46110798c7fdbe3a906655e3bfc27ea",
    value:
      "RAW-VIDEOS/bucky-roberts/HTML5 Tutorial For Beginners - part 2 of 6 - Text-YcApt9RgiT0.webm",
  },
  {
    key: "eb0eb58cc8fa0555e3736ef12c6f9045cf6ad356",
    value:
      "RAW-VIDEOS/bucky-roberts/HTML5 Tutorial For Beginners - part 3 of 6 - Images and Hyperlinks-CGSdK7FI9MY.mkv",
  },
  {
    key: "7a349846d18b2178cae914556374441e422b0379",
    value:
      "RAW-VIDEOS/bucky-roberts/HTML5 Tutorial For Beginners - part 4 of 6 - Audio and Video-4I1WgJz_lmA.mkv",
  },
  {
    key: "4d3642a526f5e1dac549370241eaa9c219108278",
    value:
      "RAW-VIDEOS/canvas-git-vscode/200 - Canvas Overview for Students-74677642.mp4",
  },
  {
    key: "fc620b22e39ab920ca73f3b4103913d3faff2fed",
    value:
      "RAW-VIDEOS/canvas-git-vscode/Learn Git In 15 Minutes-USjZcfj8yxE.mp4",
  },
  {
    key: "1c7f613b0c8f3ad6d5d94763d584bec86193ea4c",
    value:
      "RAW-VIDEOS/canvas-git-vscode/My Favorite VS Code Extensions-rH1RTwaAeGc.mkv",
  },
  {
    key: "4d3642a526f5e1dac549370241eaa9c219108278",
    value:
      "RAW-VIDEOS/canvas-git-vscode - Copy/200 - Canvas Overview for Students-74677642.mp4",
  },
  {
    key: "fc620b22e39ab920ca73f3b4103913d3faff2fed",
    value:
      "RAW-VIDEOS/canvas-git-vscode - Copy/Learn Git In 15 Minutes-USjZcfj8yxE.mp4",
  },
  {
    key: "4d3642a526f5e1dac549370241eaa9c219108278",
    value:
      "RAW-VIDEOS/CES-how-internet-git/200 - Canvas Overview for Students-74677642.mp4",
  },
  {
    key: "16cfbf39d2c65a101ee80219c5f28cdaeabe576c",
    value:
      "RAW-VIDEOS/CES-how-internet-git/AMD at CES 2020 in 10 minutes--5-k5l8aaKY.mp4",
  },
  {
    key: "63ad2715f333b8bfa010af8a28b3b0313988fb1f",
    value:
      "RAW-VIDEOS/CES-how-internet-git/How the Internet Works in 5 Minutes-7_LPdttKXPc.mkv",
  },
  {
    key: "fc620b22e39ab920ca73f3b4103913d3faff2fed",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Learn Git In 15 Minutes-USjZcfj8yxE.mp4",
  },
  {
    key: "1c7f613b0c8f3ad6d5d94763d584bec86193ea4c",
    value:
      "RAW-VIDEOS/CES-how-internet-git/My Favorite VS Code Extensions-rH1RTwaAeGc.mkv",
  },
  {
    key: "24ed176f3acbc64291860f4d7e3e845b6b491c6e",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Samsung at CES 2020 in 7 minutes-civQNdOACy0.mp4",
  },
  {
    key: "ee745fac23ccea86c253caacf92329cb695eaa21",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Samsung Bot Chef first look at CES 2020-joo3ikFS0j0.mkv",
  },
  {
    key: "65b5e4603a519d1aa85ec9c3907abe14d3dbf50d",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Screenshot 2020-01-10 at 05.55.01.png",
  },
  {
    key: "367149d6d2ba50d51ad646f3149e4f62ddefa852",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Screenshot 2020-01-10 at 05.55.39.png",
  },
  {
    key: "d232a73f4be822f9e0ad02722f8e2e2c2d0dc27d",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Screenshot 2020-01-10 at 05.57.55.png",
  },
  {
    key: "8bee536dca58860f2952405537b31c63d2676189",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Screenshot 2020-01-10 at 05.58.01.png",
  },
  {
    key: "c100e40c5ca9ee43dd506222e31c48d2dd281c72",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Screenshot 2020-01-10 at 05.58.10.png",
  },
  {
    key: "c00fb730dec266997a42c90661176bc4879d413d",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Screenshot 2020-01-10 at 05.58.15.png",
  },
  {
    key: "c6436dd7e5de92a966fc9d0a7aff7686e8b90ad5",
    value:
      "RAW-VIDEOS/CES-how-internet-git/Screenshot 2020-01-10 at 05.58.26.png",
  },
  {
    key: "cfdfaa36f421c1e03051a7552e3eace3773fc28c",
    value:
      "RAW-VIDEOS/CES-how-internet-git/There and Back Again A Packet's Tale - How does the Internet work.mp4-qEdv_pem-JM.mkv",
  },
  {
    key: "a4d97b9309888fbc58cbf6b8102d4eb426b12985",
    value:
      "RAW-VIDEOS/CES-how-internet-git/These are the coolest and weirdest gadgets at CES 2020-e2a7Xz7kqGg.mkv",
  },
  {
    key: "16cfbf39d2c65a101ee80219c5f28cdaeabe576c",
    value:
      "RAW-VIDEOS/CES-in-LasVegas/AMD at CES 2020 in 10 minutes--5-k5l8aaKY.mp4",
  },
  {
    key: "24ed176f3acbc64291860f4d7e3e845b6b491c6e",
    value:
      "RAW-VIDEOS/CES-in-LasVegas/Samsung at CES 2020 in 7 minutes-civQNdOACy0.mp4",
  },
  {
    key: "ee745fac23ccea86c253caacf92329cb695eaa21",
    value:
      "RAW-VIDEOS/CES-in-LasVegas/Samsung Bot Chef first look at CES 2020-joo3ikFS0j0.mkv",
  },
  {
    key: "a4d97b9309888fbc58cbf6b8102d4eb426b12985",
    value:
      "RAW-VIDEOS/CES-in-LasVegas/These are the coolest and weirdest gadgets at CES 2020-e2a7Xz7kqGg.mkv",
  },
  {
    key: "1e84c0a9895e251f5a7981ae3bbe52d10f5e12b6",
    value: "RAW-VIDEOS/codingheroes-intro-cheat-sheets/html5-cheat-sheet.png",
  },
  {
    key: "20dcbce677eccf1c8bcbe5588fb7848e774c64c8",
    value:
      "RAW-VIDEOS/codingheroes-intro-cheat-sheets/html5-tag-cheat-sheet-2019.pdf",
  },
  {
    key: "5cf5f0abd2551384364e571d03d188a3e0479aa8",
    value: "RAW-VIDEOS/codingheroes-intro-cheat-sheets/L4intro.mp4",
  },
  {
    key: "9cf1fd0e60e186dd9c7f5aab8f6e0c3c862bea83",
    value: "RAW-VIDEOS/codingheroes-intro-cheat-sheets/L5typo.mp4",
  },
  {
    key: "6e1263ab0bb1088c0aa819ada922649e81c2b85c",
    value:
      "RAW-VIDEOS/codingheroes-intro-cheat-sheets/WSU-HTML-Cheat-Sheet.pdf",
  },
  {
    key: "42716e44b5a94483baae36b4ab22c27404a783fe",
    value: "RAW-VIDEOS/colt-steele/2import",
  },
  {
    key: "bf77e170fbeeb934f50bdb6f6aa5db0818647d6c",
    value:
      "RAW-VIDEOS/colt-steele/Angular 5 Tutorial (complete) - Maximilian Schwarzmuller-AaNZBrP26LQ.mp4",
  },
  {
    key: "167a7808cce1d1490ce746e00f889d7afc7e15b2",
    value:
      "RAW-VIDEOS/colt-steele/Angular Tutorial _ Angular Crash Course (2018) - Mosh Hamedani-gCcl2MSzB7I.webm",
  },
  {
    key: "bb80942dd87155729e0f8a952f6d51cf5347a7f8",
    value:
      "RAW-VIDEOS/colt-steele/Angular2 Basics Part 1 - Setup Using CLI - Maximilian Schwarzmuller-hBZQlCYM1IM.mkv",
  },
  {
    key: "444d625500e531c940bef6c1547f88f8ebc99acd",
    value:
      "RAW-VIDEOS/colt-steele/Angular2 Basics Part 2 - Componenets and Appmodule - Maximilian Schwarzmuller-DR300s7DiWo.mkv",
  },
  {
    key: "0a6cf4b00909a8cac16a6ea9c6a7f27f3ba47a41",
    value:
      "RAW-VIDEOS/colt-steele/Angular2 Basics Part 3 - Creating a Component - Maximilian Schwarzmuller-a9RQa6d8eWo.mkv",
  },
  {
    key: "fa03b96093d63301b548b37e0b3fb5a054dcfd44",
    value:
      "RAW-VIDEOS/colt-steele/Angular2 Basics Part 4 - Lists, Events and Databinding - Maximilian Schwarzmuller-FcZhDi2z3FI.mkv",
  },
  {
    key: "3665b758c24bc3a37d175942d8b0295aedb96ac9",
    value:
      "RAW-VIDEOS/colt-steele/Changing Google Web Page - Andrei Neagoie-rrdoRJ69b0M.webm",
  },
  {
    key: "295980fd4e42a2553f68602d0b63322d554f4dfb",
    value:
      "RAW-VIDEOS/colt-steele/CSS Grid - Introduction (complete) - Jonas Schmedtmann-oz0fbFviLIU.webm",
  },
  {
    key: "0fb8fe088d25d3b32092e6eabc3390ddf3351ca8",
    value:
      "RAW-VIDEOS/colt-steele/FAQs  Angular - Maximilian Schwarzmuller-IZszRT5EL_I.mkv",
  },
  {
    key: "aef1ff970c30fb4b8f907dc156578809480dadda",
    value:
      "RAW-VIDEOS/colt-steele/FAQs  React - Maximilian Schwarzmuller-rrZ1xix_g5Q.mkv",
  },
  {
    key: "dd1fcea2e568afdaf6e99315da1ad1235e01508c",
    value:
      "RAW-VIDEOS/colt-steele/Github Tutorial _ In Depth Explanation on Git & Github (DevOps Tools) from Andrei Neagoie-6bjCvZEX52w.webm",
  },
  {
    key: "d5952498a93ca28a85e481daae1cd9b65b5399e4",
    value:
      "RAW-VIDEOS/colt-steele/How Does Javascript Work - Andrei Neagoie-hGSHfObcVf4.webm",
  },
  {
    key: "b26b8643ecf8c052364d13101b7fa8f4dbb191f0",
    value:
      "RAW-VIDEOS/colt-steele/How the Internet Works - Andrei Neagoie-f0No0ZpZC04.mkv",
  },
  {
    key: "f564997cebfa233a926724b5a75c5ad77f7e0cf5",
    value:
      "RAW-VIDEOS/colt-steele/HTML and CSS For Beginners Part 3 - Colt Steele-jBQFnyq7BFI.mkv",
  },
  {
    key: "7c0483676a2263000dcc58ee5601080228bed3e6",
    value:
      "RAW-VIDEOS/colt-steele/HTML and CSS For Beginners Part 4 - Colt Steele-Sr9yAi_q4LQ.mkv",
  },
  {
    key: "cac441a4ccbf783023af7af7c165c38097df152f",
    value:
      "RAW-VIDEOS/colt-steele/HTML_CSS_JavaScript - What is the Difference - Jonas Schmedtmann-GWB1zJCeBT0.webm",
  },
  {
    key: "6610c27692ecc6ce401134ee64e8e22661bd59f7",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript  Prototypal Inheritance - Jonas Schmedtmann-3AKh0-PDsMw.webm",
  },
  {
    key: "f707893eeab79be904cd482e88434fb56e5a64c9",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript - Constructor Functions & the 'this' Keyword - Eric Traub-3NWPXlAqQsg.webm",
  },
  {
    key: "d28d9532a09075b72af9cbbac761a7ddc0fb8941",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript - Intro to Big O Notation and Function Runtime - Eric Traub-HgA5VOFan5E.webm",
  },
  {
    key: "d997d2df5f005165987ff67daee0d3f2bfc81305",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript Binary Tree  - Eric Traub-7_GL0mm0d1U.mkv",
  },
  {
    key: "a858e988b2bbd1da731f613c8018264278e731a0",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript Crash Course - Build a Bitcoin Calculator - Jonas Schmedtmann-OhnOw9_SmIw.webm",
  },
  {
    key: "944d40b07e6623e88c1cf3e8f7f808bd27d31450",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript Hash Tables  - Eric Traub-vRY6ZwbI2Ho.mkv",
  },
  {
    key: "a7029cb2cc278910d8c467dfd96bc95b59d122fa",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript Linked List  - Eric Traub-0cB4D65vsIQ.mkv",
  },
  {
    key: "590f2f140efcbb27a3c0fb8a00f2b10a009d9e27",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript Scoping in 10 minutes! Jonas Schmedtmann-yTW8Jx-4rho.mkv",
  },
  {
    key: "931b5c452bdff3ecba9b78eedb34adbbb6a80503",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript Tutorial for Beginners  (Complete)  - Maximilian Schwarzmuller-ZpU3mEaK0_w.mkv",
  },
  {
    key: "de762881373f672bf48b57f1c02ea3ba21dde54c",
    value:
      "RAW-VIDEOS/colt-steele/JavaScript Tutorial _ Javascript Prototype Object - Eric Traub-GxC2fmOjC1g.webm",
  },
  {
    key: "fe36c9933ca77325507208772e1faf536cabc3af",
    value:
      "RAW-VIDEOS/colt-steele/Node JS for Beginners Part 4 - Running Node js - Edwin Diaz-sIb9aDvsOgE.mkv",
  },
  {
    key: "707728ac1f70a4c617f60659d6cca0f6d44d8dc7",
    value:
      "RAW-VIDEOS/colt-steele/Node JS for Beginners Part 6 - Creating a Server using Node.js - Edwin Diaz-2Mv7QBWup2U.mkv",
  },
  {
    key: "8285dd9462e18d64220931a696f414c44339a827",
    value:
      "RAW-VIDEOS/colt-steele/Node JS Tutorial _ NodeJS Crash Course  - Mosh Hamedani-6oP-c30s7co.webm",
  },
  {
    key: "5f961526f3368230575b9daf0fcc8cd6d9c7a5c3",
    value:
      "RAW-VIDEOS/colt-steele/Node.js for Beginners Part 1  (What is Node.js) - Edwin Diaz-EFxGk7wtCa4.mkv",
  },
  {
    key: "3170b3735b268c0bb1186affc56373f6f58fbee1",
    value:
      "RAW-VIDEOS/colt-steele/Node.js for Beginners Part 2 - Installing Node.js on Windows - Edwin Diaz-d_bi_ZGfcBI.mkv",
  },
  {
    key: "c0b0175a28be02c9b5264f5fb7c47a4f6c0bfc22",
    value:
      "RAW-VIDEOS/colt-steele/Node.js for Beginners Part 3 - Installing Node.js on a Mac OS - Edwin Diaz-C8XCTBut14I.mkv",
  },
  {
    key: "536d43d745c978ea1a1deb52677342c9c1fba51a",
    value:
      "RAW-VIDEOS/colt-steele/Node.js for Beginners Part 5 - Using NPM - Edwin Diaz-raGaSETo12U.mkv",
  },
  {
    key: "ad81773b9f7a5a3752788a2d71bd7aba1adeae07",
    value:
      "RAW-VIDEOS/colt-steele/Promises in Javascript - Andrei Neagoie-hquNrTrcDT0.webm",
  },
  {
    key: "bcc29e9d74fb0bce090e17ee3d319efaf927d762",
    value:
      "RAW-VIDEOS/colt-steele/React JS Tutorial Part 1 - What is ReactJS - Maximilian Schwarzmuller-Zujt4GNIEC8.mkv",
  },
  {
    key: "e7aa31645680996ab25205551aa1a5a18a0bc872",
    value:
      "RAW-VIDEOS/colt-steele/React JS Tutorial _ Learn ReactJS From a Top Udemy Instructor - Maximilian Schwarzmuller-UtIOMUQ7nWM.mkv",
  },
  {
    key: "82e20456a2488a37997df06dc68be4f107d90779",
    value:
      "RAW-VIDEOS/colt-steele/ReactJS and Redux Tutorial Part 1 - Introduction - Maximilian Schwarzmuller-eT7Pk7rOb2c.mkv",
  },
  {
    key: "3249739c14268f839739160f9194e0229a3cb04d",
    value:
      "RAW-VIDEOS/colt-steele/ReactJS and Redux Tutorial Part 2 - Why Use Redux - Maximilian Schwarzmuller-86q4LyE8h3E.webm",
  },
  {
    key: "a8a669295fb28dc94017282b1d3afb7a0ad0dd5d",
    value:
      "RAW-VIDEOS/colt-steele/ReactJS and Redux Tutorial Part 3 - How to Use Redux - Maximilian Schwarzmuller-V-WtkWvJyK4.mkv",
  },
  {
    key: "18554570d8e01b36a3ffe06d942f6119684f976e",
    value:
      "RAW-VIDEOS/colt-steele/ReactJS and Redux Tutorial Part 4 - Working with State and Immutability - Maximilian Schwarzmuller-FiJUHP0ni9c.mkv",
  },
  {
    key: "614c5b49c04bdc7f987c5f079483c9899912185d",
    value:
      "RAW-VIDEOS/colt-steele/ReactJS and Redux Tutorial Part 5 - Multiple Reducers - Maximilian Schwarzmuller-xBYKraiCHVA.mkv",
  },
  {
    key: "a1018e15ef94b144d3d963d87cd5762141916249",
    value:
      "RAW-VIDEOS/colt-steele/ReactJS Basics Tutorial Part 2 - Setup - Maximilian Schwarzmuller-f7JMGyrHqd8.mkv",
  },
  {
    key: "112b83220b5faada517ce715ed5b45434499285a",
    value:
      "RAW-VIDEOS/colt-steele/ReactJS Basics Tutorial Part 3 - Set up Git - Maximilian Schwarzmuller-CHd3W7OmtJQ.mkv",
  },
  {
    key: "a756ddda8c96ef1d88dfffe5c5b9642352aa709d",
    value:
      "RAW-VIDEOS/colt-steele/ReactJS Basics Tutorial Part 4 - First Component - Maximilian Schwarzmuller-DUdjcX4Uz44.mkv",
  },
  {
    key: "7085cf3586b84d2a1320cebe7dfed33c981a33cc",
    value:
      "RAW-VIDEOS/colt-steele/Top 5 HTML5 and CSS3 Questions Answered! - Jonas Schmedtmann-GGjpXlUxeNE.webm",
  },
  {
    key: "05e807c94ba148bc7c17185f0b422462f49602b9",
    value:
      "RAW-VIDEOS/colt-steele/Top 5 JavaScript Questions Answered! - Jonas Schmedtmann-v_05rzEq6oc.mkv",
  },
  {
    key: "3e707db8914ad30ab130ed440b4c58938e9e5abc",
    value:
      "RAW-VIDEOS/colt-steele/Vue JS Project _ Build an App with Vuejs, Vuetify and Firebase Part  2 - Maximilian Schwarzmuller-_41PXqCgEDw.mkv",
  },
  {
    key: "6c3df414fac24151ab88a4be07e9ada4247c4d5a",
    value:
      "RAW-VIDEOS/colt-steele/Vue JS Project _ Build an App with Vuejs, Vuetify and Firebase Part  3 - Maximilian Schwarzmuller-8rkRfma_zls.mkv",
  },
  {
    key: "9a71af94841698386cf124fb59881828c8d8c801",
    value:
      "RAW-VIDEOS/colt-steele/Vue JS Project _ Build an App with Vuejs, Vuetify and Firebase Part 1 - Maximilian Schwarzmuller-CNBIifHRlJw.mkv",
  },
  {
    key: "9744a5150d4e4cb51a4aadae7abbf0ee6b6af7ea",
    value:
      "RAW-VIDEOS/colt-steele/Vue JS Project _ Build an App with Vuejs, Vuetify and Firebase Part 4 - Maximilian Schwarzmuller-Rp1wfHs0GWs.mkv",
  },
  {
    key: "f22b419e374acb8b3b309638a7e6050a2a479b04",
    value:
      "RAW-VIDEOS/colt-steele/Vue.JS Fundamentals Part1 - What is Vue JS  - Maximilian Schwarzmuller-RRJo_TXdqPg.mkv",
  },
  {
    key: "d662fbf2a4aff590916ef73b2e8acbc36289abdd",
    value:
      "RAW-VIDEOS/colt-steele/Vue.js Students FAQs Part 1 - Maximilian Schwarzmuller-OAR0E72hFyA.mkv",
  },
  {
    key: "c9b745a66e467a13fdb273f10e2a298e947e7f46",
    value:
      "RAW-VIDEOS/colt-steele/VueJS2 Basics Part 2 - Events and Methods - Maximilian Schwarzmuller-z5CpaC6FFV4.mkv",
  },
  {
    key: "a7bc44f93e2628fb0cf85e3640e9aab3298f2bff",
    value:
      "RAW-VIDEOS/colt-steele/VueJS2 Basics Part 3 - Binding HTML Attributes - Maximilian Schwarzmuller-SlGUnKnKUe4.mkv",
  },
  {
    key: "8c7abc0e52aa1063327828807a3baf3f9bb5c086",
    value:
      "RAW-VIDEOS/colt-steele/Web Development Tutorial _ HTML, CSS, JS Crash Course (Part 1) - Colt Steele-BU2rjqA_8Y4.webm",
  },
  {
    key: "18e8b959949a77e71c27fde838d5018821b4c539",
    value:
      "RAW-VIDEOS/colt-steele/Web Development Tutorial _ HTML, CSS, JS Crash Course - Colt Steele-eEUavj8-w8U.mp4",
  },
  {
    key: "f411b5360eb75c8f30783e4de692738156f3a98d",
    value:
      "RAW-VIDEOS/colt-steele/Where is the Internet - Andrei Neagoie-kFggNxp4QXM.mkv",
  },
  {
    key: "f564997cebfa233a926724b5a75c5ad77f7e0cf5",
    value:
      "RAW-VIDEOS/colt-steele.1/HTML and CSS For Beginners Part 3 - Colt Steele-jBQFnyq7BFI.mkv",
  },
  {
    key: "7c0483676a2263000dcc58ee5601080228bed3e6",
    value:
      "RAW-VIDEOS/colt-steele.1/HTML and CSS For Beginners Part 4 - Colt Steele-Sr9yAi_q4LQ.mkv",
  },
  {
    key: "7085cf3586b84d2a1320cebe7dfed33c981a33cc",
    value:
      "RAW-VIDEOS/colt-steele.1/Top 5 HTML5 and CSS3 Questions Answered! - Jonas Schmedtmann-GGjpXlUxeNE.webm",
  },
  {
    key: "8c7abc0e52aa1063327828807a3baf3f9bb5c086",
    value:
      "RAW-VIDEOS/colt-steele.1/Web Development Tutorial _ HTML, CSS, JS Crash Course (Part 1) - Colt Steele-BU2rjqA_8Y4.webm",
  },
  {
    key: "18e8b959949a77e71c27fde838d5018821b4c539",
    value:
      "RAW-VIDEOS/colt-steele.1/Web Development Tutorial _ HTML, CSS, JS Crash Course - Colt Steele-eEUavj8-w8U.mp4",
  },
  {
    key: "1d184d2e15858de0529ed0a01ac09dfbe4fe1510",
    value:
      "RAW-VIDEOS/davies-media-design/GIMP 2.10 Basics - Complete Overview Tutorial for Beginners 2018-2EPIUyFJ4ag.webm",
  },
  {
    key: "fff9d75e16cfb9a3cd0945873c1c1aee21f0d02c",
    value: "RAW-VIDEOS/fswd-videos/Dev Tools Videos/1 - DevTools Intro.mp4",
  },
  {
    key: "cd20165d5af45d51010a05284b3c52d74ebfad21",
    value: "RAW-VIDEOS/fswd-videos/Dev Tools Videos/2 - Dev Tools Elements.mp4",
  },
  {
    key: "10ec3194a44745bbdabbf7a2afc65c0ef9faead4",
    value: "RAW-VIDEOS/fswd-videos/Dev Tools Videos/3 - Dev Tools Style.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/fswd-videos/Dev Tools Videos/Thumbs.db",
  },
  {
    key: "3865bb9ae9be33ab9fcb1adf3c78e3bb8bed67c9",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/Express.js Tutorial (Level 1).mp4",
  },
  {
    key: "cb12b28f38c905aeddaf0a4eea40a12731e940c8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/1 - Nd016 Ud109 AJAX REDO Beta L1 01 Intro To AJAX V2.mp4",
  },
  {
    key: "b033ac859f2c7614a775171d5e1d7ea15345fc50",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/10 - Adding The Articles Solution.mp4",
  },
  {
    key: "69570eaf7c89faebdc14431dbe94971f8601c3ca",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/11 - Project Final Walkthrough.mp4",
  },
  {
    key: "2f2de3eace44663f2076b469d7c483f92aafbb78",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/12 - XHR Outro.mp4",
  },
  {
    key: "b38dfa5ff016c5fec0bb51ab5fcbda8319ce06f0",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/14 - Ud109 AJAX L2 13 Code Walkthrough.mp4",
  },
  {
    key: "9fbd67efd61399f12f8067ae14a8f635015929e0",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/15 - Ud109 AJAX L2 15 L Peek Inside $.Ajax().mp4",
  },
  {
    key: "571cc96c8b005e0ea8f57dd37d6beb254103325a",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/16 - Ud109 AJAX L2 25 Walkthrough Of .Ajax Transport Function.mp4",
  },
  {
    key: "eb4ae7bcdcd396ad48a241598ac837e55defdc16",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/17 - Ud109 AJAX L2 33 L Async W Jquery Outro V2 - No Last Line.mp4",
  },
  {
    key: "8ef9d07340ee56b2daaec2c2fea3228841cbac1e",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/18 - Ud109 AJAX L3 01 L Fetch Cake.mp4",
  },
  {
    key: "64a0a74eeb2674ca82ea3527cb9f7264e53437a0",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/19 - Ud109 AJAX L3 23 Project Walkthrough.mp4",
  },
  {
    key: "5e874e601e1c8d34433840c03cbcbb337180cb78",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/2 - Client Server Demonstration .mp4",
  },
  {
    key: "9e5d404fa722928a7b605b82a93d7475bb2891e6",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/20 - Nd016 Ud109 AJAX REDO Beta L3 25 L Fetch Outro V2.mp4",
  },
  {
    key: "8772aa238a0d30b3beae9ad22950c5ac088af287",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/21 - Nd016 Ud109 AJAX REDO Beta L3 26 Course Outro V2.mp4",
  },
  {
    key: "7e876ac657eb6e483d4d1dd46ce68b085f481187",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/3 - Ajax Definition & Examples.mp4",
  },
  {
    key: "e7bec04f602dac019040a6f7f77b03fbf27082ad",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/4 - Nd016 Ud109 AJAX REDO Beta L1 04  Asynchronous Request Example 1.mp4",
  },
  {
    key: "a79c610dcd268878b488c20ab7e797fc1cc175d7",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/5 - API Inspiration.mp4",
  },
  {
    key: "b10f3d9180bcaaef0575a295a8118ef49cf958fe",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/6 - Create An Async Request with XHR.mp4",
  },
  {
    key: "61dd7e5a849814ccf5f45c4f9812afb3c47d3b90",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/7 - XHR Request In Dev Tools.mp4",
  },
  {
    key: "dd6a5e28532f98403af3bd8556b3b9876228991a",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/8 - Project Initial Walkthrough.mp4",
  },
  {
    key: "a30d4d31c4736a7542ef90bfabecd23a0c534310",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/9 - Adding the image.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Asynchronous JavaScript Requests Videos/Thumbs.db",
  },
  {
    key: "733f585a3a2827d61cb5de3e00b9a795689a2398",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/1 - Introduction.mp4",
  },
  {
    key: "90f8ee241402340b1bdbf785f12b8d5575ee5107",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/10 - From XHR to Fetch.mp4",
  },
  {
    key: "5db7365b8d8201f570390ddd73cde81b406354e2",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/11 - Fetch Quiz.mp4",
  },
  {
    key: "d0ca792184f5144471a449ebdd0173cbb8c088e9",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/12 - Fetch Quiz Solution.mp4",
  },
  {
    key: "be670fa392f650e12aca3f42b7fe06196cdd0678",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/13 - Outro.mp4",
  },
  {
    key: "8daa38415fb748fc2bc45e3e8412260bc6552724",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/14 - HTTP Intro.mp4",
  },
  {
    key: "edea4b3a1f6858e0cc80b158fdcb0774cd3fd823",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/15 - HTTP Verbs.mp4",
  },
  {
    key: "2d116184ea5985747a80df0037e94e6004ea6f41",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/16 - HTTP Verbs 2.mp4",
  },
  {
    key: "0ff3efb94f8f41522cf2d49c54e2ab8604a3fc74",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/17 - HTTP Verbs Quiz.mp4",
  },
  {
    key: "6c8ae8407a02099359f9dadd1a653392f22722dd",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/18 - HTTP Verbs Quiz Solution.mp4",
  },
  {
    key: "b9f34964de22895b3206c18ddc09a8af4202ab0c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/19 - Common Response Headers.mp4",
  },
  {
    key: "e7c90583447707eb9c0a1a205553213e8023f2df",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/2 - HTTP Requests.mp4",
  },
  {
    key: "928ef17e9faa8d90c5c60288e34b34156e368b26",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/20 - Request Headers Quiz.mp4",
  },
  {
    key: "0366040bd8377425538fa8303d4eba3293c92e8b",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/21 - Request Headers Quiz Solution.mp4",
  },
  {
    key: "27a5dbefdc9401cbae2a12c4d31bf9c7d9d0303d",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/22 - REST.mp4",
  },
  {
    key: "b15374ba9c32459bb2b827a23251b204b29505d9",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/23 - REST Quiz.mp4",
  },
  {
    key: "1372ac058845249873debf8da681fb7c0d74e2af",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/24 - REST Quiz Solution.mp4",
  },
  {
    key: "70f98db83fa7b936869a97cb72cf4e82f6bc6ed6",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/25 - Performance Basics.mp4",
  },
  {
    key: "86af6e6605d61284ce6eafb4488910966c3e39ef",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/26 - Performance Details.mp4",
  },
  {
    key: "22ba8db55249bd4c5a2bb8d7ef6fabc02df24028",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/27 - Performance Details 2.mp4",
  },
  {
    key: "3b3bcef17e52ae559a1452dfc726df4bb075786c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/28 - Outro.mp4",
  },
  {
    key: "f4a2b7949208f21dec9a93cacef5dbc1b9839da5",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/29 - Introduction.mp4",
  },
  {
    key: "11969a2190acd54d7f273dc1d62eff01263baaf3",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/3 - HTTP Requests 2.mp4",
  },
  {
    key: "1071b6c3a02ee1ed53ffbba1a421074abf2a9be2",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/30 - Securing HTTP.mp4",
  },
  {
    key: "5ef74473bd290989b7bf5afd4187080bbbec677c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/31 - MITM Quiz.mp4",
  },
  {
    key: "95ad6fa9db6d256c3a890f428363c96949876f4e",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/32 - MITM Quiz Solution.mp4",
  },
  {
    key: "3ff899fdffc7a93e5d0267de626c40e16ab48a55",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/33 - MITM_2_Quiz_Setup.mp4",
  },
  {
    key: "7f1a87ef572dc4a2520359f7e06f0e2ad478a4ba",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/34 - MITM_2_Quiz_Setup Solution.mp4",
  },
  {
    key: "a76668826d5d0097894568a8420f14b86aa16214",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/35 - TLS_and_CAs.mp4",
  },
  {
    key: "050f39cdfd87a15f276b6e564ca013ab27cf78ef",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/36 - Crypto Primer.mp4",
  },
  {
    key: "1e85905b762b6cdccbcf9715f0203084380874e6",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/37 - TLS_Hashing.mp4",
  },
  {
    key: "3bd23d472e482f5b814ef6b801eb988b9fc96194",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/38 - Hashing_Quiz_Setup.mp4",
  },
  {
    key: "e0b418f2b99486fc80caf774b3d60ceee112a9c3",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/39 - Hashing_Quiz_Setup Solution.mp4",
  },
  {
    key: "d2c7a5fee6b2390412025ff50b08a465ca1d0fe9",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/4 - Fetching a single request.mp4",
  },
  {
    key: "6edae91c7828bc9562642b4b1e2fa05f1c3c18e8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/40 - Certificate Authority Signatures.mp4",
  },
  {
    key: "7abe1c10721ec554f4114cbc250f855b35f37b4c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/41 - The TLS Handshake.mp4",
  },
  {
    key: "5539b591e76a25455c798c50588e951b16c890ab",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/42 - SSL Error Quiz.mp4",
  },
  {
    key: "b48c953a906036bcdf9b0a40781cae7ef98550b6",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/43 - SSL Error Quiz Solution.mp4",
  },
  {
    key: "151ca535a5086b3fc2480cf25418f3f78f54640a",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/44 - Mixed Content.mp4",
  },
  {
    key: "7d8d61ed6af918aebcef55043f38a51f245efa01",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/45 - HTTPS_Mixed_Content_Quiz_Solution.mp4",
  },
  {
    key: "1daa06faab79a4385fa541d2f48f50c6686c5d59",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/46 - HTTPS_Mixed_Content_Quiz_Solution Solution.mp4",
  },
  {
    key: "b143a127c4e2cd4174232949d86bcb190bb41426",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/47 - Outro.mp4",
  },
  {
    key: "9f85e3006efc06777131f2e4ab50e8097cc6d9a7",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/48 - Intro.mp4",
  },
  {
    key: "bba41f9a28f41f7b128d3ba55e2a9d040c68f220",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/49 - Head of Line Blocking.mp4",
  },
  {
    key: "2954bb7ad6b1bdd2cb299c7545710ff51b560f2e",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/5 - Fetching a single request 2.mp4",
  },
  {
    key: "deb07a1db4c636f49fb4e6e5e48eabcdcb0856cb",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/50 - Uncompressed Headers.mp4",
  },
  {
    key: "363e41d79382da1d7a169dfbf568b39430ab4b48",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/51 - HTTP1 Problem Security.mp4",
  },
  {
    key: "6aff1bfc4e4cba1acaa332f945e04938cf25ffc8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/52 - HTTP/2 Improvements.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/52 - HTTP/Thumbs.db",
  },
  {
    key: "941ace140c7023674e82d8182b0a785e607f47c2",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/53 - HTTP 1 vs HTTP 2 Quiz.mp4",
  },
  {
    key: "a390ebd592d21135777e16b62ce2c883919275b0",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/54 - HTTP 1 vs HTTP 2 Quiz Solution.mp4",
  },
  {
    key: "f136aad77acb0bb5790e35f2348bf3836fa9f0f3",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/55 - Working with HTTP/2.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/55 - Working with HTTP/Thumbs.db",
  },
  {
    key: "458a53e657c5e58911598d61ef94d883d07edbbe",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/56 - Development Techniques Quiz.mp4",
  },
  {
    key: "e0fa2f349b2aeeeb6358c555941831cbcbc9a8cd",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/6 - Getting Multiple Requests.mp4",
  },
  {
    key: "c77691e1f88b8e13d3705d0f4a9ff13eefad115c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/7 - DevTools Quiz.mp4",
  },
  {
    key: "4165da16b6b7d35266fd2c2d0ac345a29618bb71",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/8 - DevTools Quiz Solution.mp4",
  },
  {
    key: "6409ca1ef18a7de0587b560643b11a764c1beb72",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/9 - Sending data with a POST Request.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/Client-Server Communication Videos/Thumbs.db",
  },
  {
    key: "6a07970976323a27e6e107c479b8ad118b9eaf78",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/1 - Nd016 HTTP Anatomy Webservers Lesson 1 P1 Course Intro.mp4",
  },
  {
    key: "edeff5221cfdbc05b9bc3e83f796cc2ffac97874",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/10 - Lesson 1 Outro.mp4",
  },
  {
    key: "7ece8b72c51aeb586c8c70a0e444de38927b582a",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/11 - Lesson 2 Intro Python's http.server.mp4",
  },
  {
    key: "ebcb16514e616383c11a3a72b2b42393558fb451",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/12 - Nd016 HTTP Anatomy Webservers Lesson 2 P2 What About Encode-.mp4",
  },
  {
    key: "b84ef1d56ab8327d428a1307bba39c4122acc682",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/13 - Lesson 2 P3 The Echo Server - No Animation.mp4",
  },
  {
    key: "5868423a512dedd314034e5f22a548ca05ebb7fe",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/14 - Lesson 2 P4 Queries And Quoting.mp4",
  },
  {
    key: "73bbb22ba1a9aec0f69fd12e867282b93e8d9ea0",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/15 - Nd016 HTTP Anatomy Webservers Lesson 2 P5 HTML And Forms.mp4",
  },
  {
    key: "a8774cb14e8074a673300235ba89f6936b33a088",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/16 - Nd016 HTTP Anatomy Webservers Lesson 2 P6 GET And POST.mp4",
  },
  {
    key: "fe62144ac24cf921689d6eaf50f0484d421f08bd",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/17 - Nd016 HTTP Anatomy Webservers Lesson 2 P7 A Server For POST.mp4",
  },
  {
    key: "06da94480c1ed99d50e4f98d95ed185447317a67",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/18 - Nd016 HTTP Anatomy Webservers Lesson 2 P8 Post-Redirect-Get.mp4",
  },
  {
    key: "2e6d706e3f949d178e45bedcb7798217fef77099",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/19 - Nd016 HTTP Anatomy Webservers Lesson 2 P9 Making Requests.mp4",
  },
  {
    key: "c33ecde35fbd328e8c85e0e667a91b5fd0bea977",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/2 - Ud303 HTTP L1 P01 Introduction - Netcat - Screencast.mp4",
  },
  {
    key: "9fd3e1a1a38d05e17a393b2cde54cf0fc880f6db",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/20 - Nd016 HTTP Anatomy Webservers Lesson 2 P10 Using A JSON API.mp4",
  },
  {
    key: "27a6f994750374d14ee30b977f6e182970a726c8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/21 - Nd016 HTTP Anatomy Webservers Lesson 2 P11 The Bookmark Server.mp4",
  },
  {
    key: "4fb3a8af6c70ab89658509b7c162bf08e48abd77",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/22 - Nd016 HTTP Anatomy Webservers Lesson 2 Outro.mp4",
  },
  {
    key: "6b8bf5d0927c314c03fca97f8593b3a214df4769",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/23 - Nd016 HTTP Anatomy Webservers Lesson 3 Intro.mp4",
  },
  {
    key: "c36fe087fdfa6ba5af2252e08700104d216d8e60",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/24 - Nd016 HTTP Anatomy Webservers Lesson 3 P2 Handling More Requests.mp4",
  },
  {
    key: "da642f48179d631676c4c4beb57cea223bd473f0",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/25 - Nd016 HTTP Anatomy Webservers Lesson 3 P3 Specialized Web Servers.mp4",
  },
  {
    key: "f0af096062b283b45b5164bf435c7a6fbcca11d9",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/26 - Nd016 HTTP Anatomy Webservers Lesson 3 P4 Cookies.mp4",
  },
  {
    key: "db11b064dc065fb96439b9af10a24d6df67bbe54",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/27 - Lesson 3 P6 HTTPS.mp4",
  },
  {
    key: "5a66fb6d0e71ebd51d5796b6db7de0383e13b18d",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/28 - Lesson 3 P7 Methods.mp4",
  },
  {
    key: "cafae5ec39b0180c99f0c17cf9f6283dabaec533",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/29 - Lesson 3 P8 Protocol Versions.mp4",
  },
  {
    key: "e3db26426a9c3849596f50c9c8e74214595c594f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/3 - Nd016 HTTP Anatomy Webservers Lesson 1 P2 Your First Web Server.mp4",
  },
  {
    key: "ace05fe2f98a17b03cc3f2b37918764338908d2c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/30 - Nd016 HTTP Anatomy Webservers Lesson 3 Course Outro.mp4",
  },
  {
    key: "004a76f9c56b0a9c991c71ec4a261216eebd0ac2",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/4 - Nd016 HTTP Anatomy Webservers Lesson 1 P3 Parts Of A URI.mp4",
  },
  {
    key: "4c174053427729c9fc930b778ebb139dbfd53904",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/5 - Lesson 1 P4 Hostnames And Ports.mp4",
  },
  {
    key: "fe8a51d41220151dd9af96460de47e3a86127ed2",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/6 - Lesson 1 P5 HTTP Get Requests.mp4",
  },
  {
    key: "562942933a4506a4aacdd71d8e25cd2baa3334cd",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/7 - Ud303 HTTP L1 P05 Get Requests - Screencast.mp4",
  },
  {
    key: "e88f7bccf2be890ec2365720e9432cda2889c493",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/8 - Lesson 1 P6 HTTP Responses.mp4",
  },
  {
    key: "1d145b357866521b8da3d93f0ba32670f9e9eb81",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/9 - Ud303 HTTP L1 P06 HTTP Responses - Screencast.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/HTTP & Web Servers Videos/Thumbs.db",
  },
  {
    key: "e81b7bcbde61ea3053be4d3892283e6c358f1ba0",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/exercise.js",
  },
  {
    key: "ed13806047d780cd868669257ccd45299ea91209",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.es.md",
  },
  {
    key: "c32d991ac92337c7a1ce347d28304b25f26bc2c8",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.fr.md",
  },
  {
    key: "fbc47c23b7238798bae10049d51d3b6bce694690",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.it.md",
  },
  {
    key: "a66c3afe04e9195ecbcc2781b79fcf151345b5c6",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.ja.md",
  },
  {
    key: "16e490a8eb4bcf9c5080ca1556d54a17dfe1b540",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.ko.md",
  },
  {
    key: "c40e36c8a6a0811b142a865168fff7533526b525",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.md",
  },
  {
    key: "51f77e922a0d99606c65894f99a9e681b91cc1e8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.nb-no.md",
  },
  {
    key: "d9342884cbff36f4fb79895caa4ad32d76aeea39",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.pl.md",
  },
  {
    key: "4a5ddf09ed4d0b372de7e387286ef3cbc7f5ad3f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.pt-br.md",
  },
  {
    key: "8ac465b840229351e4da19d0aa912a590bbd8a1e",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.ru.md",
  },
  {
    key: "6781784cca9cf587c4e6aaa0132a03ad8bba7840",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.uk.md",
  },
  {
    key: "afb0eaed960b97f955c8b3a51a96a8fd3a6ae4ab",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.vi.md",
  },
  {
    key: "66924df90636e48f5abcd0603874a5f40e36bca2",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.zh-cn.md",
  },
  {
    key: "796002d800323e10ef71c01f9f9a1cb4c4f86b3c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/problem.zh-tw.md",
  },
  {
    key: "e30221fcbc3eec41d67d55d7a21b14c86b6a4b12",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_client/solution/solution.js",
  },
  {
    key: "e81b7bcbde61ea3053be4d3892283e6c358f1ba0",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/exercise.js",
  },
  {
    key: "ed13806047d780cd868669257ccd45299ea91209",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.es.md",
  },
  {
    key: "c32d991ac92337c7a1ce347d28304b25f26bc2c8",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.fr.md",
  },
  {
    key: "fbc47c23b7238798bae10049d51d3b6bce694690",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.it.md",
  },
  {
    key: "a66c3afe04e9195ecbcc2781b79fcf151345b5c6",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.ja.md",
  },
  {
    key: "16e490a8eb4bcf9c5080ca1556d54a17dfe1b540",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.ko.md",
  },
  {
    key: "c40e36c8a6a0811b142a865168fff7533526b525",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.md",
  },
  {
    key: "51f77e922a0d99606c65894f99a9e681b91cc1e8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.nb-no.md",
  },
  {
    key: "d9342884cbff36f4fb79895caa4ad32d76aeea39",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.pl.md",
  },
  {
    key: "4a5ddf09ed4d0b372de7e387286ef3cbc7f5ad3f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.pt-br.md",
  },
  {
    key: "8ac465b840229351e4da19d0aa912a590bbd8a1e",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.ru.md",
  },
  {
    key: "6781784cca9cf587c4e6aaa0132a03ad8bba7840",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.uk.md",
  },
  {
    key: "afb0eaed960b97f955c8b3a51a96a8fd3a6ae4ab",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.vi.md",
  },
  {
    key: "66924df90636e48f5abcd0603874a5f40e36bca2",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.zh-cn.md",
  },
  {
    key: "796002d800323e10ef71c01f9f9a1cb4c4f86b3c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/problem.zh-tw.md",
  },
  {
    key: "e30221fcbc3eec41d67d55d7a21b14c86b6a4b12",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_collect/solution/solution.js",
  },
  {
    key: "e81b7bcbde61ea3053be4d3892283e6c358f1ba0",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/exercise.js",
  },
  {
    key: "ed13806047d780cd868669257ccd45299ea91209",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.es.md",
  },
  {
    key: "c32d991ac92337c7a1ce347d28304b25f26bc2c8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.fr.md",
  },
  {
    key: "fbc47c23b7238798bae10049d51d3b6bce694690",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.it.md",
  },
  {
    key: "a66c3afe04e9195ecbcc2781b79fcf151345b5c6",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.ja.md",
  },
  {
    key: "16e490a8eb4bcf9c5080ca1556d54a17dfe1b540",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.ko.md",
  },
  {
    key: "c40e36c8a6a0811b142a865168fff7533526b525",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.md",
  },
  {
    key: "51f77e922a0d99606c65894f99a9e681b91cc1e8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.nb-no.md",
  },
  {
    key: "d9342884cbff36f4fb79895caa4ad32d76aeea39",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.pl.md",
  },
  {
    key: "4a5ddf09ed4d0b372de7e387286ef3cbc7f5ad3f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.pt-br.md",
  },
  {
    key: "8ac465b840229351e4da19d0aa912a590bbd8a1e",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.ru.md",
  },
  {
    key: "6781784cca9cf587c4e6aaa0132a03ad8bba7840",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.uk.md",
  },
  {
    key: "afb0eaed960b97f955c8b3a51a96a8fd3a6ae4ab",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.vi.md",
  },
  {
    key: "66924df90636e48f5abcd0603874a5f40e36bca2",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.zh-cn.md",
  },
  {
    key: "796002d800323e10ef71c01f9f9a1cb4c4f86b3c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/problem.zh-tw.md",
  },
  {
    key: "e30221fcbc3eec41d67d55d7a21b14c86b6a4b12",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_json_api_server/solution/solution.js",
  },
  {
    key: "e81b7bcbde61ea3053be4d3892283e6c358f1ba0",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/exercise.js",
  },
  {
    key: "ed13806047d780cd868669257ccd45299ea91209",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.es.md",
  },
  {
    key: "c32d991ac92337c7a1ce347d28304b25f26bc2c8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.fr.md",
  },
  {
    key: "fbc47c23b7238798bae10049d51d3b6bce694690",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.it.md",
  },
  {
    key: "a66c3afe04e9195ecbcc2781b79fcf151345b5c6",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.ja.md",
  },
  {
    key: "16e490a8eb4bcf9c5080ca1556d54a17dfe1b540",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.ko.md",
  },
  {
    key: "c40e36c8a6a0811b142a865168fff7533526b525",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.md",
  },
  {
    key: "51f77e922a0d99606c65894f99a9e681b91cc1e8",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.nb-no.md",
  },
  {
    key: "d9342884cbff36f4fb79895caa4ad32d76aeea39",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.pl.md",
  },
  {
    key: "4a5ddf09ed4d0b372de7e387286ef3cbc7f5ad3f",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.pt-br.md",
  },
  {
    key: "8ac465b840229351e4da19d0aa912a590bbd8a1e",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.ru.md",
  },
  {
    key: "6781784cca9cf587c4e6aaa0132a03ad8bba7840",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.uk.md",
  },
  {
    key: "afb0eaed960b97f955c8b3a51a96a8fd3a6ae4ab",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.vi.md",
  },
  {
    key: "66924df90636e48f5abcd0603874a5f40e36bca2",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.zh-cn.md",
  },
  {
    key: "796002d800323e10ef71c01f9f9a1cb4c4f86b3c",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/problem.zh-tw.md",
  },
  {
    key: "e30221fcbc3eec41d67d55d7a21b14c86b6a4b12",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/http/http_uppercaserer/solution/solution.js",
  },
  {
    key: "d06cb8a9f26a691c2665fc10eed9bcaa0aa3d974",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/NODE JS, HTTP REQUEST.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/http/Thumbs.db",
  },
  {
    key: "b8ceec01fdf12a37a8d813ec0614e9946856ac50",
    value:
      "RAW-VIDEOS/fswd-videos/Node Videos/Introduction to Node.js with Ryan Dahl.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/fswd-videos/Node Videos/Thumbs.db",
  },
  {
    key: "203959bddaa4e82c603f1d9468a8a8589b65cfd5",
    value:
      "RAW-VIDEOS/fswd-videos/Random Videos/Apple WWDC 2018 Highlights.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/fswd-videos/Random Videos/Thumbs.db",
  },
  {
    key: "a4b385918388231a77eef5bae4b72f15c61729cb",
    value:
      "RAW-VIDEOS/fswd-videos/Random Videos/What You Need to Know to be a Backend Developer in 2018.mp4",
  },
  {
    key: "0cdc59e24e32b25e9113bf43b6e772515b74cb92",
    value:
      "RAW-VIDEOS/fswd-videos/Random Videos/What You Need to Know to be a Front End Developer in 2018.mp4",
  },
  {
    key: "d192e759d3cacfba433864fd00e9ef53fe00df6b",
    value:
      "RAW-VIDEOS/fswd-videos/SEO Videos/SEO For Beginners_ 3 Powerful SEO Tips to Rank .mp4",
  },
  {
    key: "67e9696d466a649e096f6f0afe9d5eb196a77cd9",
    value:
      "RAW-VIDEOS/fswd-videos/SEO Videos/SEO for startups in under 10 minutes.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/fswd-videos/SEO Videos/Thumbs.db",
  },
  {
    key: "90520f217ad4c84e8a06c7b1a15bb589971a7d71",
    value:
      "RAW-VIDEOS/fswd-videos/SEO Videos/What is SEO (Search Engine Optimization).mp4",
  },
  {
    key: "aa84f9e3c9aa00d629ecadd0b3913f99633b90e2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/1 - Intro.mp4",
  },
  {
    key: "2b0c9783df63b5c86760a891e69d257779de1c00",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/10 - Exploring the Framework.mp4",
  },
  {
    key: "0c707d6d5de67b196d8a2ceaa8bd4bd2ca7d6e93",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/11 - Applying Bootstrap Grid System.mp4",
  },
  {
    key: "c37d38301267d6a3bc061a943f17b9a56a943c46",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/12 - Applying Bootstrap Grid System Solution.mp4",
  },
  {
    key: "ae71621f6018d81d1e8947cf68e3f9fb23d927b0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/13 - Responsive Page.mp4",
  },
  {
    key: "18a1e94b88ecbe624018b2b682f7e384fc95b6e3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/14 - Responsive Page Solution.mp4",
  },
  {
    key: "1011a62bb73839e188628a5f44c79a17f2881429",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/15 - Using Bootstrap Typography.mp4",
  },
  {
    key: "9663752ecd2509917478d6e516027bf3bf195ed5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/16 - Using Bootstrap Typography Solution.mp4",
  },
  {
    key: "aac3c7e7479c947232390e7479979728efee34c1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/17 - Custom CSS for Your Site.mp4",
  },
  {
    key: "81ae715458904e40b8de44a4e918c0417222f1ac",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/18 - Custom CSS for Your Site Solution.mp4",
  },
  {
    key: "f02a26bae9625bb5964dbb48350620b98a6b83f2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/19 - Watch a Front End Engineer Do This.mp4",
  },
  {
    key: "428ea70aacf680131afec795bce7ae20a041138c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/2 - Site Structure.mp4",
  },
  {
    key: "d276ab6999f0a38ebcb761d9d4d1363cb3556884",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/20 - Watch a Front End Engineer Do This pt. 2.mp4",
  },
  {
    key: "06010787f194d512335bff855e81d43445e34ae8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/21 - A Small Taste of Interactivity.mp4",
  },
  {
    key: "929581a470e4d9393aa6e1db5128286e89e3fc05",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/22 - A Small Taste of Interactivity Solution.mp4",
  },
  {
    key: "d3f6615d7041a16c11f77b26ee0e3c185715bd8f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/23 - Self-built Framework vs Existing.mp4",
  },
  {
    key: "d631b5ed49c1a117fd15c5c1fc9979699b32f1e7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/24 - Conclusion.mp4",
  },
  {
    key: "60bb2601fa60fadc7a784bcf4af337b1bad55164",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/3 - Site Structure Solution.mp4",
  },
  {
    key: "42572a5dbcecd4c452d03ec40f0358d219cc49ed",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/4 - Choosing a Framework.mp4",
  },
  {
    key: "5dd022137f6bbc6b6a335076a4eba62e9ccd4126",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/5 - Reading Documentation.mp4",
  },
  {
    key: "b9ea2a41e16589f14cd7013721d740c4ffbd9f50",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/6 - Reading Documentation Solution.mp4",
  },
  {
    key: "52e76df9cd758a759739475154e85189daa79458",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/7 - Choosing Features.mp4",
  },
  {
    key: "a98087cfc89d442d072453e472b31ffa43c6aacb",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/8 - Choosing Features Solution.mp4",
  },
  {
    key: "310ed5fcca247eafb2adb9927dde731e9a607091",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/9 - Minified CSS Files.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Bootstrap and Other Frameworks Videos/Thumbs.db",
  },
  {
    key: "2b3711f543466ae06dc04b6367cfb8b39167ce64",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/1 - Intro .mp4",
  },
  {
    key: "10f1fbfef09142a65ae91c5b5b56dfdd68a5e055",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/10 - From Idea to Code Solution.mp4",
  },
  {
    key: "c38c57a30823d5f0e3397c1bccee1448413be269",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/11 - Framework version 01.mp4",
  },
  {
    key: "ccbbad7515a2d413c60ac4cc2a5541db19ca0b93",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/12 - Framework version 01 Solution.mp4",
  },
  {
    key: "62966841529af356072b3c1069c89dbcf4001879",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/13 - Negative Space.mp4",
  },
  {
    key: "c75c24ed6c207264d82f7f916a8cea9466aab6a9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/14 - Overflows.mp4",
  },
  {
    key: "b95b51cbc00499274852fd601e308621347887c6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/15 - Media Specific CSS.mp4",
  },
  {
    key: "0d82496cbb9b715409567bdcd30edc2f597d3225",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/16 - Media Specific CSS Solution.mp4",
  },
  {
    key: "f33c6618aacddcbaf21dffa6a1d71d3fbd8bfabf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/17 - CSS Resetting.mp4",
  },
  {
    key: "1a2e1e8e52b95840c9372bf9af5020fc7717fcfc",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/18 - Your Problem Has Been Solved Before.mp4",
  },
  {
    key: "dd8217d8d41e97912be72580b1f7cf7a7b3b2296",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/19 - Applying the Framework.mp4",
  },
  {
    key: "8c088bd7513ee71b762944c772b124286015b69b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/2 - Grid Based Design.mp4",
  },
  {
    key: "29ddf5dbb25731c2bffd4d770836f3af20c9aa4d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/20 - Applying the Framework Solution.mp4",
  },
  {
    key: "9f5744c904dc5dad2f9ddd974ea2cc524ebdfc54",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/21 - Semantic Structure.mp4",
  },
  {
    key: "d72beeaa9cf73200c36ed220d67392a37f7d5bcc",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/22 - Semantic Structure Solution.mp4",
  },
  {
    key: "28e917b3afce177e16ba210c3a44424633c40631",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/23 - Tuning the Page.mp4",
  },
  {
    key: "d2efc22635c7d51aeb4db19a98c02e7faaa8b1dc",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/24 - Tuning the Page Solution.mp4",
  },
  {
    key: "6bfc84ffa695b8b6892d3f1ea0b74ff7a8f741a5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/25 - Continuous Improvement.mp4",
  },
  {
    key: "e2301f7d0f259b42d4db219ac138377b9a4eb04d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/26 - Continuous Improvement Solution.mp4",
  },
  {
    key: "777db9652f8e48055a38b269cf831625f545f166",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/27 - Code, Test, Refine, Repeat.mp4",
  },
  {
    key: "0aec6d4f61f1f5a540fa7db67a4aa6fc94a1ee11",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/28 - Conclusion.mp4",
  },
  {
    key: "f69207c8e12f0fc9081ee7bcab0759716a3b7c07",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/3 - Building a Framework.mp4",
  },
  {
    key: "0e043f515c1b3d56b7e56c76aed97c9d52fc1b88",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/4 - Responsive Web Pages.mp4",
  },
  {
    key: "7c2c134be4f59fdfe4e721c32221e6f597c9cdb1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/5 - Defining the Layout.mp4",
  },
  {
    key: "712ef6544d3887fd82fb82a7c7c5b7d8cb63b291",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/6 - Defining the Layout Solution.mp4",
  },
  {
    key: "88ac1bdb978da10fa270897f66c41620176b77bf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/7 - Creating the Project.mp4",
  },
  {
    key: "65ecf8da902298a834ca93c6c3405147096b9b95",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/8 - Creating the Project Solution.mp4",
  },
  {
    key: "c34b1f467fa6359b12ce5be28c93c984dbe88e63",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/9 - From Idea to Code.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/CSS Frameworks, Responsive Layouts Videos/Thumbs.db",
  },
  {
    key: "bf4f546ead4c97619e69aa222b3b11e49763efda",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/full-stack-web-dev-videos-udacity-respnsive.zip",
  },
  {
    key: "6b7b7f098be3b04fc8e9331080280b54fd5f363d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Add Commits To A Repo Videos/1 - Adding Commits To A Repo - Intro.mp4",
  },
  {
    key: "5a76e01186baf159b1000e5ce6d893ecaf318d4d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Add Commits To A Repo Videos/2 - Outro.mp4",
  },
  {
    key: "41a09beca1a3cbecb0d45a7a25551468f8db6b31",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Create A Git Repo Videos/1 - Creating New Repositories - Intro.mp4",
  },
  {
    key: "c6267d2618ab60e004231fae0825d43872c648c3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Create A Git Repo Videos/2 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L2 38 Create A Repo - Outro.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Create A Git Repo Videos/Thumbs.db",
  },
  {
    key: "3c131f93cb91c17e5febf6cfbda418d15297a422",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Review a Repo's History Videos/1 - Gitfinal L3 01 A Repository'S History - Intro.mp4",
  },
  {
    key: "2ae24a41ec5238f97b56f56294ef625a189b5f9e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Review a Repo's History Videos/2 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L3 11 Git Log Output Explained.mp4",
  },
  {
    key: "d78ed0603b25696696634855b9295b57f242b2c6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Review a Repo's History Videos/3 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L3 25 Git Log Vs Git Log --Oneline Walkthru.mp4",
  },
  {
    key: "6ff260b76bc9617c553cc146b8c656667e9fc146",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Review a Repo's History Videos/4 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L3 27 Confession Corner.mp4",
  },
  {
    key: "95fc7cf67ddd9014efb9847302b13a420931a641",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Review a Repo's History Videos/5 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L3 33 Git Log Vs Git Log --Stat Walkthru.mp4",
  },
  {
    key: "55f1896e6c5f827345d735cf0246a21cda3e5e8e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Review a Repo's History Videos/6 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L3 42 Git Log -P Output Walkthru.mp4",
  },
  {
    key: "d9f89f7b5f41957d0c4105b332513bc8bec0f15c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Review a Repo's History Videos/7 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L3 56 A Repository'S History - Outro.mp4",
  },
  {
    key: "3b0f9ce99f219f0f9667f2e226505aaf37a7c731",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Tagging, Branching, and Merging Videos/1 - Tagging, Branching, And Merging - Intro.mp4",
  },
  {
    key: "f107bda8618920a567ff94c4ad0d6666e9af834c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Tagging, Branching, and Merging Videos/2 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L5 03 Tagging Overview.mp4",
  },
  {
    key: "f6bd3f88a3d10700507d52092a66bb651359a962",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Tagging, Branching, and Merging Videos/3 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L5 26 Branching Overview.mp4",
  },
  {
    key: "6cd432b51442bcfd73a0553cbe8be38029b4c421",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Tagging, Branching, and Merging Videos/4 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L5 54 Content On Different Branches.mp4",
  },
  {
    key: "fd26f4cb1e002d17ff6bec4cf576f055b6ea3f82",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Tagging, Branching, and Merging Videos/5 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L5 71 Merging.mp4",
  },
  {
    key: "d3144eb46d1cc32762a900f20c185f6e13e1fc1c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Tagging, Branching, and Merging Videos/6 - Outro.mp4",
  },
  {
    key: "65885f369df8fa5b1c2847a9f44117ef1a45a9d7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Undoing Changes Videos/1 - Undoing Changes - Intro.mp4",
  },
  {
    key: "1d94a2b5b1bee6b5259fb2f43a8da3e113cf7eed",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Undoing Changes Videos/2 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L6 17 Soft Vs Medium Vs Hard Walkthrough.mp4",
  },
  {
    key: "b194b55ab26528f7016931b06d65da1ad698891c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Undoing Changes Videos/3 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L6 29 Undoing Changes.mp4",
  },
  {
    key: "e0a20c950e748b90735f449ca40d462c3f7fd1d7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Undoing Changes Videos/4 - Gitfinal L6 30 Course Outro.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Undoing Changes Videos/Thumbs.db",
  },
  {
    key: "dff0483994c9394b632f3d940b6eda02d18cbcae",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/1 - Gitfinal L1 01 Welcome.mp4",
  },
  {
    key: "7fa1c24264ceb8df010db1465f39579ead482480",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/10 - Onward.mp4",
  },
  {
    key: "047e605955c1f39223de0bfa3938a3389b5cbe6d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/2 - Gitfinal L1 03 Version Control Systems.mp4",
  },
  {
    key: "8796346fad0292296189bf2c367f3c797945fd0a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/3 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L1 11 Google Docs Revision History Walkthrough.mp4",
  },
  {
    key: "795f1e0a85121106d1dbac95676d63fb5dcf0d7d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/4 - Gitfinal L1 13 Git'S Terminology.mp4",
  },
  {
    key: "265c42f8532e2cdd7d2ed0efca7c6e11f220629f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/5 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L1 15 Git The Big Picture.mp4",
  },
  {
    key: "834125fc3baeee50d7b6d657615fc5ffef598214",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/6 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L1 17 Git The Big Picture 2.mp4",
  },
  {
    key: "1c33c8f1d9605409c49132ec6b00447ec4c81a4a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/7 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L1 18 Recap.mp4",
  },
  {
    key: "ea9389bdda3fbeb13ee4c7ece5dc4f04b5947266",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/8 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L1 23 Configure Terminal.mp4",
  },
  {
    key: "16313ccc42eaee26e468594a26cd72a87f82c0c9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/9 - Nd016 WebND Ud123 Gitcourse BETAMOJITO L1 30 Configure Terminal.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/What is Version Control_ Videos/Thumbs.db",
  },
  {
    key: "aa84f9e3c9aa00d629ecadd0b3913f99633b90e2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/1 - Intro.mp4",
  },
  {
    key: "1e71c972258db3df0566ca182cba3a444a331b6c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/10 - Lesson Wrap Up.mp4",
  },
  {
    key: "a63712d8635ae454944ac200d5a970c305a347e8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/2 - L1 - Remote Repos Intro.mp4",
  },
  {
    key: "86f08c00ea0169f05a858e9bbaf90ff60cecdcb7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/3 - L1 - Sending Branches To Remote.mp4",
  },
  {
    key: "9e8c73447d163d1b181192f30f304fd19a43c32c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/4 - L1 - New Repo Git Commands On GitHub.mp4",
  },
  {
    key: "5a5b363308060185c18bd4e2f9f747bff41a74ad",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/5 - L1 - Git Push In Theory.mp4",
  },
  {
    key: "47f901a8b67807eba726b164e2ee5192a3021a4b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/6 - L1 - Git Pull In Theory.mp4",
  },
  {
    key: "1edf15aa4db5756509df63f03318e4f3817801a2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/7 - L1 - Adding A Commit On GitHub.mp4",
  },
  {
    key: "6f1edd9cab6f769f0009ff21c1c997c30f1a90d3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/8 - Pull Vs Fetch.mp4",
  },
  {
    key: "c31f99442208d349c7ad8c32f3009e149c349239",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Git Videos/Working With Remotes Videos/9 - L1 - Fetch Merge And Push.mp4",
  },
  {
    key: "7036e72888fb68d8fd5130718c3930addc009275",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/1 - The First Step.mp4",
  },
  {
    key: "21d2cfbcadd2d76735b4d4a301ce4de4f2907eed",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/10 - Boxes Everywhere Solution.mp4",
  },
  {
    key: "160ae36c0068b8f78cfca83288bce607aee0c99c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/11 - Boxes, Grids and Rules .mp4",
  },
  {
    key: "cad858101464123a5e84854ec9b63a338bf0a10a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/12 - Boxifying Design.mp4",
  },
  {
    key: "a583f0503f08e3661682273918c315b923f206b3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/13 - Boxifying Design Solution.mp4",
  },
  {
    key: "46b2cd8f236bd58823ef03a7b78c459349d9a3d6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/14 - Interview with Jacques.mp4",
  },
  {
    key: "77fa1b6be610c7b12189a7375e9dcacfe351a1cf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/15 - Boxes To HTML.mp4",
  },
  {
    key: "961aed985fd524dcf72a40d7054d64b735d3f0d7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/16 - Adding Style.mp4",
  },
  {
    key: "55e9ae72368a838bfaa97b06091513f212921336",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/17 - Adding Style Solution.mp4",
  },
  {
    key: "8bd6dba5315da431f9f347d659e2ba1477612acf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/18 - Understanding CSS.mp4",
  },
  {
    key: "336c57420c4e3ff0776f3ef065fa04feb55cc75e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/19 - Styling Up.mp4",
  },
  {
    key: "630826f60f137275420b7b4f9c84251f6738a664",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/2 - Exploring the Web.mp4",
  },
  {
    key: "d4f58c3bc24b294dc399ed71f27a626ba48c7963",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/20 - Styling Up Solution.mp4",
  },
  {
    key: "f1985273318f4be7d388318da628593b10eafd3a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/21 - Using Semantic Tags.mp4",
  },
  {
    key: "754aa52e0f0514aff15f91d8397d8e3c8ff8d67d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/22 - Using Semantic Tags Solution.mp4",
  },
  {
    key: "758fc928e2f8b48451f58939ad1805638544aa17",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/23 - The Box Revisited.mp4",
  },
  {
    key: "fbb48010eab652c161babffab1923804ed9c3636",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/24 - The Box Revisited Solution.mp4",
  },
  {
    key: "891b9a1b4ae34709379e416e4b47d53e2a7aab06",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/25 - Positioning Boxes .mp4",
  },
  {
    key: "3a0f5805ce9e5df027818ab83453c751fbea1944",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/26 - Adding Image.mp4",
  },
  {
    key: "dd887ace52681ae2620e5840ab031d0742e1fd61",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/27 - Code, Test, Refine.mp4",
  },
  {
    key: "4e90a238be4b5ea8561a5f93d72aa5ccf210f893",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/28 - More on DevTools.mp4",
  },
  {
    key: "2c41470f89e13834e6a777c1baae016b4bffc414",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/29 - Comparing with the Design.mp4",
  },
  {
    key: "1127615ff54a2bab2f6e0be2ab06cae371bc3f64",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/3 - Exploring the Web Solution.mp4",
  },
  {
    key: "d8715bae88375e17c4d5a8b096a5152ab86fc40f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/30 - Verifying HTML and CSS.mp4",
  },
  {
    key: "dc2a14b9ce9502b1dc141b7e2795b22aaa7777af",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/31 - Verifying HTML and CSS Solution.mp4",
  },
  {
    key: "fef06d176f7dac59037501b2a6779522849793a9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/32 - Conclusion.mp4",
  },
  {
    key: "d1a4aa0f5076fa8f50a2fe082ed5e68b8df5e0f6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/4 - Page Structure.mp4",
  },
  {
    key: "71f94e6a1a2df8b52c6850851afa9c44a52c6a80",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/5 - Summary of HTML.mp4",
  },
  {
    key: "ad00e8cb6655d38168d37d25de2a7efb7c21871d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/6 - Visual Styling.mp4",
  },
  {
    key: "5610d8c64e9ce76c0a7947e16825c6786fbdf10b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/7 - Visual Styling Solution.mp4",
  },
  {
    key: "f536f688b90e2f72c27939ba392a65a32b808dd0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/8 - HTML-CSS-DOM.mp4",
  },
  {
    key: "a72b7ac16a18ba489526f5c225327cde1c88472e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/9 - Boxes Everywhere.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos/Thumbs.db",
  },
  {
    key: "097f74888617d76ddbc1ef07101bfcc225691385",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos - Shortcut (2).lnk",
  },
  {
    key: "6a8afcf01d4d9414da0fb5119005ea84f92aad31",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/HTML, CSS, and Boxes Videos - Shortcut (3).lnk",
  },
  {
    key: "733f585a3a2827d61cb5de3e00b9a795689a2398",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/1 - Introduction.mp4",
  },
  {
    key: "bfc5456f2838fb6a9515e1efba2fa1698efa1119",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/10 - Running Time.mp4",
  },
  {
    key: "49c89e70c015a4cf9645da7289ef96b2c7a23478",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/100 - Make A Combination Lock.mp4",
  },
  {
    key: "e6452f7c78525aba4d8262b439f4d7ebed117ead",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/101 - Erdos Renyi.mp4",
  },
  {
    key: "9332c57684bfb69d0a76debee43c05810d68c523",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/102 - Initial Foray.mp4",
  },
  {
    key: "6b418aa59086ea011435e17667260e0b64533246",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/103 - Initial Foray Solution.mp4",
  },
  {
    key: "d94c08187cfc1c58f7a851f2cae0242995190b39",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/104 - Properties of Social Networks.mp4",
  },
  {
    key: "c7e89f8f83f1d1024093af59e3a34267d5eceec9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/105 - Properties of Social Networks Solution.mp4",
  },
  {
    key: "e914d15cbbd93be6db06e81fa2ac6745cab13e38",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/106 - Clustering Coefficient.mp4",
  },
  {
    key: "f29a5a3c6b9d581f3f926e2c5dc92db977aba5c3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/107 - Clustering Coefficient Quiz.mp4",
  },
  {
    key: "201615410a6891a8a4d1e6a747aa0a75f4f4e83e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/108 - Clustering Coefficient Quiz Solution.mp4",
  },
  {
    key: "8554085b10166744440e546afa6c35d3e970268f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/109 - Clustering Coefficient Code.mp4",
  },
  {
    key: "8d9c4f98c3da30b87f9708d77107ff9dd8812946",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/11 - Running Time Solution.mp4",
  },
  {
    key: "c6700b8644b44e861dc2b97aca3d0e9ba9ade7e9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/110 - Connected Components.mp4",
  },
  {
    key: "4d3be1728447eee83a0306bbf2c576f4b390d7a2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/111 - Connected Components Solution.mp4",
  },
  {
    key: "193a6806a7099bcc200186a8d0fa8ccd81169e0c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/112 - Connected Components Code.mp4",
  },
  {
    key: "65dac675553c7049165ea0ad0f7ff2a3f7e033e9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/113 - Running Time of Connected Component.mp4",
  },
  {
    key: "ff2e16cef890cece690aa73e8edc85ab7199008c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/114 - Checking Pairwise Connectivity.mp4",
  },
  {
    key: "42857979309330f33bb50920e6610319926dd9af",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/115 - Checking Pairwise Connectivity Solution.mp4",
  },
  {
    key: "f19726e43d9c874a4cb0f28c70c357744960c14a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/116 - Pairwise Shortest Path.mp4",
  },
  {
    key: "e1af366384cf3c4edcc5d72442843471a16f469a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/117 - Depth vs Breadth First Search.mp4",
  },
  {
    key: "888980a501c1b30de079999485e5d1424e7b3742",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/118 - Recursion Replacement.mp4",
  },
  {
    key: "e393f440a155db0762784ab1a45bb2de9ede45b6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/119 - Depth First without Recursion.mp4",
  },
  {
    key: "794ca648705afedf88a8d191d8aa4dea4c63cd40",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/12 - Russian Peasants Algorithm.mp4",
  },
  {
    key: "8203d132716da833bd774adeb7e2fd4ca3f6d52b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/120 - Depth First without Recursion Solution.mp4",
  },
  {
    key: "c4d0fa9506278a55417ffa2834507ad2f82193aa",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/121 - Breadth First without Recursion.mp4",
  },
  {
    key: "bab0b81d27217c08df550558cdc834f28099fc38",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/122 - Searching a Tree.mp4",
  },
  {
    key: "5774b6e4800847a0b520f2044ca9b52bc50db21f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/123 - Searching a Tree Solution.mp4",
  },
  {
    key: "b0ff1e6b113f70df016cbd2d41c3a5f5ac230528",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/124 - Marvel _Social_ Network.mp4",
  },
  {
    key: "cee5204552fe96342d2ea3f4ef4103ef91cce42f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/125 - BFS Code.mp4",
  },
  {
    key: "72b982ca978c32bb181051287a0d57c9f1ccb817",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/126 - Single Source Shortest Paths.mp4",
  },
  {
    key: "dd83454a7339f2b0b5bf5e6c867a9e9e1b3aa1ff",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/127 - Single Source Shortest Paths Solution.mp4",
  },
  {
    key: "ff8da1516b378fb4081d71817192cabb86212e79",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/128 - Centrality.mp4",
  },
  {
    key: "7a3c7977beb199dccafe748a2fbcbb6560bf56bc",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/129 - Bridge Edges.mp4",
  },
  {
    key: "45499554e23ba226f8be5e0431b995275e3d56a5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/13 - Russian Peasants Algorithm Solution.mp4",
  },
  {
    key: "a0a7a38137d3d75d5cada1a81f1b8aa0e045a936",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/130 - Bridge Edges Solution.mp4",
  },
  {
    key: "a08751d5c5f19f0e3b10240f8fd0df7148a536ed",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/131 - Finding Bridge Edges.mp4",
  },
  {
    key: "84e36b2699b3ca3b379d4f1315cdb0127c879576",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/132 - Proof.mp4",
  },
  {
    key: "38898581ccf0192662ed0b738609623248487fe3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/133 - Clustering Coefficient.mp4",
  },
  {
    key: "923ebaeab2ddef0d086f1cd0a190a6041c0e6b5d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/134 - Bipartite I.mp4",
  },
  {
    key: "77fa3f118501be0b70f46e913e17e7c9fe4e9c13",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/135 - Bipartite II.mp4",
  },
  {
    key: "c1881e5108dd5cf97a6036d85f20746dbca0f9df",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/136 - Bipartite III.mp4",
  },
  {
    key: "1577e1d50ecbc28f109ca5ca03a5c1d9b5a5464a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/137 - Bipartite IV.mp4",
  },
  {
    key: "18518ab74db2e687796db0507d3da013b54416d8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/138 - Mark Component.mp4",
  },
  {
    key: "f3a4a4d399be14988e57350d65de4d50ed74d8b8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/139 - Centrality.mp4",
  },
  {
    key: "539a7580d33f5d79500ad737f7c795a6c8eaebe0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/14 - Example.mp4",
  },
  {
    key: "1fb0d2aedd3597c3068fe877deb144f83f8986a3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/140 - Eulerian Tour Revisited.mp4",
  },
  {
    key: "503b9fcb20ccf0158ecfc6d5e644d4493cb4192f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/141 - Clustering Coefficient.mp4",
  },
  {
    key: "fddd684615c26597abee7efc63b344ba9e1d25b6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/142 - Bipartite I.mp4",
  },
  {
    key: "e41ca2ce6706fb7cf013ac2b2926f86491e19f3d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/143 - Bipartite II.mp4",
  },
  {
    key: "8570843e639b33170da0e883e4458edf895021a8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/144 - Bipartite III.mp4",
  },
  {
    key: "4412675d544c42385e4258978dd064474ef5d38e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/145 - Bipartite IV.mp4",
  },
  {
    key: "f303a24180e4fd8d98a572c09cb97d1f300c9929",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/146 - Mark Component.mp4",
  },
  {
    key: "df2b1404a52f39272b1e51f8f550b67ae3696ec9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/147 - Centrality.mp4",
  },
  {
    key: "6b062afc02f818a188a25012a9a38d827aafa272",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/148 - Bridge Edges.mp4",
  },
  {
    key: "8c7cf72d6c349e023b3832d30e6072a5c143e30a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/149 - Welcome.mp4",
  },
  {
    key: "7f7884087c921d5be5ec16a020dfa412621ef7ca",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/15 - Correctness_ Russian.mp4",
  },
  {
    key: "78334fea9878cd9ba9041b9803cc7ad0491f2338",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/150 - Introduction.mp4",
  },
  {
    key: "16d293ed99b2c9d939dfc8c0216bb071a4b59a13",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/151 - Introduction Solution.mp4",
  },
  {
    key: "4f3330a36256ffcee2a98d1a61c3df94cca29110",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/152 - Types Of Centrality.mp4",
  },
  {
    key: "c6bdf323dc6a14facf4e946c55ed9e49dfbfb174",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/153 - Degree Centrality.mp4",
  },
  {
    key: "69fffe4437c6d31502750149c7646a3b86999ccd",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/154 - Degree Centrality Solution.mp4",
  },
  {
    key: "420dff0a17887b3e6f463e0c310dd1fce87a1036",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/155 - Computing Statistics.mp4",
  },
  {
    key: "ad60877d01342496b538332ea586912257f93a4b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/156 - Types Of Statistics.mp4",
  },
  {
    key: "3740331c0c3448965116394a93ddb3eed4e5157e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/157 - Statistics By Sorting.mp4",
  },
  {
    key: "10a8fd7113b6ef8570b7da85f720afc3d2781e43",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/158 - Statistics By Sorting Solution.mp4",
  },
  {
    key: "e31dc201215e3dfcff1c46ea5ed04ae2e5d6e769",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/159 - Statistics On Unsorted Lists.mp4",
  },
  {
    key: "c4486f855239fc76e5f7d72b02f20898052b15b0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/16 - How Many Additions.mp4",
  },
  {
    key: "0b1d74bcded48498eae989b5187ad8bebc1fa93c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/160 - Mean.mp4",
  },
  {
    key: "39ea5338a9a2db15cc0146000299c86c0c0f5693",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/161 - Mean Solution.mp4",
  },
  {
    key: "01cf0fc13964e561cbc190c0e1eab40ca416b0c4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/162 - Extreme Values.mp4",
  },
  {
    key: "07b139c90298cd6335189539ed7ed7d46e93f925",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/163 - Extreme Values Solution.mp4",
  },
  {
    key: "683a692b4bf66ec218136edc28ed3c90570c8000",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/164 - Order Statistics.mp4",
  },
  {
    key: "1cc1c00e28a600d3f942b9c1885b3e1eb5e079e4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/165 - Order Statistics Solution.mp4",
  },
  {
    key: "fd2100a12f72fbbbe8979c92ba22cc8c04135c00",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/166 - Code For 2nd Highest.mp4",
  },
  {
    key: "b4a5f9dc484f4511408ea7e7efcfe76c4c01cc1a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/167 - Top K Problem.mp4",
  },
  {
    key: "874631ac70db736eb2d72dcbba649c48fe252411",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/168 - Top K Problem Solution.mp4",
  },
  {
    key: "3014f5b6a3e59292706a628eb703684fcfcec622",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/169 - Randomized Top K.mp4",
  },
  {
    key: "d59a8ae8080d3fa2cb6847e67728e29e15f7fbba",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/17 - How Many Additions Solution.mp4",
  },
  {
    key: "7f5f4a9e4d86e9093454e9907d35d092dc87ff14",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/170 - Partitioning Around V.mp4",
  },
  {
    key: "c3a28b07c67834c97c20ccc6b66cb6b270bd83eb",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/171 - Partitioning Around V Solution.mp4",
  },
  {
    key: "e11d7abe55156cd775094520cffbb388b33d5bd7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/172 - Top K Via Partitioning.mp4",
  },
  {
    key: "9557095692620c549447e59f1004aaabf65a44a0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/173 - Three Partitioning Cases.mp4",
  },
  {
    key: "5e6b0cba20f079fd3ae1d9e17e0df385b067b37a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/174 - Top K Code.mp4",
  },
  {
    key: "8435f339210246eb43092127f4b35a73a470c629",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/175 - Analysis Of Top K.mp4",
  },
  {
    key: "cbf02db7771bc4e0ff678f3c16e510b18e048799",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/176 - Top K Summary.mp4",
  },
  {
    key: "5428cb6943352da00c586d5771cdd7de41176ba9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/177 - Heaps Of Fun.mp4",
  },
  {
    key: "58749ea2826372f8cd018afec3fe1dc8f995abe0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/178 - Heaps Of Fun Solution.mp4",
  },
  {
    key: "46737f80252da7f281f599917be1da5179b00544",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/179 - Heap Height.mp4",
  },
  {
    key: "123ba9edb16edb66e4c43b1f48dcbaaa0037bd66",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/18 - Which Is Faster.mp4",
  },
  {
    key: "014ab87b1feae5c0dc48ca7dd989800de0491f33",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/180 - Heap Height Solution.mp4",
  },
  {
    key: "31f92c53932690821f91bac8bcda822159f0f909",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/181 - Properties Of A Heap.mp4",
  },
  {
    key: "ae33c819df5130c2d33277d4507d831ccef680b3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/182 - Properties Of A Heap Solution.mp4",
  },
  {
    key: "a4ac3ddb2e45d21f634fe77b2f76cb8717c732c1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/183 - Heap Number.mp4",
  },
  {
    key: "c7ea691fb034908e705fdce5e43e9d8a8663a9ea",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/184 - Heap Number Solution.mp4",
  },
  {
    key: "1b5b3f6b0f30831072fa760105995a5d43ce5198",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/185 - Establishing The Heap Property.mp4",
  },
  {
    key: "6d00776e224752d5ff3b404dc3499eff22a5d2e3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/186 - Establishing The Heap Property Solution.mp4",
  },
  {
    key: "dd8293f9e9758598e387426085f798d982c702f8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/187 - Patch Up A Heap.mp4",
  },
  {
    key: "85cb0912fd86196f78386e944c51e58d60288b58",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/188 - Patch Up A Heap Solution.mp4",
  },
  {
    key: "fdeaf07246f033039b2472a4347073b6c7b8922b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/189 - Down Heapify.mp4",
  },
  {
    key: "a0e1e9e521a0e8ffbc0bec610d60d9eb0f1eb790",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/19 - Measuring Time.mp4",
  },
  {
    key: "efb7d3c0d17e6e2bb0cec18c34f7e8d88b9d9525",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/190 - Running Time Of Down Heapify.mp4",
  },
  {
    key: "01a15e975a942901a774fe0fa2e045a9da7e994c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/191 - Running Time Of Down Heapify Solution.mp4",
  },
  {
    key: "834583e51879b07b9520ba6fe4c9614ecb8160ab",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/192 - Build Heap.mp4",
  },
  {
    key: "d8ed06b84efb1fa31523459a3b04c936de9063f5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/193 - Remove Min.mp4",
  },
  {
    key: "e5bb552381acb1bfc210c74c595dd6bf70b6fb45",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/194 - Remove Min Solution.mp4",
  },
  {
    key: "a34a247859aa9e79c7a3aefc01f71b34199f20e8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/195 - Heap Sort.mp4",
  },
  {
    key: "78a66747842a1391042a5dc83ae159d571a3343e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/196 - Heap Sort Performance.mp4",
  },
  {
    key: "4d4f01bc9b963929efeb503993dc891d93502849",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/197 - Heap Sort Performance Solution.mp4",
  },
  {
    key: "4c01b88e1f27a9ff2ae570d0a8f3dd580752658d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/198 - Inserting Elements.mp4",
  },
  {
    key: "6f440c8343945a95ac246d43720387028913f7dc",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/199 - Build a Heap.mp4",
  },
  {
    key: "e5ab5519063538c62a58df3a85710e057799cd7b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/2 - Magic Trick.mp4",
  },
  {
    key: "d5aec5dca6e563a3c8d7f5726a827695abcef71b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/20 - Measuring Time Solution.mp4",
  },
  {
    key: "d6a2475dba6ae6ba17844813e6241ea0bcae148d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/200 - Finding the Mode.mp4",
  },
  {
    key: "ba990971860623e5d06df662c9cdd0f365927954",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/201 - Up Heapify.mp4",
  },
  {
    key: "5dc2527cbb6f0f197cd258cf6519814a87831897",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/202 - Actor Centrality.mp4",
  },
  {
    key: "ccd2f2f6589b1d6cb0f9241215da2feb730b4194",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/203 - Introduction.mp4",
  },
  {
    key: "910355fb8937cce1cd5cb250917ee98a2b4bbce9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/204 - Save the Turtles.mp4",
  },
  {
    key: "78103c1250607f0aca8bf31d0d5d468b7b626bbe",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/205 - Save the Turtles Solution.mp4",
  },
  {
    key: "5e299e354f704014debd1309e581de2c009e43b1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/206 - Make a Tree.mp4",
  },
  {
    key: "b132cfb9c19923b45a0ea23188456b873e182050",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/207 - Strength of Connections.mp4",
  },
  {
    key: "44a12031f0967596b482fe59881c0981db1c7799",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/208 - Strength of Connections Solution.mp4",
  },
  {
    key: "961f0af5b9a7091c6183ac24e739f9f01ba5a9cd",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/209 - Matrix Multiplication.mp4",
  },
  {
    key: "8f86e834b7a4d606fdd04f5edd5ad9332b32aa2c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/21 - Counting Steps.mp4",
  },
  {
    key: "6d7ddca739bbb0e94863acad311970e53c183bf2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/210 - Weighted Social Networks.mp4",
  },
  {
    key: "3f04cd6df3d105cfd9612f175e5217858b502827",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/211 - Find the Shortest Path.mp4",
  },
  {
    key: "d4e820f30e1563c585547143c1986d2f0251e787",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/212 - Find the Shortest Path Solution.mp4",
  },
  {
    key: "aa988f87dbc810251ce1c3fba7cd60aaef261804",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/213 - How to Find the Shortest Path.mp4",
  },
  {
    key: "97472d29b7a5f570b2086ed7ac3dd72384861516",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/214 - Simulate this Algorithm.mp4",
  },
  {
    key: "1ac9b91d703aaee5025d82c89bcdfb21f7427269",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/215 - Simulate this Algorithm Solution.mp4",
  },
  {
    key: "d5dc593b09b4ded81b26b118b4e7f343e9120730",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/216 - Dijkstra's Shortest Path Algorithm.mp4",
  },
  {
    key: "edc87e4815f8bb3474fa14525f8b1ad3da7a34bb",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/217 - Code for Dijkstra.mp4",
  },
  {
    key: "36f70eec25d10c305d6a0c7bb29f6ea9c47f8e69",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/22 - Counting Steps Solution.mp4",
  },
  {
    key: "017dbc0db68e2ae9b022e369c3b0a1fba9481574",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/220 - Implementing Shortest Distance.mp4",
  },
  {
    key: "d283c7765aa5ccd3109e158b0c141363e1bae57f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/221 - Implementing Shortest Distance Solution.mp4",
  },
  {
    key: "e3b7c3c85b1b21d0ae652eb5ba6f46f7606de8ff",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/222 - Using Heaps.mp4",
  },
  {
    key: "a33f37de2409d317230f06a1ef8170e0b103a3f0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/223 - Using Heaps Solution.mp4",
  },
  {
    key: "12b0bdd98e1c76b9e1d66ffe669528fc20012e97",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/224 - All Pairs Shortest Paths.mp4",
  },
  {
    key: "96e4ff8d69061807e6f24836d7fea87cee573b82",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/225 - Floyd-Warshall Intro.mp4",
  },
  {
    key: "21b9bdf74c85636ebc86143e61d66ee82e51b7d9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/226 - Floyd-Warshall.mp4",
  },
  {
    key: "299a187b4425274b3fcde100beb6f5477baf16aa",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/227 - Randomizing Clustering Coefficient.mp4",
  },
  {
    key: "fe126d1f0304807b9d42d715d6d519364e757370",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/228 - Randomizing Clustering Coefficient Solution.mp4",
  },
  {
    key: "bb9f70fed1c9f59e27e3d5ed9d979002c6c340ce",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/229 - Bounds on the Estimate.mp4",
  },
  {
    key: "91629f2bae8646c0b5891af6939c8c59a59af582",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/23 - Steps For Naive.mp4",
  },
  {
    key: "9bf9efea6458a2ab7a846d07386c0190df2269cf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/230 - Introduction.mp4",
  },
  {
    key: "142d6214b6405a52bc0d4805bba80e1f306a2f72",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/231 - Tetristan.mp4",
  },
  {
    key: "6a8aa45aad821e66482c214d1dfd65be46f074f4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/232 - Tetristan Solution.mp4",
  },
  {
    key: "07213c2d58bf9610c5f1072854b9cf1389c0336c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/233 - Efficient Algorithms.mp4",
  },
  {
    key: "264c2d08c8ac86db9dbc0417e5410ebcb40266ac",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/234 - Exponential Running Time.mp4",
  },
  {
    key: "c9afbdad799a949699b1a143e82dff2f78f51020",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/235 - Degrees of Hardness.mp4",
  },
  {
    key: "226f4965b6f0130a7dd6d86cc2853d65ae6e118b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/236 - Degrees of Hardness Solution.mp4",
  },
  {
    key: "30385653774f559b165a73eac573f0094aa1d45d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/237 - Lower Bound on Complexity.mp4",
  },
  {
    key: "8bb9f3632a8a6d252928ebc439e198407c857b16",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/238 - Lower Bound on Complexity Solution.mp4",
  },
  {
    key: "9bfcb07648ca8e852cf6ad8edc2e020964d98d46",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/239 - Decision Problems.mp4",
  },
  {
    key: "cfaf3608e185f58c1ac1fd76e5400af8bc0257f5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/24 - Steps For Naive Solution.mp4",
  },
  {
    key: "10b220254a6da47a8942deb20d226d8c68fe1378",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/240 - Longest Simple Path.mp4",
  },
  {
    key: "e7e517ba2c61d01101be05e67b825611f1188ae8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/241 - Longest Simple Path Solution.mp4",
  },
  {
    key: "34d5561eea99b3a8c7d455945e43d7270fbadd55",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/242 - Reduction_ Long and Simple Path.mp4",
  },
  {
    key: "8b064e30800ac74f214c8dd2bf63dcff06a547e4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/243 - Reduction_ Long and Simple Path Solution.mp4",
  },
  {
    key: "fd09e6d68a8ba9b0048e99dc1fc39349e51d3c20",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/244 - Polynomial Time Decidable Problems.mp4",
  },
  {
    key: "142424624e28c16a03f68f5fa1be9c22c59c0031",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/245 - Non-deterministic Polynomial Time Decidable Problem.mp4",
  },
  {
    key: "c5a2e8acdac2be845712b1b0fc860fcf3213752f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/246 - Accepting Certificate.mp4",
  },
  {
    key: "1f374eea8781c0117c37a772573d29705d06ab44",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/247 - Accepting Certificate Solution.mp4",
  },
  {
    key: "4a3e116c4624834e118443a5c2dbb8a0b1fa3b87",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/248 - Clique Problem.mp4",
  },
  {
    key: "8e34aaed867777205278809d69bc28e80ab24ef6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/249 - Clique Problem Solution.mp4",
  },
  {
    key: "7cbda63d92d655d256854095fcedfd1e86b89994",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/25 - Halving.mp4",
  },
  {
    key: "7febba50f7d26240b728328abb3711bd1e34395f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/251 - Good Guessing.mp4",
  },
  {
    key: "65aceae0f17c944f93c8c393937bb820766a5159",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/252 - Exponential Upperbound.mp4",
  },
  {
    key: "0c0a2f546329c2d6ac6b6dde01e329339690f99d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/255 - NP-Hard.mp4",
  },
  {
    key: "47e700b9b6cccddad67f7b93c65e66d2b94c499c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/256 - Find the Strangers.mp4",
  },
  {
    key: "7d0e0d313a89a62da382dc62a690d5a28d9c3157",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/257 - Find the Strangers Solution.mp4",
  },
  {
    key: "d873b780945e6e942aa0ddfaf1499ca72b4e3700",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/258 - Reducing to Clique.mp4",
  },
  {
    key: "10217288311d892b58b3dc5759a686241650ea0c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/259 - SAT is NP-Hard.mp4",
  },
  {
    key: "a3c10f3703a1f480e0d1bd330c2c9d59cc008961",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/26 - Halving Solution.mp4",
  },
  {
    key: "89f53b481fda84b4403ed859ba2852fc4129b528",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/260 - NP-Completeness.mp4",
  },
  {
    key: "7ae9240dd2c3e7862dd99fd4a46c6575ea2ea15a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/261 - NP-Completeness Solution.mp4",
  },
  {
    key: "16cff8b600e94930dfdaa15193cded5c9c0dc368",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/262 - Graph Coloring is NP-Complete.mp4",
  },
  {
    key: "bad7eea584e739809435447b88cb7b2b4ed6086a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/263 - Solving 3-Colorability.mp4",
  },
  {
    key: "134e172aba1deeda78ab9b08ad0cb50d370ff2c7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/264 - Solving 3-Colorability Solution.mp4",
  },
  {
    key: "90d6698606a57ec374cf80632cc50758c5a0cbdb",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/265 - Reduce 3-Colorability to SAT.mp4",
  },
  {
    key: "d5608c7fc9f8af65dc82efda216ba0731bd7ffb3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/266 - Generating a Formula.mp4",
  },
  {
    key: "447edfdb10c79bc1a363db8955e4793c8e2453ec",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/267 - Generating a Formula Solution.mp4",
  },
  {
    key: "b0434efbde150ae2682eaeb29a9d93b113b677ab",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/268 - Reduce SAT to 3-Colorability.mp4",
  },
  {
    key: "483841dc5a2d8abb2d2eca52116f1f7fd3469b84",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/269 - Making a SAT graph.mp4",
  },
  {
    key: "e864d11222367022a796b598edddb84ebf41f7c4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/27 - Steps For Russian.mp4",
  },
  {
    key: "6634c8fb78f352dcea90bb3566e7c254474b0da1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/270 - Gadgets.mp4",
  },
  {
    key: "429509c3d1629d8f11153901611301c4bbb8ae29",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/271 - 4-Colorabiity.mp4",
  },
  {
    key: "ccf0cda666a8098d8fc71b3a565928bac4352a4b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/272 - 4-Colorabiity Solution.mp4",
  },
  {
    key: "a8bf25d90a35c960c09d525c2746b27a4d827ca5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/273 - Coloring Planar Graphs.mp4",
  },
  {
    key: "0810334211b2c67ae74ffbd6cf51a762b07f3a96",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/274 - Wrap Up.mp4",
  },
  {
    key: "b7ab6cbbaeb50ee2d99024bf3e5e6846c717cfd1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/275 - Intro.mp4",
  },
  {
    key: "d43b4e99e581c0ae8ba221e46e0dd05767872c39",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/276 - Spy Control Setup.mp4",
  },
  {
    key: "4029a45c9cbb12b5e4bd2dbe08d19562716473d9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/277 - Spy Control.mp4",
  },
  {
    key: "e8e0fada7b4ad8f0b9829855295f92795c4791e3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/278 - Spy Control Solution.mp4",
  },
  {
    key: "61aeabc91df740a94a8da8d7eaeae30b70b75e72",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/279 - Puzzles and Algorithms.mp4",
  },
  {
    key: "4d6e07640549d00bf636925c9bcf8c360a3ecf6a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/28 - Divide And Conquer.mp4",
  },
  {
    key: "b5c8c603e3d74920b93713fd52afb8b559373de9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/280 - Names And Boxes Problem.mp4",
  },
  {
    key: "0117460630d08eedc0d0f6ffd45663b5378200c9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/281 - Big Data.mp4",
  },
  {
    key: "83e43518fb06e7f7cf4694e30b09034effedbfc5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/282 - Statistical Measures In Networks.mp4",
  },
  {
    key: "ec559bc95ee08dd0d83e44ef0db379d62f202ff1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/283 - Homophily.mp4",
  },
  {
    key: "6ce5fcdc690f6d7e383d2f535ffd82f0691c015c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/284 - Homophily Solution.mp4",
  },
  {
    key: "a983604e8cec655a198a8b120c8709f2d16a4a15",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/285 - Social Networks In Security And Politics.mp4",
  },
  {
    key: "46179f24ebbeb61fe0f5426043027ccd70db211c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/286 - Getting To Point B.mp4",
  },
  {
    key: "a30cd83a870051a45c60d1e027096bc3da7e7c7e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/287 - Networks.mp4",
  },
  {
    key: "9a77297a75896b0fd6400bbde1c411963cd5f5cc",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/288 - Networks Solution.mp4",
  },
  {
    key: "1f4ac0c91226d57b04232fe782f7608d0d471e00",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/289 - Practical Algorithms.mp4",
  },
  {
    key: "c70407f6e2b62ae187753e7521ff88fcf8ff091e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/29 - Recurrence Relation.mp4",
  },
  {
    key: "0ec83fc8116b7983e5f5377f50fa4862e01ad78d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/290 - Social Algorithms.mp4",
  },
  {
    key: "9756baba9203e6dc6b77cbd9d6349943e56797b5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/291 - Algorithms In Industry.mp4",
  },
  {
    key: "59b9085b07b7d6f5b3d39a1ed7e9c0d9ff0a89bc",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/292 - Learning More About Crunching Social Networks.mp4",
  },
  {
    key: "fe3f2e950345a316fce96a85d6bb96f43af14e81",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/293 - The Future.mp4",
  },
  {
    key: "5473cb3655d6d1045373ed921f5bc234147a370d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/294 - Duncan Watts.mp4",
  },
  {
    key: "27f4caac674572e0d80464e5982d36b0622474d2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/295 - Intro to Music Video.mp4",
  },
  {
    key: "777cab0cd004d7c967dc6ba06ccf49a87e3aa594",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/296 - Pathway That Can Use Two Nodes.mp4",
  },
  {
    key: "f881635a97c7209c0426cb67111ac660cceef4c8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/297 - Intro to Graph Search Animation.mp4",
  },
  {
    key: "fb91c5f8abf16c28c372669efb4ebac4deb24263",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/298 - Graph Search Animation.mp4",
  },
  {
    key: "c331ffe2ff276eff7616511f8b969a278c3fd5a7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/299 - Wrap Up.mp4",
  },
  {
    key: "0ec7b98c5c11f5539634c363956dd7ef04edce27",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/3 - Magic Trick Solution.mp4",
  },
  {
    key: "06553b6b35d68f61dd7ae63c88e772d7675d3ce1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/30 - Recurrence Relation Solution.mp4",
  },
  {
    key: "8657303f6f561d8311a7ea2655c53af4f1a08baa",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/300 - Top Two.mp4",
  },
  {
    key: "dda44a18ff007963df764ec2b2f58ae30794eb65",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/31 - Eulerian Path.mp4",
  },
  {
    key: "5c854838fa0188acc04c8d98598ef514c931401b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/32 - Eulerian Path Solution.mp4",
  },
  {
    key: "0d9e26c0fbb0f4991953d916153c230e99a40138",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/33 - Counting Eulerian Paths.mp4",
  },
  {
    key: "96b61d302d2ce75056513ff1317b9bdbc197dee0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/34 - Counting Eulerian Paths Solution.mp4",
  },
  {
    key: "5acc50a91b9634d402607624ed256aa815241c0d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/35 - Create Graph With Eulerian Tour.mp4",
  },
  {
    key: "e04102bdc25b6d0ec897d08f9eb025b1a3bc7b36",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/36 - Create Graph With Eulerian Tour Solution.mp4",
  },
  {
    key: "57438899452adcd7f2981787d9b56215364e4548",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/37 - Representing A Graph.mp4",
  },
  {
    key: "3240c5f4e18d1fd345646e4c305377c3c5f6be06",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/38 - Naive Multiplication Algorithm.mp4",
  },
  {
    key: "49816fccc5365a80fc4cdeb835a3e5678e95dfa2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/39 - Naive Multiplication Algorithm Solution.mp4",
  },
  {
    key: "f56c281941f3d950142f8f9c92197f85fef91e47",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/4 - Eulerian Path.mp4",
  },
  {
    key: "b15406bb4575f282a7b46ef30f2c264de3792a09",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/40 - Recursive Naive.mp4",
  },
  {
    key: "cbe752f2701df72f4c920120af8d650bb5232f91",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/41 - Recursive Naive Solution.mp4",
  },
  {
    key: "671fd744fdf91954475a54f5b52a610ce7a7bada",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/42 - Russian Multiplication Algorithm.mp4",
  },
  {
    key: "2055b776400e301ff8f32d612839cb5c956729b8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/43 - Russian Multiplication Algorithm Solution.mp4",
  },
  {
    key: "5be2f71e395f6cd56e9188c777ca9f5fe0a1722c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/44 - Clique.mp4",
  },
  {
    key: "888b7bbfa14c076846dd893860701d948efc1f32",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/45 - Clique Solution.mp4",
  },
  {
    key: "15674994eeb163af1c50149d7084a86077ead8c5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/46 - General Clique.mp4",
  },
  {
    key: "17d7ac322030220dc96dabc159f4f1c443c6f6a6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/47 - General Clique Solution.mp4",
  },
  {
    key: "47ea6d9940e59e0aaf2ef9dd6f05b8dbbfa41c4e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/48 - Challenge Find Eulerian Tour.mp4",
  },
  {
    key: "357eee1d52a5b1d94071c663b2d90137348227c8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/49 - Introduction.mp4",
  },
  {
    key: "c3a52b2eb8da7e71499918767cf4585b8127ac64",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/5 - Eulerian Path Solution.mp4",
  },
  {
    key: "8aa93186ffe02b1e79ea4d0926ce61876940f526",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/50 - Divisible By Five.mp4",
  },
  {
    key: "c8f438535388bac0fa03241b122fa5ec1ef0a31f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/51 - Divisible By Five Solution.mp4",
  },
  {
    key: "940cec9e5d61fce79daa15b2317d90242650c6d6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/52 - Chain Network.mp4",
  },
  {
    key: "2d89a5691458bc6afc7091f6989563996a8535df",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/53 - Chain Network Solution.mp4",
  },
  {
    key: "858063a9032e949f2bf02d548de1819595a15c4c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/54 - Ring Network.mp4",
  },
  {
    key: "99813d52948f4c468d9701416e1a23d2eb468d45",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/55 - Grid Network.mp4",
  },
  {
    key: "e5bb2fdde0d3745702411acfc211e3345c309f43",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/56 - Grid Network Solution.mp4",
  },
  {
    key: "05e8c67e46388161fa9f4de614b95036c452d730",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/57 - Big-Theta.mp4",
  },
  {
    key: "edcef3fe09d7826e28cebfdb23e060b50ee75509",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/58 - Big-Theta Reflexive.mp4",
  },
  {
    key: "5068db297bce08ef0df037038fb3070f8c492d79",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/59 - Big-Theta Reflexive Solution.mp4",
  },
  {
    key: "3aef25965b7e3c8d1d01cdc4d9f624e879f32595",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/6 - Algorithms Are Cool.mp4",
  },
  {
    key: "0afd9ab5b3e61d10f5babcecf4672c618858543f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/60 - Big-Theta Examples.mp4",
  },
  {
    key: "c0140c0fc5417b3aa3ae88f5c4915bfd2758b3ff",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/61 - Other sets of Functions.mp4",
  },
  {
    key: "834cb142f40152b13e659b30b806d27fa6967b11",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/62 - Big-Theta Practice.mp4",
  },
  {
    key: "610da7189e10f3b79bcf8ee4a439e06410fd025e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/63 - Big-Theta Practice Solution.mp4",
  },
  {
    key: "ef52cefdb4538194b5aa654b05c315aa1328a3ed",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/64 - Planar Graphs.mp4",
  },
  {
    key: "272c242531eeb2aaf6f2649c359e06a3c59880b6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/65 - Nodes, Edges, Regions.mp4",
  },
  {
    key: "81fa12dbe75d7bf97fa8809cbaaacf3bea7e4819",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/66 - Regions In A Planar Graph.mp4",
  },
  {
    key: "fcad97c4494015020dfa6e15dc45de62ba065ec1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/67 - Regions In A Planar Graph Solution.mp4",
  },
  {
    key: "d6f00e30ba6fbe1540d5643d18d0a1018645e4f8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/68 - Eulers Formula.mp4",
  },
  {
    key: "daae67af6c54468fd4c7c7521a2a9d0af8cbf669",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/69 - Growth Rates.mp4",
  },
  {
    key: "79c39d6fbee9124233da6f8a20bfd7b55e57e4c5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/7 - Case Study.mp4",
  },
  {
    key: "a2d38821df1b3918764353ed77e1bacc96efbf4c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/70 - Complete Graph.mp4",
  },
  {
    key: "f813ab1d9fa1168cfba9c7e441fed2fe0a9c8926",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/71 - Complete Graph Solution.mp4",
  },
  {
    key: "26dc60d1a8ededbe6dfdd10f413fc4ac6dadbce3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/72 - Hypercube.mp4",
  },
  {
    key: "f1f735dec48d1d8f8c18da5ec4e8c6d71b3904fe",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/73 - Hypercube Edges.mp4",
  },
  {
    key: "f1d17899beea66a6398fc6975e0597da5bd3539f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/74 - Hypercube Edges Solution.mp4",
  },
  {
    key: "73d2b36742d4eb7fcf5732344016843e3d5281b5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/75 - Tree Graphs.mp4",
  },
  {
    key: "aeffe48347f2080408f58bb89bdde07323344cd3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/76 - Tree Graphs Solution.mp4",
  },
  {
    key: "988124f904d7570bca14221e084ab13e0d1cb5ff",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/77 - Randomly Generated Graphs.mp4",
  },
  {
    key: "d9d6e200e5bce2a3ba04b74de4c6ac3310119d1d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/78 - Recursive Graphs.mp4",
  },
  {
    key: "f11cf8f3362e95214740dfe0e842876aa91d1a3b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/79 - Recursive Graphs Solution.mp4",
  },
  {
    key: "4318b41b62c511899d150c4e94fadf426c8ef7fe",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/8 - Case Study Solution.mp4",
  },
  {
    key: "51f54b1bc0c45de861321725da75635af4d3fbc4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/80 - Recurrence Relation.mp4",
  },
  {
    key: "fa4bd4eb1eb0ae7a3a9cb00801fe3b0b7ecc6b85",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/81 - Recurrence Relation Solution.mp4",
  },
  {
    key: "99cc9a1065e8ffde248e71071affb23648bdfc1a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/82 - Number Of Edges.mp4",
  },
  {
    key: "df58089caad7fd4ec469753e5c9c9e28a6a730d4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/83 - N Squared.mp4",
  },
  {
    key: "1cfff2370ba07ca23d051b90ac32307cf2650114",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/84 - Tangled Hypercube.mp4",
  },
  {
    key: "cd17e557460d8f47f9a6b3fa46b2affcb883cb91",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/85 - Tangled Hypercube Solution.mp4",
  },
  {
    key: "4ed6ce2a1b57007e8cd4d63e930445f4e83f128d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/86 - Recap.mp4",
  },
  {
    key: "635481a76ecb5be6c9ac8a26e9a8c6f4f90a4cfa",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/87 - Star Network.mp4",
  },
  {
    key: "0c6eea35ab24bf71aaa6fe39f9ea3594e6ca2eb8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/88 - Recurrence Relation.mp4",
  },
  {
    key: "f8b6d79a91e9d73fa6a97fe5fe6d33272d8bc74b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/89 - Subsets.mp4",
  },
  {
    key: "1317163b68e4bb23ff1dc16896d2d9654f38bebd",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/9 - Correctness_ Naive.mp4",
  },
  {
    key: "f53681b7a66b647c20b664ff0a5b5511d959855b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/90 - Function Comparision.mp4",
  },
  {
    key: "74377a5db590f0da6a0e9935d63ceba30da4a6fd",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/91 - Planar Graphs.mp4",
  },
  {
    key: "2a756f14ca7b90aeaed9a82d6d3ee24e1620ebaf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/92 - Combination Locks.mp4",
  },
  {
    key: "44a025bc21b6271d22b5aa6aa3591a4946fea368",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/93 - Make A Combination Lock.mp4",
  },
  {
    key: "c7dd6ec815c79ca9929021f268c88a950ad0692b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/94 - Erdos-Renyi.mp4",
  },
  {
    key: "3a2cdb4e4fcaf7ddb546434c4d9ee6f6b25d7ac9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/95 - Star Network.mp4",
  },
  {
    key: "e34be1f0382fbe86b6d9b929d8cbfebd04ad638a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/96 - Subsets.mp4",
  },
  {
    key: "00b6c51e8b3fcf93809439a18235b8a1f007ebac",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/97 - Function Comparision.mp4",
  },
  {
    key: "849d951e8c3bd1569375cc5d9f3479c5cebc735d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/98 - Planar Graphs.mp4",
  },
  {
    key: "36afedff8106082baf795cc478e54edbfb680844",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/99 - Combination Locks.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Algorithms Videos/Thumbs.db",
  },
  {
    key: "6882059462a26653ee64302ee1e48240a20ede87",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/1 - Welcome to RDB.mp4",
  },
  {
    key: "1f2022079e9f446a85ded5e81b57d9fa3af948b7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/10 - Answering Questions from a Table.mp4",
  },
  {
    key: "ae2c2a43f4b4e917295362828fd7705ba4908b16",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/100 - Course Outro.mp4",
  },
  {
    key: "7cb4d44fc7c10c3d802a50529e7afdc95bcc1374",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/11 - Answering Questions from a Table Solution.mp4",
  },
  {
    key: "089b82879f5e96c44829f4f4009bb112349b919f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/12 - Answering Questions from a Table.mp4",
  },
  {
    key: "58c511ad3647260059b473f1b8fd7a89c30a114d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/13 - Answering Questions from a Table Solution.mp4",
  },
  {
    key: "361dd0dd784b7de622d3f54ad32641b8bfb362da",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/14 - Aggregations.mp4",
  },
  {
    key: "5666dbb9ff2222ac2cd07fc15aedc8e40641cddb",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/15 - Queries and Results.mp4",
  },
  {
    key: "71307072e5e364f41d98a8864b816055c7f6f47b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/16 - Queries and Results Solution.mp4",
  },
  {
    key: "34d563183aa9f3715ca945f90e5dae470999066f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/17 - How Queries Happen.mp4",
  },
  {
    key: "9803e6248df5b6bf328da7e3326359c006d3e349",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/18 - Favorite Animals.mp4",
  },
  {
    key: "0b9686e861a1be629b55971c71454d3655bac029",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/19 - Related Tables.mp4",
  },
  {
    key: "c332e267c6a099ff1ba6b8256237fd7d4520136e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/2 - What's a Database - Intro to Relational Databases.mp4",
  },
  {
    key: "22d1b8e5e5b3e3d91a6228f1f8ee4428343c3453",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/20 - Uniqueness and Keys.mp4",
  },
  {
    key: "678a4b2bae8760777266688509d502897f0d7006",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/21 - Primary Key.mp4",
  },
  {
    key: "583f39777fc5badc26433621c56d41be391c2b7e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/22 - Primary Key Solution.mp4",
  },
  {
    key: "cf9e30964aa190340b3b61a32d163647d745b11d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/23 - Joining Tables.mp4",
  },
  {
    key: "ff32a4ada7178dac81177c27fc34d32ad3310c48",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/24 - Database Concepts.mp4",
  },
  {
    key: "4a9bd24be9181631908df61a4be3bc9923fc804d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/25 - Database Concepts Solution.mp4",
  },
  {
    key: "ac560498c6c8e9d71d7617080dcf07ee6b1e654e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/26 - Summary.mp4",
  },
  {
    key: "27b053cc6e4a0becaaea2bc4d6967911613b48cf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/27 - SQL is for Elephants.mp4",
  },
  {
    key: "85cbd59f527f34159b443a44e630ddefd32eb295",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/28 - Talk to the Zoo Database.mp4",
  },
  {
    key: "14c07e0a85544027eb84b97efc542b71a1cb39ab",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/29 - Talk to the Zoo Database Solution.mp4",
  },
  {
    key: "104687c165f07ff0b49c7ea35b0546f1f6e00584",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/3 - Looking at Tables.mp4",
  },
  {
    key: "2e193513fa061b28ccafe6ee20d65f84f00a892e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/30 - Types in the SQL World.mp4",
  },
  {
    key: "c93e142b102ad91dd438e38d77ffe4d8cde05d14",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/31 - Select Where.mp4",
  },
  {
    key: "c4ed68716ee6944bae1060fcd6a1f9d632568254",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/32 - Select Where Solution.mp4",
  },
  {
    key: "780612843c382d11ce3d880a8cbd9f4d1ff0a581",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/33 - Comparison Operators.mp4",
  },
  {
    key: "7dbb733460814a1a74d6d55c3f059e4e5be94107",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/34 - Comparison Operators Solution.mp4",
  },
  {
    key: "6fd5d31e22672fbc9fdbb1dfdb8f3168b84cc8ea",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/35 - The One Thing SQL is Terrible At.mp4",
  },
  {
    key: "0dc40e4c54e2b019ee712a7bf80ddbb8bbe6430a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/36 - The Experiment Page.mp4",
  },
  {
    key: "c15bd0e934116a40c272a064ed040e3eae3fcc23",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/37 - Select Clauses.mp4",
  },
  {
    key: "fce317bbad08b812d47e282fa245e3d87675cfda",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/38 - Select Clauses Solution.mp4",
  },
  {
    key: "46d753299f899d61fa1401192d8c55a15b1d7955",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/39 - Why Do It in the Database.mp4",
  },
  {
    key: "bd5a16d6c4b2cfc4f2c34e3fef3a4a45eaaf8f9e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/4 - Looking at Tables Solution.mp4",
  },
  {
    key: "621189d9d32ec4536a4f20f33aa0553898430649",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/40 - Count all the Species.mp4",
  },
  {
    key: "49be6f36a4229672818b1ace102b20d3f7ffa283",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/41 - Count all the Species Solution.mp4",
  },
  {
    key: "ad95253ae8aaf8ac9d231085f2969fa10ee3e451",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/42 - Insert_ Adding Rows.mp4",
  },
  {
    key: "d03ce53298e14cabcdacc06e9c5ab21f63ac7d68",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/43 - Insert_ Adding Rows Solution.mp4",
  },
  {
    key: "a5a9893adb9b122ab3ff4bc862ffbb19a4144b8f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/44 - Find the Fish Eaters.mp4",
  },
  {
    key: "f00ec830fc9169ff5a967ebfe473095ec5bfeb25",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/45 - Find the Fish Eaters Solution.mp4",
  },
  {
    key: "4238f0c54e1ba01663903c7da1db129680f8e1de",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/46 - After Aggregating.mp4",
  },
  {
    key: "8c52dcccd977ce42adead316e3e871c01a4edbf7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/47 - After Aggregating Solution.mp4",
  },
  {
    key: "efaf95629f35e6d3088359ab3e4205b5b4466529",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/48 - More Join Practice.mp4",
  },
  {
    key: "38cbc94b071156901d9ae03e05ddb714e22b617e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/49 - More Join Practice Solution.mp4",
  },
  {
    key: "7c55981f95496bf90074b8dca5c97dc0953087cc",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/5 - Data Types and Meaning.mp4",
  },
  {
    key: "d24fd95acf4036be9f81eb90e369c8161864551d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/50 - Wrap up.mp4",
  },
  {
    key: "2685c34ae0009ef053ef6603a6ef4a5f4b52a09d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/51 - Welcome to your Database.mp4",
  },
  {
    key: "14621523c61e3adf12d141421e2ac1ea4e43a3d1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/52 - What's a DB-API.mp4",
  },
  {
    key: "694bcfd45c18953d1b8bf681c26b2e10bdba0129",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/53 - Writing Code with DB API.mp4",
  },
  {
    key: "aad8276d7af7e261f0ea05d895c26dbbcc64ae65",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/54 - Trying out DB API.mp4",
  },
  {
    key: "afd190d9b55d1651742aa08b8bd2dc8bc505b407",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/55 - Trying out DB API Solution.mp4",
  },
  {
    key: "c19c58ac096fb8222fb634a201c7755630e515a1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/56 - Inserts in DB API.mp4",
  },
  {
    key: "6dc4783fca1867a9b1c51c833562f45abd46f00a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/57 - Inserts in DB API Solution.mp4",
  },
  {
    key: "5c0fd55456cc7627cf14e35464881c3ec446fc6a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/58 - Running the Forum.mp4",
  },
  {
    key: "6672a7a267a643cbcd186abee355e4c45566eced",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/59 - Hello PostgreSQL.mp4",
  },
  {
    key: "c162a5270350bd6aa16989f08123a548f6db0a56",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/6 - Data Types and Meaning Solution.mp4",
  },
  {
    key: "c9f8a6fc68d2d399f56f431343559f42aeb27373",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/60 - Give that App a Backend.mp4",
  },
  {
    key: "603c2b5f0019d69c9f28d650499b36f6d17388d2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/61 - Give that App a Backend Solution.mp4",
  },
  {
    key: "92f9d4b6dfb96ce47d956163611cdf82b403db2d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/62 - Bobby Tables Destroyer of Posts.mp4",
  },
  {
    key: "c8920626c434aa13a40b3dba39b1250030f5d5d7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/63 - Curing Bobby Tables.mp4",
  },
  {
    key: "6ea5b2c3be6b7a7de259c4514ebd41de3b4e72f2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/64 - Curing Bobby Tables Solution.mp4",
  },
  {
    key: "f17d6aa327de75ad5c7ccd9fdcd6979ddfbde6c1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/65 - Spammy Tables.mp4",
  },
  {
    key: "51f48e345ff0af19a1be24c13ca9719cf92297a7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/66 - Stopping the Spam.mp4",
  },
  {
    key: "f42bc09a8cf52258c96ec70539071a7548256c7f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/67 - Stopping the Spam Solution.mp4",
  },
  {
    key: "f26242cc662109d8f2a3bb077344ba6af144ea80",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/68 - Updating Away the Spam.mp4",
  },
  {
    key: "7295fb0e312f9c6106fa57eb4408175979e53c41",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/69 - Updating Away the Spam Solution.mp4",
  },
  {
    key: "49c52e1a0e30484bcd5a6930bd512ca43c46dd38",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/7 - Data Meanings.mp4",
  },
  {
    key: "49e034092f0752dab70ec679b752c81d84c02938",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/70 - Deleting the Spam.mp4",
  },
  {
    key: "bc98db82b348c9ea237619d3c1ff5d3dfacae1a1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/71 - Deleting the Spam Solution.mp4",
  },
  {
    key: "cf795316c227a0369b8b615840ab412948c12f94",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/72 - Conclusion.mp4",
  },
  {
    key: "08c499a7ea7f6cb3031c74f86df1b690f60d0050",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/73 - Intro to Creating Tables.mp4",
  },
  {
    key: "2ec7fd369d9578c9b41641f6bae93f81536861b1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/74 - Normalized Design Part One.mp4",
  },
  {
    key: "1b822ce63c0c9e60e04283bb63b5602e88c77740",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/75 - Normalized Design Part Two.mp4",
  },
  {
    key: "626a2e857930379604e5b7dab713af2fd4fee883",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/76 - What's Normalized.mp4",
  },
  {
    key: "44f27e9e875a6aec5684c1e93aba5eea1cac174a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/77 - What's Normalized Solution.mp4",
  },
  {
    key: "770424811c88eb3224e021939215a802becd742f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/78 - Create Table and Types.mp4",
  },
  {
    key: "aeefc52b615252a7702fe099fe38f75fb5ed5e9f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/79 - Creating and Dropping.mp4",
  },
  {
    key: "dc1a93b8bfe00dd6cd653d4b47efdf6efcb33d11",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/8 - Data Meanings Solution.mp4",
  },
  {
    key: "2e10e2cca535168695cbb40e3c18695a0ae37161",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/80 - Creating and Dropping Solution.mp4",
  },
  {
    key: "243e3402f89a283b819ff39cec411ad43cdedbeb",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/81 - Declaring Primary Keys.mp4",
  },
  {
    key: "341b8bffaf7002dd2d0a576028cdcbe067e3558a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/82 - Declaring Primary Keys Solution.mp4",
  },
  {
    key: "893917ac0af5cd0ae536f4a47b8a83febd68239f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/83 - Declaring Relationships.mp4",
  },
  {
    key: "b3c6d7ca8ab02657130ef14c82d011a7807a7a18",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/84 - Foreign Keys.mp4",
  },
  {
    key: "e85b4aa2ec2c92cfc8b3f036061077eb07139ef4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/85 - Foreign Keys Solution.mp4",
  },
  {
    key: "b7decd4d3a83696c394d9fbd3522a58fc5299027",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/86 - Self Joins.mp4",
  },
  {
    key: "8f944151845bf9cb23a3d3d8abebb98450ce9a17",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/87 - Self Joins Solution.mp4",
  },
  {
    key: "3fa0a051cfe1a607957fc4f07d598614bc557e91",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/88 - Subqueries.mp4",
  },
  {
    key: "2f29c1fadfaeb88723f94dc82f047362754f379b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/89 - One Query Not Two.mp4",
  },
  {
    key: "3c5e480d884091e69d64cd274a92bda4daff4dc3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/9 - Zoo.mp4",
  },
  {
    key: "b55180c7d33c04803cf8371dfb3272260be50f18",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/90 - One Query Not Two Solution.mp4",
  },
  {
    key: "a195e2375cfc2e2a6d9d5bbbf574642bdb740109",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/91 - Views.mp4",
  },
  {
    key: "ad2ff3e280023fbf5bbe10d6ba32701302744f6e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/92 - Views Solution.mp4",
  },
  {
    key: "d1adac8f38d57771906c8048b367d22ae6d77162",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/93 - Outro.mp4",
  },
  {
    key: "de0bfdfbf97756a52813a8d38ffd413abd15c461",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/94 - Final Project Tournament.mp4",
  },
  {
    key: "0852610a39757d1e89f14cf505e31175c2b97eba",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/95 - Mathematical.mp4",
  },
  {
    key: "14b423f0dd5c2c7736949b1c0d3d2ad95ea8efcd",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/96 - Mathematical Solution.mp4",
  },
  {
    key: "85fbebcd47ad777aba922750c99860ecd9176961",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/97 - What's in the Database.mp4",
  },
  {
    key: "7c8d590967fd1515e7b353cb5a40af01519236d7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/98 - Ready to Play.mp4",
  },
  {
    key: "ff8c36bf661c1020ad586ebbcf2732478dbbd006",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/99 - Ready to Play Solution.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Intro to Relational Databases Videos/Thumbs.db",
  },
  {
    key: "c115e492774c65f4a2ff0621c6c642f49d7d79ad",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/1 - Intro to Arrays.mp4",
  },
  {
    key: "53741fe36d95e2bc9aad9de2e6454aa7ad969ab4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/10 - L6-Map-Screencast V2.mp4",
  },
  {
    key: "ae9cd626211e19c8bf3f644081a882b9966aac0b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/11 - Arrays in Arrays.mp4",
  },
  {
    key: "41c52749ef6b04c6344aade5189eabff2d975461",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/12 - Grid of Donuts.mp4",
  },
  {
    key: "5b1de757d02a8c763aa460ae841272e1e1c2b3ef",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/13 - Grid of Donuts + Array.mp4",
  },
  {
    key: "451632199951dd69f2d2bef36fe9d803ec628153",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/14 - Lesson 6 Summary.mp4",
  },
  {
    key: "a62dd42be80792f0f5fa3e202f6070cecbf3149b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/2 - Donuts to Code.mp4",
  },
  {
    key: "beebcf74b892a7f79bbcd49eb5a9a4f7e390849e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/3 - Accessing Array Elements.mp4",
  },
  {
    key: "025d5e84cb44d3769aee4f74c1344e90c3a4f0bf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/4 - Changing Value at an Index.mp4",
  },
  {
    key: "dd70c7b0ed5248c6aebe27dfd4c00f1c3370b91a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/5 - Array Properties and Methods.mp4",
  },
  {
    key: "14f829fea45830c56e2eb06e199c1e59d0ae4cd1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/6 - Push.mp4",
  },
  {
    key: "c4e9867f4ce66d5415363268cd1afd897a72af8a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/7 - Pop.mp4",
  },
  {
    key: "f04cbd82105b84ccebd28a1cb287e43b8a2257f3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/8 - Splice.mp4",
  },
  {
    key: "f6810a0d1c358511cbb6067402059b855f1cc6ea",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/9 - The forEach Loop.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Arrays Videos/Thumbs.db",
  },
  {
    key: "a59a05aea7df63c61e4f3930d4d9d80981d1f6d3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/1 - Intro to Conditionals.mp4",
  },
  {
    key: "c55646b4cab9c27f9eea5be3cc2f8d3cd0ab3fcd",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/10 - Lesson 3 Summary.mp4",
  },
  {
    key: "7e87a27625d0fe1c4b62d4040d8266610e7d1801",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/2 - Flowchart to Code.mp4",
  },
  {
    key: "3cc571cdefb89f9b221a382dc01d1517e3f12f7f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/3 - More Complex Problems.mp4",
  },
  {
    key: "92c548fcad2595203051c2e4e9e0ca5c1a7938e0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/4 - Using Logical Operators.mp4",
  },
  {
    key: "3a798c642ccb36a41fe980aea5e7c8960ee4be8b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/5 - Logical AND and OR.mp4",
  },
  {
    key: "386935279835c1f9655fdb0f4999fcdf696e630e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/6 - Advanced Conditionals.mp4",
  },
  {
    key: "a5307e136cb8c4d0b50417ce611f00324c3dfce4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/7 - Ternary Operator vs. If-Else Statement.mp4",
  },
  {
    key: "6cbc2ad5c50a03062ca757286ae1c54e33603c24",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/8 - Switch Statement and Falling-through.mp4",
  },
  {
    key: "ca2c8e349b3d993370fc60dac123e10228dabd3d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/9 - Falling-through Exploding Kittens Example.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Conditionals Videos/Thumbs.db",
  },
  {
    key: "980c4442034f2241d658471e8b252f1425ea2717",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/1 - Intro to Data Types.mp4",
  },
  {
    key: "077db00cf09389527409024d16a7ca4827066c30",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/10 - Lesson 2 Summary.mp4",
  },
  {
    key: "05746fd8cbd95028bb73d2b17d9b803ed9ea6d05",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/2 - Comments.mp4",
  },
  {
    key: "dd98e79348aeaba2fbf2eeb78e9f22841d427671",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/3 - Strings.mp4",
  },
  {
    key: "0c4bd89699047d4eb8c3729416aadfaeddbe039c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/4 - Variables.mp4",
  },
  {
    key: "28332920e4ac6ac93694a27b0da17bc1f6eeddb3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/5 - String Index.mp4",
  },
  {
    key: "99411204efe98514e81069e8915c82a1eabd7c2f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/6 - Escaping Characters Bad.mp4",
  },
  {
    key: "b5c6660f03ef6fc20cc33fbe46346dbbc8755331",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/7 - Escaping Characters Good.mp4",
  },
  {
    key: "842254e68e94b5cecfe0c240d0a096c393af5e82",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/8 - Booleans.mp4",
  },
  {
    key: "42650a33f532179603d6f174630f2200b1295192",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/9 - Difference between Null and Undefined.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Data Types & Variables Videos/Thumbs.db",
  },
  {
    key: "efb92d56bff34776ebd95e18c84788ebc37cb202",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/1 - Intro to Functions.mp4",
  },
  {
    key: "2789b6a3367f742fe18908169cfdc3e0320d6bf1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/10 - Named Function Expressions.mp4",
  },
  {
    key: "9c92c53f3ff115d4d91ca08d49cf3a03a6c516de",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/11 - Lesson 5 Summary.mp4",
  },
  {
    key: "d0ebd58130f79776c4f26a1d4e5f10f972fbf8b8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/2 - Function Example.mp4",
  },
  {
    key: "d8b29162ba8c77604e208c3dc8e71d77ba5f9a0b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/3 - Returning vs. Logging.mp4",
  },
  {
    key: "61b513c87912f66391852976ccc7965cd51c1d40",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/4 - Scope.mp4",
  },
  {
    key: "e1045c94c059d49b3552dbd54ba74b4dc2268157",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/5 - Scope Example.mp4",
  },
  {
    key: "be44ce7c14f9e86646f75bba477453cd589780b7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/6 - L5 23 L Variable Shadowing V3.mp4",
  },
  {
    key: "8fef013048dc1861ae4b3f75be04141c13348ef9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/7 - Hoisting.mp4",
  },
  {
    key: "6d72192f8a55b1f698ef13458d2ea62c80edf6f9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/8 - Function Expressions.mp4",
  },
  {
    key: "689a9cf582ba0fc9fc341c626aa765bc372a9614",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/9 - Declared vs. Function Expression.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Functions Videos/Thumbs.db",
  },
  {
    key: "dfbb552b8d5b08772d6a8a81a88952ef48fb8593",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Loops Videos/1 - Intro to Loops.mp4",
  },
  {
    key: "fe69cdeadfce8ebc1444821005f6148b3372aba0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Loops Videos/2 - While Loops.mp4",
  },
  {
    key: "9ce80c5f9a6acbbd9c997f8dffe50bcfceaeb1c9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Loops Videos/3 - Infinite Loop.mp4",
  },
  {
    key: "17898d02c67ced8520052bdbddb2365b24e9a513",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Loops Videos/4 - For Loops.mp4",
  },
  {
    key: "a2e3dbbfc75677a40d1b8738ac6cf7cf68713cae",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Loops Videos/5 - Walking through a For Loop.mp4",
  },
  {
    key: "a88e3f83e903b754c9b6a723aa1f26e233e5abca",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Loops Videos/6 - Walking through a Nested Loop.mp4",
  },
  {
    key: "a93a598c729e8907dd0f225831e575bb5d06fe40",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Loops Videos/7 - Increment and Decrement.mp4",
  },
  {
    key: "7ea2902ae719c3cd729d7fe88a00c71f1429dbcf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Loops Videos/8 - Lesson 4 Summary.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Loops Videos/Thumbs.db",
  },
  {
    key: "8d70d4d3c1dd89bfcbc3b449cf4de0202f3644e1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Objects Videos/1 - Intro to Objects.mp4",
  },
  {
    key: "df990fdf6aefa22994f396c81081536224b365b6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Objects Videos/2 - Objects in Code.mp4",
  },
  {
    key: "349d46dfb18ec234aff485249482f730f4735f65",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Objects Videos/3 - Objects.mp4",
  },
  {
    key: "da894cee90a4b9d7a65671fee0d177ccbe908868",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Objects Videos/4 - Object Naming Conventions.mp4",
  },
  {
    key: "aac584bf0192ced6f238347c93ab1c6b8cf2dc80",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Objects Videos/5 - Lesson 7 Summary & Course Outro.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/Objects Videos/Thumbs.db",
  },
  {
    key: "42d68e0b7f289a5cd91acbadc28635b8889146b6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/What is JavaScript- Videos/1 - Intro to JavaScript.mp4",
  },
  {
    key: "9a581d2868ef31a349ddad522dee8eb19833f4be",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/What is JavaScript- Videos/2 - History of JavaScript.mp4",
  },
  {
    key: "1482250fca3e66b6d5961cff3b566e4f9904ee34",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/What is JavaScript- Videos/3 - The JavaScript Console.mp4",
  },
  {
    key: "26237cbf90156f709af640ede610e22e88879621",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/What is JavaScript- Videos/4 - //console.log.mp4",
  },
  {
    key: "4a236ded69b6498694e33f762f80d12a311a5be5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/What is JavaScript- Videos/5 - 12_Img_gif Of What Happened (BETA).mp4",
  },
  {
    key: "b47fddbc51d70c8ad167e8ca2621a6895a04e3e8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/What is JavaScript- Videos/6 - 17_Img_gif The Working Site (BETA).mp4",
  },
  {
    key: "be9a10727f30dade791328579ec3586262ea258e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/What is JavaScript- Videos/7 - Lesson 1 Summary.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/JavaScript Videos/What is JavaScript- Videos/Thumbs.db",
  },
  {
    key: "11309ed402725f01dc46bfc43404acda991438b5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/1 - Intro to Event Listening with jQuery.mp4",
  },
  {
    key: "43d01d3da41663b058275f7bbf7e17596edae17a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/10 - The Convenience Method.mp4",
  },
  {
    key: "7f8b20a1d7230b0fa8a00565f1a039a580063fce",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/11 - Convenience Methods Quiz.mp4",
  },
  {
    key: "96cbb818f913574f5c5f41e98de9d431298b09ae",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/12 - Convenience Methods Quiz Solution.mp4",
  },
  {
    key: "04c1ff1b26cb70be2b5f2a6c5b51021b3e8044d1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/13 - jQuery's multifunctional .on method.mp4",
  },
  {
    key: "a668c818ebe96259977cc164cc661ba4b622502b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/14 - Outro.mp4",
  },
  {
    key: "54ef65ab3074c08ac7385a09da1699058863255d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/3 - monitorEvents Quiz.mp4",
  },
  {
    key: "80e2c6eebecc72ff10a4c170b8867d6db6c81943",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/4 - monitorEvents Quiz Solution.mp4",
  },
  {
    key: "cd1bde4d70c23e06e06f2a5d7d7a95701eb6a8d9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/5 - Anatomy of a jQuery Event Listener.mp4",
  },
  {
    key: "53af702fbdafc8670d9edcfb63d8baa11311d13f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/6 - jQuery Event Listener Order Quiz.mp4",
  },
  {
    key: "a2ba93babd511a4ae536b83aab5a9d3e64ec39ee",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/7 - jQuery Event Listener Order Quiz Solution.mp4",
  },
  {
    key: "82fb38167088b340a444b059aefd014bda64c643",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/8 - jQuery Event Listener.mp4",
  },
  {
    key: "3222acc1749c0f96ab7b567734ff33c719d52916",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/9 - jQuery Event Listener Solution.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos/Thumbs.db",
  },
  {
    key: "35d62633974cf3febfe3ad3ad825440c7f7eab75",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/Event Listeners with jQuery Videos.zip",
  },
  {
    key: "63d324b40d69de165d2d94652eb3eaafecdbb3c2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/1 - Course Introduction.mp4",
  },
  {
    key: "dd9cfa043a8b33cbd44fe9fc6644817b0ffcf668",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/10 - Select by Tags.mp4",
  },
  {
    key: "d8c14cf4a1045cbae89056746d217ae24c9e089f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/11 - Select by Tags Solution.mp4",
  },
  {
    key: "4e6e8a6e70ff1d27d38e240b8b9ac016ff00530e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/12 - Select by Classes Quiz.mp4",
  },
  {
    key: "858119adb26f59b5e70e339d41489ff4b6e07324",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/13 - Select by Classes Quiz Solution.mp4",
  },
  {
    key: "df883ddd8bb4a2118ad02e02afe7a0cb5f07a040",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/14 - Select by IDs.mp4",
  },
  {
    key: "eb8ed6cc00f601aed1162533e0b2320e35e36d65",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/15 - Select by IDs Solution.mp4",
  },
  {
    key: "09e768743d1134cbefe09aa79cf37098a2370176",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/16 - Family Tree Revisited.mp4",
  },
  {
    key: "dc43a22da73bc712d75ca08bfd0ca1a6dfbb0f71",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/17 - Filters Quiz.mp4",
  },
  {
    key: "766ca423a3690dc291ccddc3cb4eb24564cac2e2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/18 - Filters Quiz Solution.mp4",
  },
  {
    key: "e6064206e98289f0f5d9fc560b2b6f1671dd637e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/19 - High Five!.mp4",
  },
  {
    key: "a82d2be136e8d29ae55ec19d965d5bd10017044a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/3 - What is jQuery actually .mp4",
  },
  {
    key: "01a91c3b57e3ef35bc459db521daa15d4d580ec5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/4 - What is jQuery actually  Solution.mp4",
  },
  {
    key: "8f4ff2d809a5d37f710ef971914bda63b2ebc824",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/5 - Money, Money, Money (the $).mp4",
  },
  {
    key: "089e0cc60bc17e91d13ffbea6de627ebc7fbe656",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/6 - How to Use the $.mp4",
  },
  {
    key: "71a4c4b8f82636cc4ccc63aa4c45935285da8455",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/7 - DOM Inspiration.mp4",
  },
  {
    key: "25e077eaae211de5a42a7322a40c074164f2a143",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/8 - DOM Inspiration Solution.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos/Thumbs.db",
  },
  {
    key: "6d97fd75595184ddce66d3838b231f54a561e804",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Basics_ the DOM, $, and Selectors Videos.zip",
  },
  {
    key: "0dd0fb15b8a29fa51998dd70983e040b74e61dcd",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/1 - jQuery Documentation and You.mp4",
  },
  {
    key: "0385d0474f4f5987825d5aad97392d20813874d6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/10 - Pulling HTML and Text.mp4",
  },
  {
    key: "0df521aad84309a228309a689e52ecd999a94b88",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/11 - Collecting Values Quiz.mp4",
  },
  {
    key: "75418befbe5d3d1859cee32cd2c37a92df812d08",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/12 - Collecting Values Quiz Solution.mp4",
  },
  {
    key: "4b0547f70391707f260c6b3547e211305a119ca3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/13 - Removing DOM Elements.mp4",
  },
  {
    key: "1d0c394e887e90c9f4d859cecb04cc0ecc9cd1de",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/14 - Removing DOM Elements Solution.mp4",
  },
  {
    key: "e898c829bf74ea30386d5ce751faa7702745b23d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/15 - Adding DOM Elements.mp4",
  },
  {
    key: "dd511311f58065b43d6278a40dce533c44ec39d4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/16 - Appending Child Elements.mp4",
  },
  {
    key: "a4e083ddc25dd040681b452d0b7eaee49ee12b31",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/17 - Build a DOM (Family) Tree!.mp4",
  },
  {
    key: "c2f93be6bd3739a083cd3db53a1e0215ec662ff4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/18 - Build a DOM (Family) Tree! Solution.mp4",
  },
  {
    key: "553f480896ad90bdb3191512e4688d1d38f5af45",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/19 - Iterating with Each Quiz.mp4",
  },
  {
    key: "8797656f4201d0473e4559957ee9cdc50a94162e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/2 - you.toggleClass() Quiz.mp4",
  },
  {
    key: "3d3af4f1c907ac011edcef435f0688358ccd82ac",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/20 - Iterating with Each Quiz Solution.mp4",
  },
  {
    key: "9fdca1ecb6b462cf762d632a4da6403aa7b2aea3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/23 - Outro.mp4",
  },
  {
    key: "e9e111cf62b0aa0fd80c83d2f2b7bbbbef05aa9b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/3 - you.toggleClass() Quiz Solution.mp4",
  },
  {
    key: "3a075c616da7890332ed04d3cf693580559ca059",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/4 - Toggling Classes Quiz.mp4",
  },
  {
    key: "4b4d65699fa07c2e7f1852b7c0bd2d25319f6116",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/5 - Toggling Classes Quiz Solution.mp4",
  },
  {
    key: "c27049e42665c61c222d4314154e5362eabe0a0a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/6 - Changing Attributes Quiz.mp4",
  },
  {
    key: "0c32c665c4346a23fc8be9bbce2bddcf6e9263a0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/7 - Changing Attributes Quiz Solution.mp4",
  },
  {
    key: "368bffa95a1aad79405d745f8ad89d836c38751f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/8 - Modifying CSS Quiz.mp4",
  },
  {
    key: "e9339a91da8b13b945609d6b70979c6d3352d91b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos/9 - Modifying CSS Quiz Solution.mp4",
  },
  {
    key: "100989f16d9e0e6d50adf62dcd7e2f7649fcb2a4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/jQuery Videos/The Tricks_ DOM Manipulation Videos.zip",
  },
  {
    key: "c24290ce80e43a6dce6fd90b433191611a331ee8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/1 - Ud206 001 Shell Intro.mp4",
  },
  {
    key: "95fe430ef65d7c0dd85a1200f536cf49125bde60",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/10 - Ud206 011 Shell P7.1 - Downloading Solution.mp4",
  },
  {
    key: "2544ca389b5fd9a6bbea052b8597932356c1790e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/11 - Ud206 013 Shell P8 - Viewing Files.mp4",
  },
  {
    key: "48362c06817fd87ca89982d9cdbfa73f076eaf9c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/12 - Ud206 014 Shell P9 - Removing Things.mp4",
  },
  {
    key: "4eda656d524d8501cf4a9367fcbc9b626c55ead8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/13 - Ud206 016 Shell P10 - Searching And Pipes.mp4",
  },
  {
    key: "f638248caa2aa03e1ba43bcbf1209ae963d2e3e4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/14 - Ud206 017 Shell P11 - Variables.mp4",
  },
  {
    key: "34f437dccc15d130a93fe3369339b91ad90c0a96",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/15 - Ud206 018 P12 Startup Files (.bash_profile).mp4",
  },
  {
    key: "fdc39246c364da087beb1adbce81c82240fa6812",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/16 - Ud206 020 Shell P13 Controlling The Shell Prompt ($PS1).mp4",
  },
  {
    key: "583503fe8659ed4688a9f6bf8da349920eb5dc4e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/17 - Ud206 021 Shell P14 Aliases.mp4",
  },
  {
    key: "3b60e2d0694134cb76248498825da869775369e6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/18 - Ud206 022 Shell Workshop Outro.mp4",
  },
  {
    key: "28dbd3ea12a684094f7e5b3fde4811c30c2f3c14",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/2 - Ud206 002 P0 Windows Installing Git Bash.mp4",
  },
  {
    key: "a9e196e8b900773007dcf7013239ec39c56a70f5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/3 - Ud206 003 Shell P1 - Opening A Terminal.mp4",
  },
  {
    key: "67b17dceff2d774ce934b4859b78a52f6e13c619",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/4 - Ud206 004 Shell P2 - Your First Command.mp4",
  },
  {
    key: "c929f9a916f018109e23bbc47f2dacc6ae88744f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/5 - Ud206 006 Shell P3 - Navigating Directories.mp4",
  },
  {
    key: "2fcc725f921004f16e11709e959c99dbe5182f64",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/6 - Ud206 007 Shell P4 - Current Working Directory.mp4",
  },
  {
    key: "e6d28d74be96327b091b21dafae6f6a9e04b2534",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/7 - Ud206 008 Shell P5 - Parameters.mp4",
  },
  {
    key: "89541049a1585b2fdeaec115b17409a7f3e621e8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/8 - Ud206 009 Shell P6 - Organizing Your Files.mp4",
  },
  {
    key: "168cd1af04625ef4076be962b168065d87417dc9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/9 - Ud206 011 Shell P7 - Downloading.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Shell Workshop Videos/Thumbs.db",
  },
  {
    key: "63d324b40d69de165d2d94652eb3eaafecdbb3c2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/1 - Course Introduction.mp4",
  },
  {
    key: "5799a22c5f02be1829c5d56ab4be2696532a33e7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/10 - Linked Lists.mp4",
  },
  {
    key: "ab725f739f6065b59a71e015e12d32590cbab6e8",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/11 - Linked Lists in Depth.mp4",
  },
  {
    key: "a7cde7f7ffc5a3f1f7fd6aa77f53f26ac56233f5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/12 - Stacks.mp4",
  },
  {
    key: "ac773d4cdea1433674a054eac05a9e592fb76fa6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/13 - Stacks Details.mp4",
  },
  {
    key: "40bd82509bd5b6855755469ad2c6fe7a121ae8b9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/14 - Queues.mp4",
  },
  {
    key: "618d7c9ac3487f4fc6611670c4eebb85c3223a85",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/15 - Binary Search.mp4",
  },
  {
    key: "e4ce653980eef1d399704870c09475a97e22ebeb",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/16 - Efficiency of Binary Search.mp4",
  },
  {
    key: "c3fecebc8fc236629d6ed44b0505f5abec240de5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/17 - Recursion.mp4",
  },
  {
    key: "6569eda483ebb2d7fb489779c26f996a1d26f3d9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/18 - Intro to Sorting.mp4",
  },
  {
    key: "f897be254f8e9e860a14f482bdee3a5b9789ff25",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/19 - Bubble Sort.mp4",
  },
  {
    key: "d555b7a9565ec888cf5de23ac4f059036d350136",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/2 - Syntax.mp4",
  },
  {
    key: "a23e4e3cf54cb2cebdd039349fb358edef41950c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/20 - Efficiency of Bubble Sort.mp4",
  },
  {
    key: "0ec9a5715d2dbe49af68d5445483517ce73dc67c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/21 - Merge Sort.mp4",
  },
  {
    key: "77cdf826ffbd33d0ff5dd0aa9f7c8a50c1952dcf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/22 - Efficiency of Merge Sort.mp4",
  },
  {
    key: "b7261cb399cd5763aec26826f918dcaa72bcb662",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/23 - Quick Sort.mp4",
  },
  {
    key: "9a1f60a33dfd95f23336fb0ba0018b800828a33a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/24 - Efficiency of Quick Sort.mp4",
  },
  {
    key: "c73f56938cb1f7a1c0e3d57204d884f3815b582d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/25 - Introduction to Maps.mp4",
  },
  {
    key: "654fffad022c0941cb763ab3e860fb5c8e5d3eba",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/26 - Sets and Maps.mp4",
  },
  {
    key: "706a82043d12937df89cf264c40332c38afa480f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/27 - Introduction to Hashing.mp4",
  },
  {
    key: "a887cadcd96fd78f8f7b70e7f54606f1bb21972a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/28 - Hashing.mp4",
  },
  {
    key: "9b8548725de50ce1a4e5d6a37788eb1c31651c78",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/29 - Collisions.mp4",
  },
  {
    key: "596e500db1afe5711c32214022307fbef9fdfee7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/3 - Efficiency.mp4",
  },
  {
    key: "fd91e1ba5a5b01bb1e6e8c233dd25f3043152a04",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/30 - Hash Maps.mp4",
  },
  {
    key: "ef4b931c1222dabd00964f165114cfd6a97005c0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/31 - String Keys.mp4",
  },
  {
    key: "1605cb792469c5ef8f527f04c3bd38a7fc1a96d4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/32 - Trees.mp4",
  },
  {
    key: "2972e0abaaac1076ed7a7f95df9c7cf6621a3c64",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/33 - Tree Basics.mp4",
  },
  {
    key: "c94f7c045e4e50c95782ec9aa39550f4e6fa8b34",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/34 - Tree Terminology.mp4",
  },
  {
    key: "bdd290f5c2e798311ea4d94ccc47961883930b30",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/35 - Tree Traversal.mp4",
  },
  {
    key: "5f02aa18dd180054acbaff6cee186089f12996e6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/36 - Depth-First Traversals.mp4",
  },
  {
    key: "c28bb6c7b972e1a664be253e95efd464ef482af6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/37 - Search and Delete.mp4",
  },
  {
    key: "18e595cc9920ec127798826f9cdea233b8a00da0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/38 - Insert.mp4",
  },
  {
    key: "ccee61e4d98c2fc3f4d6866d7b7dec75017b6fe3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/39 - Binary Search Trees.mp4",
  },
  {
    key: "62c3b682f8dc15c2a52fa0d1934ef785607a9be9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/4 - Notation Intro.mp4",
  },
  {
    key: "2150a475c07b719046bf58bde10903eb712130ec",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/40 - BSTs.mp4",
  },
  {
    key: "dea5c955db4a079ec88178d45afe7bb46e0292c6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/41 - BST Complications.mp4",
  },
  {
    key: "39e6714c1d108de675f58270247e79049fe2641e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/42 - Heaps.mp4",
  },
  {
    key: "da8eac33d77df24595d9eb96589ed9df3eec51ce",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/43 - Heapify.mp4",
  },
  {
    key: "33cf67fa7b69db68e602c29ad5ecb15c2137321f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/44 - Heap Implementation.mp4",
  },
  {
    key: "5d6c761bec56cb7421a7d40c831a258dd29b9456",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/45 - Self-Balancing Trees.mp4",
  },
  {
    key: "821d621a88472bb27a94a48a7736e1a28efbb1a9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/46 - Red-Black Trees - Insertion.mp4",
  },
  {
    key: "8cf5cf1f9279b41212bfa553938d70fc36eafd59",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/47 - Tree Rotations.mp4",
  },
  {
    key: "3453e0500d25c49639f8c9c9d36ca21575df15c1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/48 - Graph Introduction.mp4",
  },
  {
    key: "dcad7d1a8e43b6c84b504c29b1ff02e4890cfc7f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/5 - Notation Continued.mp4",
  },
  {
    key: "13ef483c263722501cd277d17a99c46e1c1f18f5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/50 - Directions and Cycles.mp4",
  },
  {
    key: "07dc360ee4ae4512de9b6cc98b38e9a2ecba11e4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/51 - Connectivity.mp4",
  },
  {
    key: "6150bbfba8c6bdaea4be03e63eea1f7fb52bff69",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/52 - Graph Representations.mp4",
  },
  {
    key: "7630883524e3c4b25f1c98be1b31d1e6f2c3ac04",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/53 - Adjacency Matrices.mp4",
  },
  {
    key: "ca4df012304bcef3f64d39656946509df63033b7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/54 - Graph Traversal.mp4",
  },
  {
    key: "f4436e9bfaac465562eaa1ef12bdca3f8df357a6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/55 - DFS.mp4",
  },
  {
    key: "af0649f9bfa70603fd221e83777a44afa021fe0f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/56 - BFS.mp4",
  },
  {
    key: "04ded66e9b25767d787f114a75431392042e8ffd",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/57 - Eulerian Path.mp4",
  },
  {
    key: "3ddc44d672a7978aeee5ba879ec6adf635d510a6",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/58 - Case Study Introduction.mp4",
  },
  {
    key: "662e3f8ec9c5a0124d720b7f9e7accb6ccb589ca",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/59 - Shortest Path Problem.mp4",
  },
  {
    key: "15c11903f7e19aa3f1b76ffd9ea8f41feccf121c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/6 - Worst Case and Approximation.mp4",
  },
  {
    key: "3cc885e059ccfd061fa597cb2c5e343a17cee8ce",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/60 - Dijkstra's Algorithm.mp4",
  },
  {
    key: "f1e3f80d8886f7dd4b27c9ac4595f9e4bc0d4df5",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/61 - Knapsack Problem.mp4",
  },
  {
    key: "eb316d4f3a41fdf0522672810c78c81dbdb081be",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/62 - A Faster Algorithm.mp4",
  },
  {
    key: "36ba0d806b04ae059d7c6f6b174f92293efe2592",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/63 - Dynamic Programming.mp4",
  },
  {
    key: "c58fa3ac93fc9ed8a87a6f833b757c0ccbe483b2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/64 - Traveling Salesman Problem.mp4",
  },
  {
    key: "5a6c72172742801035131249fa746e84c8590bfa",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/65 - Exact and Approximate Algorithms.mp4",
  },
  {
    key: "5367c11d5edb228f85427e00b9a50562cee00700",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/66 - Interview Introduction.mp4",
  },
  {
    key: "61c8efa0a7c20f9f2d6317460d64d9aad78d0909",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/67 - Clarifying the Question.mp4",
  },
  {
    key: "52b088aa83e7ed98cf4bbf2c2b57f3a0203caff7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/68 - Confirming Inputs.mp4",
  },
  {
    key: "916e49a29494fae01d671ea0ffbbe5f677e89b5a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/69 - Test Cases.mp4",
  },
  {
    key: "f449d783cc205abfa9caa72ae89c6de56ab27b85",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/7 - Welcome to Collections.mp4",
  },
  {
    key: "72cbfdc83501603d6c6034dac433c38cd57fffa1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/70 - Brainstorming.mp4",
  },
  {
    key: "77f20f9f3242d268474eae919ff31ed7e1eb3f16",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/71 - Runtime Analysis.mp4",
  },
  {
    key: "dac6f88eb11e4482716c7aad75834893e2bba269",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/72 - Coding.mp4",
  },
  {
    key: "28d612752f06f55eced91e4839eba2163cfb59b2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/73 - Coding 2.mp4",
  },
  {
    key: "bd28b116047b74367edebc7abff1feae89629862",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/74 - Debugging.mp4",
  },
  {
    key: "e9ee61832f75742cd5ea88d7adfaf521a5b560ec",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/75 - Interview Wrap-Up.mp4",
  },
  {
    key: "3715112c22d0298901048f0c5468630a13c70018",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/8 - Lists.mp4",
  },
  {
    key: "2aa12394f5ccdfcecfe89ddaf20b1cbf153f6062",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/9 - Arrays.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Technical Interview Videos/Thumbs.db",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/fswd-videos/Udacity Videos/Thumbs.db",
  },
  {
    key: "903a7a355a7f1e02b83f461a82d45c0e30992b2f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/1 - Sites On Mobile.mp4",
  },
  {
    key: "1b7d376ab26bb9a34d9af4801e977bef445cd889",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/10 - Device Emulation Quiz Solution.mp4",
  },
  {
    key: "1bf7d12514df3b59446caa7fa530cbe1cfe8ca9a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/11 - Remote Debugging Intro.mp4",
  },
  {
    key: "a06e0805e196290c95abe932bde24ad59e054dd4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/12 - Setup for mobile.mp4",
  },
  {
    key: "09efcb7e58a80872f5447fb0e54d2490e35d3f21",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/13 - Using dev tools on mobile.mp4",
  },
  {
    key: "0a82154e648adaf4bc843b7ff36e66b235c90db9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/14 - Mobile tools for iOS.mp4",
  },
  {
    key: "741c4ad667be83449ed03f9eceed0d35bbcfebe9",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/15 - Lesson 1 Summary.mp4",
  },
  {
    key: "f38c79e35d61e7ce53ccce77d867cbaa5a49ba6c",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/2 - Share Your Great & Awful Sites.mp4",
  },
  {
    key: "ace7989f1aa18e4ce36e55a81d04015ae59bf3d1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/3 - Share Your Great & Awful Sites Solution.mp4",
  },
  {
    key: "f610280df052ef64a465860483488a57746830a3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/4 - Intro to Project.mp4",
  },
  {
    key: "44c1dbb1a020d1d547f5f6b956980dae566c57f2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/5 - Pan, Zoom, Touch, Ick.mp4",
  },
  {
    key: "92947a0a84a0c189baa804c735c536b709634fdf",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/6 - Emulators, Simulators and Real Devices.mp4",
  },
  {
    key: "d829c07032741d9f1a19524b45be86211a93287a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/7 - Setting up Chrome's Dev Tools.mp4",
  },
  {
    key: "119df524d9b42bb7eeec2d78645fcf4299e3245f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/9 - Device Emulation Quiz.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/1- Why Responsive-  Videos/Thumbs.db",
  },
  {
    key: "51b5fdbd21ce91240cd324fd76bdc9f1e0bb760a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/1 - Defining the Viewport.mp4",
  },
  {
    key: "adc132f4d3851700d7fe81d1bab6046c9f9b3af2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/10 - Calculating CSS Pixels Quiz Solution.mp4",
  },
  {
    key: "8fe7b831f694d473c955d9bceecdfbe0f705dc0a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/13 - Setting the Viewport.mp4",
  },
  {
    key: "9bd337c5397f93ea83887065ae6a9f761b88aa5d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/14 - Setting the viewport quiz.mp4",
  },
  {
    key: "d6304f88b60986cb7b9ad3fa8c83d18f20da47ae",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/15 - Setting the viewport quiz Solution.mp4",
  },
  {
    key: "bb46b83d1cd75c47849c576560f67e3d84afc6a7",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/16 - Large Fixed Width Elements.mp4",
  },
  {
    key: "b9a4e94ef82e4dbaefb709dc55e989073fae4b65",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/17 - Max-width on elements.mp4",
  },
  {
    key: "b32264b4269324efadaa1d8d9f82a59d548e2825",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/18 - Relative Sizes Quiz.mp4",
  },
  {
    key: "8f9e3e3df641be637e601b894b2604a5c12d127e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/19 - Relative Sizes Quiz Solution.mp4",
  },
  {
    key: "02a13f4c7014affd9b10b7f93e49825096613bd2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/2 - Pixels, pixels and moar pixels!.mp4",
  },
  {
    key: "716b1dbd3acbda8e24503aae16e580e89341b7ae",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/20 - Tap Target Sizes.mp4",
  },
  {
    key: "84fd78f2907ef839667285923e61d6316c2ae074",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/21 - Tap Targets Quiz.mp4",
  },
  {
    key: "507ffad63eb7989502d2daed666998e2072de5b3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/22 - Tap Targets Quiz Solution.mp4",
  },
  {
    key: "02594a457ae93a2e9dd0cb034e2be20f897fe57e",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/23 - Start Small.mp4",
  },
  {
    key: "a8421f64011e7f42ed13da272e1463ddde54ef78",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/27 - Lesson 2 Summary.mp4",
  },
  {
    key: "5e730623fc2942b255af628ad7e9bb3e1f4ffeb1",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/3 - Pixelation Quiz.mp4",
  },
  {
    key: "0b0a62253eb5d964692dabd9a277929d4a05db5d",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/4 - Pixelation Quiz Solution.mp4",
  },
  {
    key: "924dbc69b6c41fa9cee93409631a2b5917652167",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/5 - Calculating DPR Quiz.mp4",
  },
  {
    key: "f8bd6d83c8efe998bdbedb9ac336cf66e79060ae",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/6 - Calculating DPR Quiz Solution.mp4",
  },
  {
    key: "690fc6917e104098bfd93acc43ea4414f52a6cd2",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/9 - Calculating CSS Pixels Quiz.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/2- Starting Small Videos/Thumbs.db",
  },
  {
    key: "5068d9055efe463d8fae2f0be8a4befcdb88885f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/1 - Lesson 3 Intro.mp4",
  },
  {
    key: "748805ae8df41b263cbf83517b937bf3a85a9082",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/10 - Number of Breakpoints Quiz.mp4",
  },
  {
    key: "b5d206e2dbda77a63903779894a49244d5b86b50",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/11 - Number of Breakpoints Quiz Solution.mp4",
  },
  {
    key: "8f901521b1c035900b59d6de8089cea540a10ca0",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/12 - Picking Breakpoints.mp4",
  },
  {
    key: "79cc8c4c2af67329f5d7241810283bb836fa627f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/13 - Picking Breakpoints 2.mp4",
  },
  {
    key: "ee5fc9d4c521a503c58a909c5d7a525922499925",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/14 - Pick a Breakpoint Quiz.mp4",
  },
  {
    key: "ac67b9e724bc8d12421bb6d4633a1528e708b87a",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/15 - Pick a Breakpoint Quiz Solution.mp4",
  },
  {
    key: "8c9367e69f183415f970c9a9aa95b88d78bd5223",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/16 - Complex Media Queries.mp4",
  },
  {
    key: "9c9cd115b2ee64053b295bcbc0154912835ab4f4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/2 - Basic Media Query Intro.mp4",
  },
  {
    key: "5e09e4cb305a342e1f22391ca8dd9a3154afaac3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/3 - Adding a Basic Media Query.mp4",
  },
  {
    key: "6559adaf052dac9624e5ecd6ed6494f11e92cad3",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/4 - Adding a basic media query 2.mp4",
  },
  {
    key: "3f21cc33a9c6f3085d180d21877880d633da4a50",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/5 - Next Step Media Queries.mp4",
  },
  {
    key: "843b23c01737d65c5428e434d26a6c40ef31c30b",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/8 - Breakpoints.mp4",
  },
  {
    key: "f6438ade2c7097edcf2524afe374cfa91acc91c4",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/9 - Breakpoints Pt. II.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Responsive/3- Media Queries/Thumbs.db",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/fswd-videos/Udacity Videos/Why Responsive Videos/Thumbs.db",
  },
  {
    key: "45826d4f06bf5dd4bac45f04a84532766e2af666",
    value:
      "RAW-VIDEOS/GraphicDesign/Learn the Most Common Design Mistakes by Non Designers-mOA0WH00reA.webm",
  },
  {
    key: "f158115bd59d51ee67e634e3a8913289963aa7d4",
    value:
      "RAW-VIDEOS/GraphicDesign/Visual Communication Design Definition-r7R1wD20Up0.mkv",
  },
  {
    key: "0a4a97ca176bf3ffe09e3a49def233c458b2c9e5",
    value:
      "RAW-VIDEOS/GraphicDesign/What is Graphic Design Ep1_45 [Beginners Guide to Graphic Design]-dFSia1LZI4Y.webm",
  },
  {
    key: "8a03abd8ab31240e570fce02f7c806687f7d213d",
    value:
      "RAW-VIDEOS/How/How the Internet Works for Developers - Pt 1 - Overview & Frontend-e4S8zfLdLgQ.webm",
  },
  {
    key: "3bb2724a60957d26f74a382a9bb39c21eb821dfc",
    value:
      "RAW-VIDEOS/How/How the Internet Works for Developers - Pt 2 - Servers & Scaling-FTAPjr7vgxE.webm",
  },
  {
    key: "63ad2715f333b8bfa010af8a28b3b0313988fb1f",
    value: "RAW-VIDEOS/How/How the Internet Works in 5 Minutes-7_LPdttKXPc.mkv",
  },
  {
    key: "cfdfaa36f421c1e03051a7552e3eace3773fc28c",
    value:
      "RAW-VIDEOS/How/There and Back Again A Packet's Tale - How does the Internet work.mp4-qEdv_pem-JM.mkv",
  },
  {
    key: "0ddf7ba23a58cb06f5841b9f9e4adfe61ea764ed",
    value: "RAW-VIDEOS/How/week03/a-packet-tale-with-cc-by-vint.mov.mp4",
  },
  {
    key: "ca8399daa82c44d0ba294f0fbf8a4353414043c4",
    value: "RAW-VIDEOS/How/week03/a-packet-tale-with-cc-on-xbox.mov.mp4",
  },
  {
    key: "82a852a81aaa278f549e9a2ce8dc449f88005ba2",
    value: "RAW-VIDEOS/How/week03/A-packt-tale-with-cc.mov.mp4",
  },
  {
    key: "1802260e0b3002d5a187a0ea8757a1e6106d8d30",
    value: "RAW-VIDEOS/How/week03/test.mp4",
  },
  {
    key: "1dfabb107be1f565ef738a5562af43e32837d650",
    value:
      "RAW-VIDEOS/jon-duckett/Photoshop Tutorial - How to Resize an Image-qu5adJfxuhw.webm",
  },
  {
    key: "e4a7414bfa25dbfb67f64c6c074a27d5696042ba",
    value: "RAW-VIDEOS/jon-duckett/resizing-images.mp4",
  },
  {
    key: "42716e44b5a94483baae36b4ab22c27404a783fe",
    value: "RAW-VIDEOS/MSjavascriptforbeginners/2import",
  },
  {
    key: "c40b63e96e7ccd4b3253604ca81d18057b97e054",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Array methods [33 of 51] _ JavaScript for Beginners-9ORixWHwPZM.mp4",
  },
  {
    key: "1d207339eaf1ccc77d96283a1d78d8b924684960",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Arrow and anonymous functions [39 of 51] _ JavaScript for Beginners-OP6eEbOj2sc.mp4",
  },
  {
    key: "ab547fb304319c0ee4985584640847ce35912ec6",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Async_await for managing promises [47 of 51] _ JavaScript for Beginners-YwmlRkrxvkk.mp4",
  },
  {
    key: "4a45a72806a155fd331f5005a9035371450bde14",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Beginning the Beginner's series [1 of 51] _ JavaScript for Beginners-_EDM5aPVLmo.mp4",
  },
  {
    key: "d8682dc5c4a654693b5cbdad060917c31df0abe5",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Boolean logic with if statements [25 of 51] _ JavaScript for Beginners-SxTp8j-fMMY.mp4",
  },
  {
    key: "e82ccab8a89e39ecb2215db7aa80d7d47e07eabd",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Boolean logic with switch and other syntax [27 of 51] _ JavaScript for Beginners--u260xZ9e4M.mp4",
  },
  {
    key: "92ca6c71c2a6c5a42aca36b7b6fc61af464ebf81",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Building your toolbox [4 of 51] _ JavaScript for Beginners-69WJeXGBdxg.mp4",
  },
  {
    key: "0fc9790c9d56bbec48ca7b4e3264088a433609e2",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Comments [7 of 51] _ JavaScript for Beginners-Wm89TVXGflk.mp4",
  },
  {
    key: "961aefcc8adadf365134f85e9199f1fcea6330fb",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Converting strings to numbers [19 of 51] _ JavaScript for Beginners-xHXr9Uv2HXM.mp4",
  },
  {
    key: "0f261b64cf49048b8594df87e5576c7b53d01930",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Creating arrays [29 of 51] _ JavaScript for Beginners-1U4qTyq02Xw.mp4",
  },
  {
    key: "da3de87197eb6b43fd0c6315e16c314141af703f",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Creating your first application [6 of 51] _ JavaScript for Beginners-nQu2bbh4Vyc.mp4",
  },
  {
    key: "9807509b47932944b984efe996fe9bb81309899e",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Data types in JavaScript [15 of 51] _ JavaScript for Beginners-AWfA95eLdq8.mp4",
  },
  {
    key: "a977adb7ac3f6ef5bc3e9c45ef97db5478358d25",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Dates [23 of 51] _ JavaScript for Beginners-GROdz4Y7RLw.mp4",
  },
  {
    key: "23d9cb449e93d972e06ac8c965f8a0d3f3b6fae0",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Declaring variables [9 of 51] _ JavaScript for Beginners-JNIXfGiDWM8.mp4",
  },
  {
    key: "0f216a33248d48c78e0e35b4fb5c28a9562d03be",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Array methods [34 of 51] _ JavaScript for Beginners-HOc49cbm-68.mp4",
  },
  {
    key: "81adfdecbb8f2487c6f9c4b2806a874610a39a73",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Arrow and anonymous functions [40 of 51] _ JavaScript for Beginners-Td2IrY6QBpc.mp4",
  },
  {
    key: "6500e0abd08f0a3b4014405c30e5473639d4f9a4",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - async_await for managing promises [48 of 51] _ JavaScript for Beginners-XLxIqq3HlL8.mp4",
  },
  {
    key: "a85b7b4a34d6b4b690addce795c4bb67eb262d21",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Boolean logic with if statements [26 of 51] _ JavaScript for Beginners-C3Q-NRHWNAE.mp4",
  },
  {
    key: "6a17ed5cd7c290772c2d262cf0945f53266961fb",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Boolean logic with switch and other syntax [28 of 51] _ JavaScript for Beginners-biBkUvMNJCE.mp4",
  },
  {
    key: "b5ae0a52868cd27090317cc72c925e085ba5ad7c",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Building your toolbox [5 of 51] _ JavaScript for Beginners-9nKTxtv6D1w.mp4",
  },
  {
    key: "f881519380121d3dc3be99301018088c15ebb0e7",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Comments [8 of 51] _ JavaScript for Beginners-h3HyK2k3cZ4.mp4",
  },
  {
    key: "04ce2b59ebc9d8dd3792625f56417a38865af061",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Converting strings to numbers [20 of 51] _ JavaScript for Beginners-E_wMk9SwQ10.mp4",
  },
  {
    key: "d8a72aa2c90f51b7344cd701b2298cfa31ac04de",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Creating arrays [30 of 51] _ JavaScript for Beginners-p_o7fYUaT6k.mp4",
  },
  {
    key: "6ca6fbdea7c3c9369c6e797b96d31e124379057c",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Data types in JavaScript [16 of 51] _ JavaScript for Beginners-rEHV3fFMfn0.mp4",
  },
  {
    key: "17e8d18dcfd7b271a894b4fc0d8d97f1fd1d79d4",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Dates [24 of 51] _ JavaScript for Beginners-kjGzomLyF7A.mp4",
  },
  {
    key: "ea22339e164ea852f6cd9041e97d8e0b2a66fe6a",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Declaring variables [10 of 51] _ JavaScript for Beginners-EQMPAaAo6Fc.mp4",
  },
  {
    key: "4cf95631aa61fa30de22ba75fd86c33fc48356c6",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Functions [38 of 51] _ JavaScript for Beginners-5GBk8HGJiEc.mp4",
  },
  {
    key: "7dbabf9f9365cbb8da1ebd805d24b075f4604b6e",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Handling errors with try_catch_finally [22 of 51] _ JavaScript for Beginners-_L00IiNVcVk.mp4",
  },
  {
    key: "5ef0a1844069968d3bc3d6255e7a4be5f742c2f3",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - JavaScript Object Notation (JSON) [42 of 51] _ JavaScript for Beginners-hxQmx2R1zJw.mp4",
  },
  {
    key: "3cbeac8631940e6fc7a0c2225a9c470f5068054f",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Loops [36 of 51] _ JavaScript for Beginners-zH54MNiMgSg.mp4",
  },
  {
    key: "986760b0440d7301d73371bca654d6e268f5c791",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Math in JavaScript [18 of 51] _ JavaScript for Beginners--0mJTXVNdvA.mp4",
  },
  {
    key: "16b7ae301abee7276a6fcd890ef271be9d74cc3e",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Objects in JavaScript [44 of 51] _ JavaScript for Beginners-PilGRzUwwwc.mp4",
  },
  {
    key: "92e1b801003e40891c21ca7c2bb1497f4b23fc2a",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Package management [50 of 51] _ JavaScript for Beginners--EWsEotH6zQ.mp4",
  },
  {
    key: "937f09fe5e9248265a32055c9c235d47ba4e65e8",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Populating arrays [32 of 51] _ JavaScript for Beginners-KzwE2hfke50.mp4",
  },
  {
    key: "840856ccb1ca4578a1d5589d0c120cf7c21547ba",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Promises for long running operations [46 of 51] _ JavaScript for Beginners-ZNgYrFIxT50.mp4",
  },
  {
    key: "0b70709ffc1f9f2a3c9659a5d147dea2c50340f7",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Using template literals to format strings [14 of 51] _ JavaScript for Beginners-tmE7e4DlsJA.mp4",
  },
  {
    key: "d097479f5eefd5af439861acc68278c4135624f7",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Demo - Working with strings [12 of 51] _ JavaScript for Beginners-UQvhavAA-QU.mp4",
  },
  {
    key: "4e969b97198e3997cf0b00e11b5dbf34f1800ee1",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Functions [37 of 51] _ JavaScript for Beginners-XgKsD6Zwvlc.mp4",
  },
  {
    key: "7b04a1c01e2ef1f4207dbeb90efe8804edbb4dbf",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Handling errors with try_catch_finally [21 of 51] _ JavaScript for Beginners-gdbAiMxbap4.mp4",
  },
  {
    key: "dad3b0d18487f543671ec0b968c9ae0de0925499",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/JavaScript Object Notation (JSON) [41 of 51] _ JavaScript for Beginners-OEqHC1kbrbg.mp4",
  },
  {
    key: "53358519339ad3cd19df5853ec0ab04c53726f33",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Loops [35 of 51] _ JavaScript for Beginners-Eeh7pxtTZ3k.mp4",
  },
  {
    key: "4e9ffd79cfc5797ffe54a5b9fee104e80b39c5cf",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Math in JavaScript [17 of 51] _ JavaScript for Beginners-sHxqJna0Ub0.mp4",
  },
  {
    key: "3f14a761560e4825190876353667b8a56e9bdbb6",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Next steps [51 of 51] _ JavaScript for Beginners-H8u_lC7NbZU.mp4",
  },
  {
    key: "744a67a68aef8295f6653c4a6fed00eaf8e2b331",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Objects in JavaScript [43 of 51] _ JavaScript for Beginners-SKsbH-IcsFs.mp4",
  },
  {
    key: "f72db9f19c451bdfeb8367b3615af5cb8fa9ba02",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Package management [49 of 51] _ JavaScript for Beginners-sDRSkrfaSZo.mp4",
  },
  {
    key: "6359bb92ef81d2410f361e8cdc1a9b14b0176760",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Populating arrays [31 of 51] _ JavaScript for Beginners-ZARmjyg7Lik.mp4",
  },
  {
    key: "468f8bc5c9660119c8279aa1813d132033ecf8a9",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Promises for long running operations [45 of 51] _ JavaScript for Beginners-DIXPd8Ig3vc.mp4",
  },
  {
    key: "962ba29629582e97f442c08380c83977f2dbebb8",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Running JavaScript - browser or server [3 of 51] _ JavaScript for Beginners-tGOxIKstXiA.mp4",
  },
  {
    key: "bc61710bf465857caefb3e335581b0a41c01700d",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Using template literals to format strings [13 of 51] _ JavaScript for Beginners-mFOxd-opPbA.mp4",
  },
  {
    key: "311a5ee500bb067bcb6c0f9e819329f792a9c7b3",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/What Is JavaScript [2 of 51] _ JavaScript for Beginners-Q_CRM2lXXBg.mp4",
  },
  {
    key: "ff67b6e1ad7ca9e22a6db6de110e0770519feeee",
    value:
      "RAW-VIDEOS/MSjavascriptforbeginners/Working with strings [11 of 51] _ JavaScript for Beginners-dP1Er2BfVmo.mp4",
  },
  {
    key: "ca9ffc8e056a22c32a6a5a759e86bbf3c15b259a",
    value: "RAW-VIDEOS/MSjavascriptforbeginners/youtube-dl.exe",
  },
  {
    key: "42716e44b5a94483baae36b4ab22c27404a783fe",
    value: "RAW-VIDEOS/MSnodejs-for-beginner/2import",
  },
  {
    key: "bd52c5d120c04d5e7f732a20431eeebc11d16331",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to add and remove a dependency in a Node.js app [8 of 26] _ Node.js for Beginners-P1qWARtquFg.mp4",
  },
  {
    key: "5360044831cc2b50c560f60378be03eefb5e4619",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to configure VS Code to debug JavaScript Node.js apps [23 of 26] _ Node.js for Beginners-llPW0b1dQms.mp4",
  },
  {
    key: "0e0217d36cb52d66a22f3246fb47cc1a9c592cce",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to create a GET API with Node.js and Express [18 of 26] _ Node.js for Beginners-fdq0V7uIXtc.mp4",
  },
  {
    key: "f0a1d5cea3745c4e2fbe8047bf8eeb4854f7c8da",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to create a new Node.js project [6 of 26] _ Node.js for Beginners-EBxsKGdIWaE.mp4",
  },
  {
    key: "aadfabb266161553a7410990e97e240933414c31",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to create a web API with Node.js and Express [17 of 26] _ Node.js for Beginners-X2bHZ7R_4Kk.mp4",
  },
  {
    key: "6dbf2eb7bc88d1aea6e2fc0c4587d43902a3f5ec",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to create an API that receives JSON with Node.js and Express [20 of 26] _ Node.js for Beginners-hapS6wpKuX8.mp4",
  },
  {
    key: "adf4d7a3a74c42f9506ea8885d81c9019820ed8d",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to create files and directories with Node.js [15 of 26] _ Node.js for Beginners-1mv9rSI9FFA.mp4",
  },
  {
    key: "ebb2b40937a6f529575e5629ad1fc91ed17f1878",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to create update and delete APIs with Node.js and Express [21 of 26] _ Node.js for Beginners-cqapa6mI3jE.mp4",
  },
  {
    key: "5ffbd65da274bf7b1432aa0d65c14c2291878f30",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to handle API routing with Node.js and Express [19 of 26] _ Node.js for Beginners-e_aNOyeqsAU.mp4",
  },
  {
    key: "395aa335403ec4a5e22bd675750a6650b30ef19a",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to install Node.js on Linux, macOS or WSL [2 of 26] _ Node.js for Beginners-vrKSEMpOwYg.mp4",
  },
  {
    key: "8ccdf5b090b5b1c6e3a63d9d8e12e18c0047cf83",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to install Node.js on Windows [3 of 26] _ Node.js for Beginners-c_Bb7D7W5LI.mp4",
  },
  {
    key: "c4dc5c8f9887a8b7d47c5d9cd9b37ab1a5f56ad2",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to list the contents in directories with Node.js [13 of 26] _ Node.js for Beginners-3xm7spsmtRg.mp4",
  },
  {
    key: "2e7e1def52c88f246f938de3eb4d2704254a7760",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to manage Node.js vulnerabilities [11 of 26] _ Node.js for Beginners-kr9G2UXtOh4.mp4",
  },
  {
    key: "8597e5182712453bf4f79498dc3628c1a5a102b1",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to read a stack trace in VS Code to debug a Node.js app [25 of 26] _ Node.js for Beginners-9AZReNXoC1E.mp4",
  },
  {
    key: "0bcf7c3531de6464aad102c8d94fc83fbaee3cfb",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to read and update JSON files with Node.js [16 of 26] _ Node.js for Beginners-4Vg1NECQ_Kg.mp4",
  },
  {
    key: "14d1c23b8d99afd936a27af328728a5db1756467",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to run JavaScript code in Node.js using files or REPL [4 of 26] _ Node.js for Beginners-g_34i8vfGZA.mp4",
  },
  {
    key: "af0d18cdf8050af63f21699085c9d14c736b67e9",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to run your code step by step in Node.js built-in debugger [22 of 26] _ Node.js for Beginners-w4Uz06b8BOE.mp4",
  },
  {
    key: "f5a89aa76165925f46dd2611e8e370fde35eb2b4",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to set up VS Code for Node.js development [5 of 26] _ Node.js for Beginners-76xR4O2YcfE.mp4",
  },
  {
    key: "75fa0db2d744341ad190e941244b620208ac58d1",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to update your Node.js dependencies [10 of 26] _ Node.js for Beginners-PVlhepXQc1Y.mp4",
  },
  {
    key: "1d7ce210ce5e60930ca85bb10f02169d516ddb1e",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to use advanced debugging features in VS Code [26 of 26] _ Node.js for Beginners-H4HC_UUGVos.mp4",
  },
  {
    key: "40676450f304363a2db09801cb33d3c78662d367",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to use filesystem paths with Node.js [14 of 26] _ Node.js for Beginners-7UIXzCEqgas.mp4",
  },
  {
    key: "83d386c6b40fda5038158b1ec990945849302e09",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to use NPM scripts for your development task automation [7 of 26] _ Node.js for Beginners-amSVXzDiVuk.mp4",
  },
  {
    key: "8f5f44a87436fa147c267dd9dc4bacf96295b181",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to use the VS Code debugger with Node.js apps [24 of 26] _ Node.js for Beginners-yfm35n-USr8.mp4",
  },
  {
    key: "6cb147aff12981d9cc5bc6ede069c0a668f77c32",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/How to work with files and directories with Node.js [12 of 26] _ Node.js for Beginners-Za3F4qVZ6fI.mp4",
  },
  {
    key: "c447ae23603c327ddf727c17b1548a04f726a7b2",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/What is a lockfile and why you should commit it [9 of 26] _ Node.js for Beginners-DWgZQiFJSzY.mp4",
  },
  {
    key: "eb5947a8fee76d5fed22ff6698609b137c364f29",
    value:
      "RAW-VIDEOS/MSnodejs-for-beginner/What is Node.js and why you should learn it [1 of 26] _ Node.js for Beginners-FeJVdCz_uco.mp4",
  },
  {
    key: "ca9ffc8e056a22c32a6a5a759e86bbf3c15b259a",
    value: "RAW-VIDEOS/MSnodejs-for-beginner/youtube-dl.exe",
  },
  {
    key: "f56e34327173e8422d38196b162d61029a815a26",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/0b-HTML and CSS For Beginners Part 3 - Colt Steele-jBQFnyq7BFI.mkv",
  },
  {
    key: "7396ba4daa0192ec67bd5d9ce2dc7b91fb9019d0",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/0c-HTML and CSS For Beginners Part 4 - Colt Steele-Sr9yAi_q4LQ.mkv",
  },
  {
    key: "20f6422ffcc48886af47e2c4b6aee53f81bd9b17",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/0s-Top 5 HTML5 and CSS3 Questions Answered! - Jonas Schmedtmann-GGjpXlUxeNE.webm",
  },
  {
    key: "4f184d45340a06272f69261e278094984c0943f1",
    value: "RAW-VIDEOS/Q1BigRawVideos/1a-2021-canvas-intro-x3j8V-uLkNw.mp4",
  },
  {
    key: "07cb267404e9bc95d1bb7783327a484e34241f98",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/1a-colt-steele-web-developer-bootcamp-22553924.mov.mp4",
  },
  {
    key: "3b1f71fe4d61e387e60a0780604432c9b3cbde5e",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/1b-colt-steele-web-developer-bootcamp-22553930.mov.mp4",
  },
  {
    key: "b228005068a1de9328f14619ae69b4d5f509f20e",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/1c-colt-steele-front-back-end-overview-3932.mov.mp4",
  },
  {
    key: "3d27fa6266d0876d6c3af2de932e1470f31bce1d",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/1d-colt-steele-html-css-js-overview.mov.mp4",
  },
  {
    key: "801706c002e3e8781dd5b37d7b3074228ca57905",
    value: "RAW-VIDEOS/Q1BigRawVideos/1e-colt-steele-html-basics-5852.mov.mp4",
  },
  {
    key: "e7f6008a8f65dde6a345bc5ac7d40396d0564f37",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/1f-colt-steele-first-html-page-21915854.mov.mp4",
  },
  {
    key: "2697c467db6a7ff9b7dd4993496c0e30f9c44644",
    value: "RAW-VIDEOS/Q1BigRawVideos/2021-canvas-intro-x3j8V-uLkNw.mp4",
  },
  {
    key: "42716e44b5a94483baae36b4ab22c27404a783fe",
    value: "RAW-VIDEOS/Q1BigRawVideos/2import",
  },
  {
    key: "2c596efbf17440da14962265dd8da4cfdd261dc4",
    value: "RAW-VIDEOS/Q1BigRawVideos/2import.1",
  },
  {
    key: "e5166a9b21a3b2baf829692869077872bca33156",
    value: "RAW-VIDEOS/Q1BigRawVideos/6f-colt-steele-flexbox-direction.mov.mp4",
  },
  {
    key: "91f50e88e7d61a55aff1a0a95636647de92e24ef",
    value: "RAW-VIDEOS/Q1BigRawVideos/6f-cot-steele-flexbox-what-is.mov.mp4",
  },
  {
    key: "6cabe3b4cfff8cfea21a4a681c897a99ba6a39b6",
    value: "RAW-VIDEOS/Q1BigRawVideos/6n-colt-steele-what-is-flexbox.mov.mp4",
  },
  {
    key: "0ddf7ba23a58cb06f5841b9f9e4adfe61ea764ed",
    value: "RAW-VIDEOS/Q1BigRawVideos/a-packet-tale-with-cc-by-vint.mov.mp4",
  },
  {
    key: "ca8399daa82c44d0ba294f0fbf8a4353414043c4",
    value: "RAW-VIDEOS/Q1BigRawVideos/a-packet-tale-with-cc-on-xbox.mov.mp4",
  },
  {
    key: "82a852a81aaa278f549e9a2ce8dc449f88005ba2",
    value: "RAW-VIDEOS/Q1BigRawVideos/A-packt-tale-with-cc.mov.mp4",
  },
  {
    key: "16cfbf39d2c65a101ee80219c5f28cdaeabe576c",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/AMD at CES 2020 in 10 minutes--5-k5l8aaKY.mp4",
  },
  {
    key: "f3670d26f1bf4e85e1bf754ae714bb5888184523",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/04-colt-steele-block-vs-inline-div-span.mov.mp4",
  },
  {
    key: "d8538cf30ce2fac4414afb4cea0ad2c26e936071",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/04-colt-steele-intro-semantic-markup.mov.mp4",
  },
  {
    key: "4b52723835a5ff172ab6f69c62f558cb9ff7b41d",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/04-colt-steele-semantic-elements.mov.mp4",
  },
  {
    key: "07cb267404e9bc95d1bb7783327a484e34241f98",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/1a-colt-steele-web-developer-bootcamp-22553924.mov.mp4",
  },
  {
    key: "3b1f71fe4d61e387e60a0780604432c9b3cbde5e",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/1b-colt-steele-web-developer-bootcamp-22553930.mov.mp4",
  },
  {
    key: "b228005068a1de9328f14619ae69b4d5f509f20e",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/1c-colt-steele-front-back-end-overview-3932.mov.mp4",
  },
  {
    key: "3d27fa6266d0876d6c3af2de932e1470f31bce1d",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/1d-colt-steele-html-css-js-overview.mov.mp4",
  },
  {
    key: "801706c002e3e8781dd5b37d7b3074228ca57905",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/1e-colt-steele-html-basics-5852.mov.mp4",
  },
  {
    key: "e7f6008a8f65dde6a345bc5ac7d40396d0564f37",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/1f-colt-steele-first-html-page-21915854.mov.mp4",
  },
  {
    key: "2697c467db6a7ff9b7dd4993496c0e30f9c44644",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/2021-canvas-intro-x3j8V-uLkNw.mp4",
  },
  {
    key: "e5166a9b21a3b2baf829692869077872bca33156",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/6f-colt-steele-flexbox-direction.mov.mp4",
  },
  {
    key: "91f50e88e7d61a55aff1a0a95636647de92e24ef",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/6f-cot-steele-flexbox-what-is.mov.mp4",
  },
  {
    key: "6cabe3b4cfff8cfea21a4a681c897a99ba6a39b6",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/6n-colt-steele-what-is-flexbox.mov.mp4",
  },
  {
    key: "0ddf7ba23a58cb06f5841b9f9e4adfe61ea764ed",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/a-packet-tale-with-cc-by-vint.mov.mp4",
  },
  {
    key: "ca8399daa82c44d0ba294f0fbf8a4353414043c4",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/a-packet-tale-with-cc-on-xbox.mov.mp4",
  },
  {
    key: "82a852a81aaa278f549e9a2ce8dc449f88005ba2",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/A-packt-tale-with-cc.mov.mp4",
  },
  {
    key: "312c7bc24969aff8d1032bab08a932c53dd950e7",
    value: "RAW-VIDEOS/Q1BigRawVideos/coltsteelevideosQ1/z-only-names.js.txt",
  },
  {
    key: "295980fd4e42a2553f68602d0b63322d554f4dfb",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/CSS Grid - Introduction (complete) - Jonas Schmedtmann-oz0fbFviLIU.webm",
  },
  {
    key: "8a03abd8ab31240e570fce02f7c806687f7d213d",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/How the Internet Works for Developers - Pt 1 - Overview & Frontend-e4S8zfLdLgQ.webm",
  },
  {
    key: "3bb2724a60957d26f74a382a9bb39c21eb821dfc",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/How the Internet Works for Developers - Pt 2 - Servers & Scaling-FTAPjr7vgxE.webm",
  },
  {
    key: "63ad2715f333b8bfa010af8a28b3b0313988fb1f",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/How the Internet Works in 5 Minutes-7_LPdttKXPc.mkv",
  },
  {
    key: "0bb1bb60af754e2feca116e7323439c08c41a582",
    value: "RAW-VIDEOS/Q1BigRawVideos/iindex.html",
  },
  {
    key: "fc620b22e39ab920ca73f3b4103913d3faff2fed",
    value: "RAW-VIDEOS/Q1BigRawVideos/Learn Git In 15 Minutes-USjZcfj8yxE.mp4",
  },
  {
    key: "d2b5d55f9db95e48a243eec743f9ffa8a2f9c290",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Learn how computers add numbers and build a 4 bit adder circuit-wvJc9CZcvBc.mp4",
  },
  {
    key: "1c7f613b0c8f3ad6d5d94763d584bec86193ea4c",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/My Favorite VS Code Extensions-rH1RTwaAeGc.mkv",
  },
  {
    key: "1dfabb107be1f565ef738a5562af43e32837d650",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Photoshop Tutorial - How to Resize an Image-qu5adJfxuhw.webm",
  },
  {
    key: "c115e492774c65f4a2ff0621c6c642f49d7d79ad",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/1 - Intro to Arrays.mp4",
  },
  {
    key: "53741fe36d95e2bc9aad9de2e6454aa7ad969ab4",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/10 - L6-Map-Screencast V2.mp4",
  },
  {
    key: "ae9cd626211e19c8bf3f644081a882b9966aac0b",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/11 - Arrays in Arrays.mp4",
  },
  {
    key: "41c52749ef6b04c6344aade5189eabff2d975461",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/12 - Grid of Donuts.mp4",
  },
  {
    key: "5b1de757d02a8c763aa460ae841272e1e1c2b3ef",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/13 - Grid of Donuts + Array.mp4",
  },
  {
    key: "451632199951dd69f2d2bef36fe9d803ec628153",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/14 - Lesson 6 Summary.mp4",
  },
  {
    key: "a62dd42be80792f0f5fa3e202f6070cecbf3149b",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/2 - Donuts to Code.mp4",
  },
  {
    key: "beebcf74b892a7f79bbcd49eb5a9a4f7e390849e",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/3 - Accessing Array Elements.mp4",
  },
  {
    key: "025d5e84cb44d3769aee4f74c1344e90c3a4f0bf",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/4 - Changing Value at an Index.mp4",
  },
  {
    key: "dd70c7b0ed5248c6aebe27dfd4c00f1c3370b91a",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/5 - Array Properties and Methods.mp4",
  },
  {
    key: "14f829fea45830c56e2eb06e199c1e59d0ae4cd1",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/6 - Push.mp4",
  },
  {
    key: "c4e9867f4ce66d5415363268cd1afd897a72af8a",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/7 - Pop.mp4",
  },
  {
    key: "f04cbd82105b84ccebd28a1cb287e43b8a2257f3",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/8 - Splice.mp4",
  },
  {
    key: "f6810a0d1c358511cbb6067402059b855f1cc6ea",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/9 - The forEach Loop.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Arrays Videos/Thumbs.db",
  },
  {
    key: "a59a05aea7df63c61e4f3930d4d9d80981d1f6d3",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/1 - Intro to Conditionals.mp4",
  },
  {
    key: "c55646b4cab9c27f9eea5be3cc2f8d3cd0ab3fcd",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/10 - Lesson 3 Summary.mp4",
  },
  {
    key: "7e87a27625d0fe1c4b62d4040d8266610e7d1801",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/2 - Flowchart to Code.mp4",
  },
  {
    key: "3cc571cdefb89f9b221a382dc01d1517e3f12f7f",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/3 - More Complex Problems.mp4",
  },
  {
    key: "92c548fcad2595203051c2e4e9e0ca5c1a7938e0",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/4 - Using Logical Operators.mp4",
  },
  {
    key: "3a798c642ccb36a41fe980aea5e7c8960ee4be8b",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/5 - Logical AND and OR.mp4",
  },
  {
    key: "386935279835c1f9655fdb0f4999fcdf696e630e",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/6 - Advanced Conditionals.mp4",
  },
  {
    key: "a5307e136cb8c4d0b50417ce611f00324c3dfce4",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/7 - Ternary Operator vs. If-Else Statement.mp4",
  },
  {
    key: "6cbc2ad5c50a03062ca757286ae1c54e33603c24",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/8 - Switch Statement and Falling-through.mp4",
  },
  {
    key: "ca2c8e349b3d993370fc60dac123e10228dabd3d",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/9 - Falling-through Exploding Kittens Example.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Conditionals Videos/Thumbs.db",
  },
  {
    key: "980c4442034f2241d658471e8b252f1425ea2717",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/1 - Intro to Data Types.mp4",
  },
  {
    key: "077db00cf09389527409024d16a7ca4827066c30",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/10 - Lesson 2 Summary.mp4",
  },
  {
    key: "05746fd8cbd95028bb73d2b17d9b803ed9ea6d05",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/2 - Comments.mp4",
  },
  {
    key: "dd98e79348aeaba2fbf2eeb78e9f22841d427671",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/3 - Strings.mp4",
  },
  {
    key: "0c4bd89699047d4eb8c3729416aadfaeddbe039c",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/4 - Variables.mp4",
  },
  {
    key: "28332920e4ac6ac93694a27b0da17bc1f6eeddb3",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/5 - String Index.mp4",
  },
  {
    key: "99411204efe98514e81069e8915c82a1eabd7c2f",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/6 - Escaping Characters Bad.mp4",
  },
  {
    key: "b5c6660f03ef6fc20cc33fbe46346dbbc8755331",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/7 - Escaping Characters Good.mp4",
  },
  {
    key: "842254e68e94b5cecfe0c240d0a096c393af5e82",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/8 - Booleans.mp4",
  },
  {
    key: "42650a33f532179603d6f174630f2200b1295192",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/9 - Difference between Null and Undefined.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Data Types & Variables Videos/Thumbs.db",
  },
  {
    key: "efb92d56bff34776ebd95e18c84788ebc37cb202",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/1 - Intro to Functions.mp4",
  },
  {
    key: "2789b6a3367f742fe18908169cfdc3e0320d6bf1",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/10 - Named Function Expressions.mp4",
  },
  {
    key: "9c92c53f3ff115d4d91ca08d49cf3a03a6c516de",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/11 - Lesson 5 Summary.mp4",
  },
  {
    key: "d0ebd58130f79776c4f26a1d4e5f10f972fbf8b8",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/2 - Function Example.mp4",
  },
  {
    key: "d8b29162ba8c77604e208c3dc8e71d77ba5f9a0b",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/3 - Returning vs. Logging.mp4",
  },
  {
    key: "61b513c87912f66391852976ccc7965cd51c1d40",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/4 - Scope.mp4",
  },
  {
    key: "e1045c94c059d49b3552dbd54ba74b4dc2268157",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/5 - Scope Example.mp4",
  },
  {
    key: "be44ce7c14f9e86646f75bba477453cd589780b7",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/6 - L5 23 L Variable Shadowing V3.mp4",
  },
  {
    key: "8fef013048dc1861ae4b3f75be04141c13348ef9",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/7 - Hoisting.mp4",
  },
  {
    key: "6d72192f8a55b1f698ef13458d2ea62c80edf6f9",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/8 - Function Expressions.mp4",
  },
  {
    key: "689a9cf582ba0fc9fc341c626aa765bc372a9614",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/9 - Declared vs. Function Expression.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Functions Videos/Thumbs.db",
  },
  {
    key: "dfbb552b8d5b08772d6a8a81a88952ef48fb8593",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Loops Videos/1 - Intro to Loops.mp4",
  },
  {
    key: "fe69cdeadfce8ebc1444821005f6148b3372aba0",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Loops Videos/2 - While Loops.mp4",
  },
  {
    key: "9ce80c5f9a6acbbd9c997f8dffe50bcfceaeb1c9",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Loops Videos/3 - Infinite Loop.mp4",
  },
  {
    key: "17898d02c67ced8520052bdbddb2365b24e9a513",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Loops Videos/4 - For Loops.mp4",
  },
  {
    key: "a2e3dbbfc75677a40d1b8738ac6cf7cf68713cae",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Loops Videos/5 - Walking through a For Loop.mp4",
  },
  {
    key: "a88e3f83e903b754c9b6a723aa1f26e233e5abca",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Loops Videos/6 - Walking through a Nested Loop.mp4",
  },
  {
    key: "a93a598c729e8907dd0f225831e575bb5d06fe40",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Loops Videos/7 - Increment and Decrement.mp4",
  },
  {
    key: "7ea2902ae719c3cd729d7fe88a00c71f1429dbcf",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Loops Videos/8 - Lesson 4 Summary.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Loops Videos/Thumbs.db",
  },
  {
    key: "8d70d4d3c1dd89bfcbc3b449cf4de0202f3644e1",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Objects Videos/1 - Intro to Objects.mp4",
  },
  {
    key: "df990fdf6aefa22994f396c81081536224b365b6",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Objects Videos/2 - Objects in Code.mp4",
  },
  {
    key: "349d46dfb18ec234aff485249482f730f4735f65",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Objects Videos/3 - Objects.mp4",
  },
  {
    key: "da894cee90a4b9d7a65671fee0d177ccbe908868",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Objects Videos/4 - Object Naming Conventions.mp4",
  },
  {
    key: "aac584bf0192ced6f238347c93ab1c6b8cf2dc80",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-Objects Videos/5 - Lesson 7 Summary & Course Outro.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-Objects Videos/Thumbs.db",
  },
  {
    key: "6670af231c096f09f10eda3f8163b4bfba129424",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/res-videos-coming-from-resource-udacity/desktop.ini",
  },
  {
    key: "42d68e0b7f289a5cd91acbadc28635b8889146b6",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-What is JavaScript- Videos/1 - Intro to JavaScript.mp4",
  },
  {
    key: "9a581d2868ef31a349ddad522dee8eb19833f4be",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-What is JavaScript- Videos/2 - History of JavaScript.mp4",
  },
  {
    key: "1482250fca3e66b6d5961cff3b566e4f9904ee34",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-What is JavaScript- Videos/3 - The JavaScript Console.mp4",
  },
  {
    key: "26237cbf90156f709af640ede610e22e88879621",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-What is JavaScript- Videos/4 - //console.log.mp4",
  },
  {
    key: "4a236ded69b6498694e33f762f80d12a311a5be5",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-What is JavaScript- Videos/5 - 12_Img_gif Of What Happened (BETA).mp4",
  },
  {
    key: "b47fddbc51d70c8ad167e8ca2621a6895a04e3e8",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-What is JavaScript- Videos/6 - 17_Img_gif The Working Site (BETA).mp4",
  },
  {
    key: "be9a10727f30dade791328579ec3586262ea258e",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Res-What is JavaScript- Videos/7 - Lesson 1 Summary.mp4",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value: "RAW-VIDEOS/Q1BigRawVideos/Res-What is JavaScript- Videos/Thumbs.db",
  },
  {
    key: "24ed176f3acbc64291860f4d7e3e845b6b491c6e",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Samsung at CES 2020 in 7 minutes-civQNdOACy0.mp4",
  },
  {
    key: "ee745fac23ccea86c253caacf92329cb695eaa21",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/Samsung Bot Chef first look at CES 2020-joo3ikFS0j0.mkv",
  },
  {
    key: "cfdfaa36f421c1e03051a7552e3eace3773fc28c",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/There and Back Again A Packet's Tale - How does the Internet work.mp4-qEdv_pem-JM.mkv",
  },
  {
    key: "a4d97b9309888fbc58cbf6b8102d4eb426b12985",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/These are the coolest and weirdest gadgets at CES 2020-e2a7Xz7kqGg.mkv",
  },
  {
    key: "393fde1f48c5f2ca7680b69da2359c3b3fe06d45",
    value: "RAW-VIDEOS/Q1BigRawVideos/videos-webm-mkv-build-grid.js",
  },
  {
    key: "fb6fbdee48580c134894b4becad45d274164ffd6",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/BuildCommunDay.txt",
  },
  {
    key: "7f6a1e9e0edcb3835416a912fd0c8d38998b903b",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/Color-Game-Part-2-FIXED.mp4",
  },
  {
    key: "d8febb3a6b75905a5d232d4c43f5dca72a6dcd42",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/ColorGamePart1.mp4",
  },
  {
    key: "f27ba76a380724d478170f5453556af1c06a07fa",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/ColorGamePart3.mp4",
  },
  {
    key: "383e72fe50e81e50bd5643b45c94b98044b70860",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/ColorGamePart3HALF.mp4",
  },
  {
    key: "126104f391bd17aac65f0f8374f92373d6cc007a",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/ColorGamePart4.mp4",
  },
  {
    key: "a987c93a3202e18f6c0adb2f99fe44ff0cc5f001",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/ColorGamePart5.mp4",
  },
  {
    key: "16b4cf821a4afe53fee63416ec3a737adbf3e411",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/ColorGamePart62.mp4",
  },
  {
    key: "373c2bd275c50d099740d9313864701b65e822fa",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/ColorGamePart7.mp4",
  },
  {
    key: "2be8048b7f0f3bdcd1fd18072cf6efe83d0a1213",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/ColorGamePart8.mp4",
  },
  {
    key: "a13c7ee3748b9446dae056c481204a950f190b94",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/listOfDownloadsForTyler.txt",
  },
  {
    key: "9d5a825de13bc53b45643c4a215b55de1208b00f",
    value:
      "RAW-VIDEOS/Q1BigRawVideos/VIDEOScolorGame/COLT_STEELE_VIDEOS/Thumbs.db",
  },
  {
    key: "c1e9bd8ac399cceec7011f27b83cdf6b41ffc140",
    value: "RAW-VIDEOS/Q1BigRawVideos/WebHD.mp4",
  },
  {
    key: "312c7bc24969aff8d1032bab08a932c53dd950e7",
    value: "RAW-VIDEOS/Q1BigRawVideos/z-only-names.js.txt",
  },
  {
    key: "fb1a4f7b18dc2c9f1acf63a5805bbd631c0ba77c",
    value: "RAW-VIDEOS/quentin-watt/2import.2a.bak",
  },
  {
    key: "b2e183ea6bc68fd231f5e67d7d95af1565573cde",
    value: "RAW-VIDEOS/quentin-watt/2import.2b.bak",
  },
  {
    key: "81899251941256961b78c5b05d5abe5b0483b442",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 1 - Introduction, + downloading the software-mzlqjRYszoI.mkv",
  },
  {
    key: "27c37c586d3098c88834c8cd6cf418cc07a60786",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 10 - W3C and Validating your code-NHk7BG30Xz0.mkv",
  },
  {
    key: "a184cf4d3e15b5dd9f6ac79aae7573a2e9a72b56",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 11 - Introduction to CSS-WENkAui--lc.mkv",
  },
  {
    key: "3e8d3543d409cef85bdc04c283c747eabfb80560",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 12 - External Style Sheets-omB1DL93k0s.webm",
  },
  {
    key: "256d08119e227fd0b1b9b835f3cfd885ef5a80e7",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 13 - font properties-9Znoi2XHmDk.mkv",
  },
  {
    key: "ca5ffcce16ee63667033fce2ac16e11ece89004a",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 14 - Change the background and Hexidecimal Colors-t08UPN-NV70.mkv",
  },
  {
    key: "574a742d2b7837bbe836bcf67567a8197fa62e1e",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 15 - CSS box model, padding-0JgpvkD86l4.mkv",
  },
  {
    key: "84b8fde539e09143bbfbc5c1a958405dcc267d57",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 16 - CSS box model, Borders-WiBVAsjJF4Y.mkv",
  },
  {
    key: "48b0e0764e48c9bfe0b1ce0a988e1db61854ddd2",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 17 - CSS box model, margin-JL8IacS1dEM.mp4",
  },
  {
    key: "13b251a19ca6ea7953ab71784b56d3041128e3e8",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 18 - classes-MGUZUCz5pd4.mkv",
  },
  {
    key: "57613972ba9de3cdddb0c6fa83f685f49c505eef",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 19 - Div and Span-gih3utjXO4M.webm",
  },
  {
    key: "c8792c21a2c9a847d0779ce33899a82faa8eab10",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 2 - tags! Plus starting to code-KSdk6poA4Ig.mkv",
  },
  {
    key: "a466d136f62c36fa89495b2c175ca29d78b48f0d",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 20 - ID-jZh4BMfXv6o.mkv",
  },
  {
    key: "66be842c3367363bf5d973668d82ee25ec7a9c06",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 21 - Float and Clear-Lqpq9kvVS7k.webm",
  },
  {
    key: "1d7f08281da53977cdb93e407894967bd8b78827",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 22 - Child Selectors-6OnPxQde9Qw.mkv",
  },
  {
    key: "d80c92cdcf48bda4d9718756bf7b686b1eab7a40",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 23 - Pseudo classes-q4cBtFVSTX8.mp4",
  },
  {
    key: "0d1f1c128f9129d499396bc924b08d21056fb49d",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 24 - More pseudo classes-kqgLWnOZ9lE.mp4",
  },
  {
    key: "1c8c922c569b7f24531fc670f75f2d51dd9d36cc",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 25 - Styling links-rE3rk7LcTt8.mp4",
  },
  {
    key: "29d4992ef12ccdec4dd2d09fe7e8c32a64dd0868",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 26 - Styling Lists-ShKF5mLQHzQ.mp4",
  },
  {
    key: "29034ce44c13dfe1c8822c9d1183dd32ee2076a4",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 27 - Background Images-1_8hpPC-S98.webm",
  },
  {
    key: "5db3aa4f31162478a58fdae42080597b39705312",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 28 - Introduction to tables-uKrEz_BKk7s.mkv",
  },
  {
    key: "0421d5f484d94615b4bf5b59b72788613067af9d",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 29 - Table headers and captions-fA7wDtuu8Fw.mp4",
  },
  {
    key: "55faeac1ab35898305b0474e29a11559faf71c2b",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 3 - headers, paragraphs and line breaks-e4q7NqWZ1uM.mkv",
  },
  {
    key: "2e34e65a6b00f56a147dfc70cfaf25ccf3843352",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 30 - Tables, rowspan and colspan-IHAYN1BBNEg.mp4",
  },
  {
    key: "383ba7532903cc4f8792620e083553c5c4c18011",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 31 - Styling tables-Oh49fTrdopA.mp4",
  },
  {
    key: "b15e1d8ef231cdd44bfd99f6dd0b4d76a3ed7710",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 32 - Fixed postioning, making a fixed header-VS7ZcHPQ2v8.mkv",
  },
  {
    key: "5e04351d66b68384279adc97d2843c3d6c84e369",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 33 - Absolute postioning-KP7ciYdAuKE.mp4",
  },
  {
    key: "bd1deae281160d8b9d966890eb4d6822a074d556",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 34 - Relative postioning-r7TCXKZ0dCI.mp4",
  },
  {
    key: "92f99728a6de2d9cc49fbb5b68ccf9752f4a91d3",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 35 - New tags for the layout-wo8HafIfE6I.mp4",
  },
  {
    key: "048bedbcdad8c154f848f63e1315dca3eb2780a4",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 36 - What to put in the section-IEB-YFBDFxk.mp4",
  },
  {
    key: "da1133fc2a1d63363a77b16ccf54e2e208ec4f31",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 37 - How to center your web page-OjyDAfzxIx4.mkv",
  },
  {
    key: "aed4c481df5bedb97cc3c34d488c3b50ff304dec",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 38 - Creating the header layout-Y3cd4GXgh3U.mkv",
  },
  {
    key: "4bf12cb95f69c7e10363ed4c078259668d24f72e",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 39 - Finishing the layout-wpt-qVFIutg.mp4",
  },
  {
    key: "1e045aaefe8d920c9a9f2764679dd68c10fd88fe",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 4 - bold, italics, horizontal rule, and comments-BuEGYxtMHdo.mkv",
  },
  {
    key: "352f6cd16bc9e729a0a0cd9bc560b55dae3bc4db",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 40 - introduction to forms-DQ5yskhbnAQ.mp4",
  },
  {
    key: "4a94e651e314d7d3046cfff172ad1779539ceae2",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 41 - textboxes and labels-cAfp9X1c7Nc.mp4",
  },
  {
    key: "a4616d8b73c49f5b61a913e521605cb413737a0a",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 42 - checkboxes and radio buttons-5j-lDo9XVQE.mp4",
  },
  {
    key: "3e57c8a1461a36a07b8b32c0de2ec0aae3d0bc89",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 43 - select list-l9dBYdYVuzo.mp4",
  },
  {
    key: "a3d045831a1c5311f7a7769bb5f39ed2de63d881",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 44 - textarea-DgBTZ40eu8w.mp4",
  },
  {
    key: "de99e985aa88d34223e8a3eb9d04b91eb4c63eeb",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 45 -  passwords and upload a file-pYRnTjUWKeE.mp4",
  },
  {
    key: "08bc49708ad9a935df539ffec70efea14105b8f1",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 46 - submitting forms-jzmtsH8aXUg.mkv",
  },
  {
    key: "79333ff144d289805942c4367099a52b71aadc4d",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 47 - uploading your website to a webhost-XKea3CRhwrY.mp4",
  },
  {
    key: "83eab37fec4d45fa2e1a67f55818bc50d74dff4b",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 5 - images-7fzv9uRU2FM.mkv",
  },
  {
    key: "3cc138d2ffb40d36694e9db4ca6db1432850c9c7",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 6 - Links, linking to a different website-P7xTXvT0s-A.mkv",
  },
  {
    key: "a1ced3fbf1475b69215a0c29bf21965a53f82ecf",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 7 - Linking to different pages on our website-2xOXp1s6oTY.webm",
  },
  {
    key: "6bdf820c1e114f3d87faad6f831766260e9611a6",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 8 - Link, linking to the same page-L4EwNpRdaYw.mkv",
  },
  {
    key: "de9ef5919a3bdaa42379899526d76a8fd1572bef",
    value:
      "RAW-VIDEOS/quentin-watt/HTML5 and CSS3 Beginner Tutorial 9 - lists-u7OGAsnbIik.mkv",
  },
  {
    key: "f6142977e93588c4fe5662128e629f10e87320a8",
    value:
      "RAW-VIDEOS/quentin-watt/XHTML and CSS Tutorial - 16 - Intro to CSS--psgK1hrNNk.mkv",
  },
  {
    key: "74e1457c580c49b160a88c5a13ed7c73999b635f",
    value: "RAW-VIDEOS/RAW-VIDEOS-LS-ASTERISK-dash-N.txt",
  },
  {
    key: "a779252c9ef99aa0e248ead7b807b6ee4ad3eebb",
    value: "RAW-VIDEOS/RAW-VIDEOS-LS-ASTERISK.txt",
  },
  {
    key: "65b5e4603a519d1aa85ec9c3907abe14d3dbf50d",
    value: "RAW-VIDEOS/Screenshots/Screenshot 2020-01-10 at 05.55.01.png",
  },
  {
    key: "367149d6d2ba50d51ad646f3149e4f62ddefa852",
    value: "RAW-VIDEOS/Screenshots/Screenshot 2020-01-10 at 05.55.39.png",
  },
  {
    key: "d232a73f4be822f9e0ad02722f8e2e2c2d0dc27d",
    value: "RAW-VIDEOS/Screenshots/Screenshot 2020-01-10 at 05.57.55.png",
  },
  {
    key: "8bee536dca58860f2952405537b31c63d2676189",
    value: "RAW-VIDEOS/Screenshots/Screenshot 2020-01-10 at 05.58.01.png",
  },
  {
    key: "c100e40c5ca9ee43dd506222e31c48d2dd281c72",
    value: "RAW-VIDEOS/Screenshots/Screenshot 2020-01-10 at 05.58.10.png",
  },
  {
    key: "c00fb730dec266997a42c90661176bc4879d413d",
    value: "RAW-VIDEOS/Screenshots/Screenshot 2020-01-10 at 05.58.15.png",
  },
  {
    key: "c6436dd7e5de92a966fc9d0a7aff7686e8b90ad5",
    value: "RAW-VIDEOS/Screenshots/Screenshot 2020-01-10 at 05.58.26.png",
  },
  {
    key: "9ee57c63ce06e7cedb52c0ef3ff25c6ac62602e5",
    value:
      "RAW-VIDEOS/upload-to-sbctc-server/How the Internet Works for Developers - Pt 1 - Overview & Frontend-e4S8zfLdLgQ.mp4",
  },
  {
    key: "9e9484f689950b0a7549e7807b06c85133e4ec32",
    value:
      "RAW-VIDEOS/upload-to-sbctc-server/How the Internet Works for Developers - Pt 2 - Servers & Scaling-FTAPjr7vgxE.mp4",
  },
  {
    key: "73731d42d96830a32b9fc9d51b5267323df38e88",
    value:
      "RAW-VIDEOS/upload-to-sbctc-server/Learn Visual Studio Code in 7min (Official Beginner Tutorial)-B-s71n0dHUk.mp4",
  },
  {
    key: "dfef7e20dd8ae0ac93e9e2fc9b7c47e0a0d675ca",
    value:
      "RAW-VIDEOS/upload-to-sbctc-server/Using Git with Visual Studio Code (Official Beginner Tutorial)-i_23KUAEtUM.en.vtt",
  },
  {
    key: "8728ece30e3a854cdc4905b6a98b35d28d13e811",
    value:
      "RAW-VIDEOS/upload-to-sbctc-server/Using Git with Visual Studio Code (Official Beginner Tutorial)-i_23KUAEtUM.mp4",
  },
  {
    key: "ca9ffc8e056a22c32a6a5a759e86bbf3c15b259a",
    value: "RAW-VIDEOS/upload-to-sbctc-server/youtube-dl.exe",
  },
];
