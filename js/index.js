window.onload=function(){
    let text1=document.querySelector(".header input");
    let arr1=localStorage.arr1? localStorage.arr1.split(","):[];
    let arr2=localStorage.arr2? localStorage.arr2.split(","):[];
    let box=document.querySelector(".bigbox .con");
    let box1=document.querySelector(".bigbox1 .con");
    let num1=document.querySelector(".bigbox .right");
    let num2=document.querySelector(".bigbox1 .right");
    function update(){
        box.innerHTML="";
        box1.innerHTML="";
        num1.innerText=arr1.length;
        num2.innerText=arr2.length;
        localStorage.arr1=arr1.join(",");
        localStorage.arr2=arr2.join(",");
        arr1.forEach(function(element,index){
               let info=document.createElement("div");
               info.className="info";
               let check=document.createElement("input");
               check.className="checkbox";
               check.setAttribute("type","checkbox");
               info.appendChild(check);
               check.onclick=function(){
                   arr1.splice(index,1);
                   arr2.unshift(element);
                   update();
               }
               let del=document.createElement("div");
               del.className="del";
               info.appendChild(del);
               del.onclick=function(){
                   arr1.splice(index,1);
                   update();
               }
               let text=document.createElement("div");
               text.className="text";
               text.innerText=element;
               info.appendChild(text);
               text.ondblclick=function(item){
                    let input=document.createElement("input");
                    let con1=this.innerText;
                    this.innerText="";
                    input.value=con1;
                    input.onkeydown=function(item){
                        if(item.keyCode==13 && this.value!=""){
                            arr1[index]=this.value;
                            update();
                        }
                    }
                    text.appendChild(input);
                    input.focus();
                    input.onblur=function(item){
                        if(this.value!=""){
                            arr1[index]=this.value;
                            update();
                        }
                    }
               }
               box.appendChild(info);

               
        }) 
        arr2.forEach(function(element,index){
            let info=document.createElement("div");
            info.className="info";
            let check=document.createElement("input");
            check.className="checkbox";
            check.checked="checked"; 
            check.setAttribute("type","checkbox");
            info.appendChild(check);
            check.onclick=function(){
                arr2.splice(index,1);
                arr1.unshift(element);
                update();
            }
            let del=document.createElement("div");
            del.className="del";
            info.appendChild(del);
            del.onclick=function(){
                arr2.splice(index,1);
                update();
            }
            let text=document.createElement("div");
            text.className="text";
            text.innerText=element;
            info.appendChild(text);
            text.ondblclick=function(item){
                let flag;
                let input=document.createElement("input");
                let con1=this.innerText;
                this.innerText="";
                input.value=con1;
                input.onkeydown=function(item){
                    flag=false;
                    if(item.keyCode==13 && this.value!=""){
                        arr2[index]=this.value;
                        update();
                    }
                }
                text.appendChild(input);
                input.focus();
                input.onblur=function(item){
                    if(flag==false){
                        return;
                    }
                    if(this.value!=""){
                        arr2[index]=this.value;
                        update();
                    }
                }
           }
            box1.appendChild(info);

        }) 
         
    }
    text1.onkeydown=function(item){
        if(item.keyCode==13 && this.value!=""){
            arr1.unshift(this.value);
            this.value="";
            update();
        } 
    } 
    // let con1=document.querySelector("#con1");
    // let con2=document.querySelector("#con2");
    // let text1=document.querySelector(".header input");
    // let num1=document.querySelector(".bigbox .right");
    // let num2=document.querySelector(".bigbox1 .right");
    // let arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    // let arr2=localStorage.arr2?localStorage.arr2.split(","):[];
    // function update(){
    //     con1.innerHTML="";
    //     con2.innerHTML="";
    //     num1.innerText=arr1.length;
    //     num2.innerText=arr2.length;
    //     localStorage.arr1=arr1.join(",");
    //     localStorage.arr2=arr2.join(",");
    //     arr1.forEach(function(item,index){
    //         let info=document.createElement("div");
    //         info.className="info";
    //         con1.appendChild(info);
    //         let check=document.createElement("input");
    //         check.className="checkbox";
    //         check.setAttribute("type","checkbox");
    //         info.appendChild(check);
    //         check.onclick=function(){
    //             arr1.splice(index,1);
    //             arr2.unshift(item);
    //             update();
    //         }
    //         let del=document.createElement("div");
    //         del.className="del";
    //         info.appendChild(del);
    //         del.onclick=function(){
    //             arr1.splice(index,1);
    //             update();
    //         }
    //         let text=document.createElement("div");
    //         text.className=("text");
    //         text.innerText=item;
    //         info.appendChild(text);
    //         text.ondblclick=function(item){
                
    //         }
    //     })
    //     arr2.forEach(function(item,index){
    //         let info=document.createElement("div");
    //         info.className="info";
    //         con2.appendChild(info);
    //         let check=document.createElement("input");
    //         check.className="checkbox";
    //         check.setAttribute("type","checkbox");
    //         info.appendChild(check);
    //         check.checked="checked";
    //         check.onclick=function(){
    //             arr2.splice(index,1);
    //             arr1.unshift(item);
    //             update();
    //         }
    //         let del=document.createElement("div");
    //         del.className="del";
    //         info.appendChild(del);
    //         del.onclick=function(){
    //             arr2.splice(index,1);
    //             update();
    //         }
    //         let text=document.createElement("div");
    //         text.className=("text");
    //         text.innerText=item;
    //         info.appendChild(text);
    //     })
    // }
    // text1.onkeydown=function(item){
    //     if(item.keyCode==13 && this.value!=""){
    //         arr1.unshift(this.value);
    //         this.value="";
    //         update();
    //     }
    // }
}