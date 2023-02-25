
const bodyDIv:any | HTMLElement = document.querySelector("body");

const buttonUp: Array<Element> = [...document.querySelectorAll("body > div > div > div.house_floor_button > div.house_floor_button_up")];
const buttonDown: Array<Element> = [...document.querySelectorAll("body > div > div > div.house_floor_button > div.house_floor_button_down")];
const elevator: any = document.querySelector("body > div > div.house_mine > div");
const elevatorDoor: any | HTMLElement = document.querySelector("body > div > div.house_mine > div > div");

bodyDIv.addEventListener("click", colorChangeButton );

function checkButton(el: any): void{
    
    if(((el.classList || el.target.classList) === buttonUp[0].classList) || ((el.classList || el.target.classList) === buttonDown[0].classList)){
        elevator.style.top = '2px';
    }
    if(((el.classList || el.target.classList) === buttonUp[1].classList) || ((el.classList || el.target.classList) === buttonDown[1].classList)){
        elevator.style.top = '56px';
    }
    if(((el.classList || el.target.classList) === buttonUp[2].classList) || ((el.classList || el.target.classList) === buttonDown[2].classList)){
        elevator.style.top = '110px';
    }
    if(((el.classList || el.target.classList) === buttonUp[3].classList) || ((el.classList || el.target.classList) === buttonDown[3].classList)){
        elevator.style.top = '164px';
    }
    if(((el.classList || el.target.classList) === buttonUp[4].classList) || ((el.classList || el.target.classList) === buttonDown[4].classList)){
        elevator.style.top = '218px';
    }
    if(((el.classList || el.target.classList) === buttonUp[5].classList) || ((el.classList || el.target.classList) === buttonDown[5].classList)){
        elevator.style.top = '272px';
    }
    if(((el.classList || el.target.classList) === buttonUp[6].classList) || ((el.classList || el.target.classList) === buttonDown[6].classList)){
        elevator.style.top = '324px';

    }
    if(((el.classList || el.target.classList) === buttonUp[7].classList) || ((el.classList || el.target.classList) === buttonDown[7].classList)){
        elevator.style.top = '380px';
    }
    if(((el.classList || el.target.classList) === buttonUp[8].classList) || ((el.classList || el.target.classList) === buttonDown[8].classList)){
        elevator.style.top = '434px';
    }
    if(((el.classList || el.target.classList) === buttonUp[9].classList) || ((el.classList || el.target.classList) === buttonDown[9].classList)){
        elevator.style.top = '488px';
    }
    if(((el.classList || el.target.classList) === buttonUp[10].classList) || ((el.classList || el.target.classList) === buttonDown[10].classList)){
        elevator.style.top = '534px';
    }
    if(((el.classList || el.target.classList) === buttonUp[11].classList) || ((el.classList || el.target.classList) === buttonDown[11].classList)){
        elevator.style.top = '587px';
    }
    if(((el.classList || el.target.classList) === buttonUp[12].classList) || ((el.classList || el.target.classList) === buttonDown[12].classList)){
        elevator.style.top = '640px';
    }
     setTimeout( openDoor,10000,el);
}

let remainsUp: Array<Element> = [];
 let remainsDown: Array<Element> = [];
 let Floor: number = 1;
 let jUp:number = 13;
 let jDown:number = 0;

 function openDoor(el:any): void{
    el.style.backgroundColor = '#1e674f';
    elevatorDoor.style.width = '100%';
    setTimeout(()=> elevatorDoor.style.width = '2px', 1000);
 }

 function colorChangeButton(a: any): void{
    for(let i = 0 ; i < buttonUp.length; i++){
        if(a.target === buttonUp[i] || a.target === buttonDown[i]){
            a.target.style.backgroundColor = '#66ff00';
            a.target.classList.add('green');
        }
        if(a.target === buttonUp[i]){
            if(remainsUp.length === 0 && remainsDown.length === 0){
                Floor = 0;
                changeFloorUp(buttonUp);
            }
            remainsUp.push(a.target);
        }
        if(a.target === buttonDown[i]){
            if(remainsUp.length === 0 && remainsDown.length === 0){
                Floor = 1;
                changeFloorDown(buttonDown);
            }
            remainsDown.push(a.target);
        }
        
    }
  }
 

 
 function changeFloorUp(a:Array<Element>){
    //arrayLength(remainsUp);
    console.log(remainsUp);
    console.log(remainsDown);
    console.log(Floor)
    if(Floor === 0){
        let i:number = 12;
        for(i ; i >= 0; i--){
        if(a[i].className === 'house_floor_button_up green' && i <= jUp){
            checkButton(buttonUp[i]);   
            a[i].classList.remove('green');
            jUp = i;
            break;
        } 
        else if((a[i].className === 'house_floor_button_up green' && i > jUp) || (remainsUp.length === 0 && remainsDown.length != 0)){
            jUp = 13;
            Floor = 1;
            changeFloorDown(buttonDown);
            break;
        }
    }
 remainsUp.pop();
 setTimeout(changeFloorUp,12000,buttonUp);
  }

}

function changeFloorDown(a:Array<Element>){
    //arrayLength(remainsDown);
    console.log(Floor);
    if(Floor === 1){
        let i:number = 0;
    for(i ; i < 13; i++){
        if(a[i].className === 'house_floor_button_down green' && i >= jDown){
            checkButton(buttonDown[i]);   
            a[i].classList.remove('green');
            jDown = i;
            break;
        }
        else if((a[i].className === 'house_floor_button_down green' && i < jUp) || (remainsDown.length === 0 && remainsUp.length != 0)){
            jDown = 0;
            Floor = 0;
            changeFloorUp(buttonUp);
            break;
        }
    }
    remainsDown.pop();
    setTimeout(changeFloorDown,12000,buttonDown);
  }
}

/*
function arrayLength(a:Array<Element>){

        if(remainsUp.length === 0 && remainsDown.length != 0){
            FloorUp = false;
           }
        if(a === remainsUp && remainsDown.length === 0){
            FloorUp = true;
           }




        if(a === remainsDown && remainsDown.length === 0){
            FloorDown = false;
           }
        if(a === remainsDown && remainsUp.length === 0){
            FloorDown = true;
           }
   
}
*/

