let dragon = 0;


        let fire = document.createElement("button");

        fire.innerHTML = "fire attack";
        fire.addEventListener("click", function () {
            let ele = document.createElement("h1");
            dragon = dragon + 2;
            ele.innerHTML = dragon;
            document.body.appendChild(ele);
            if(dragon > 9)
            {
                damageDealer("dragon has been slayed!");
            }
        })
        document.body.appendChild(fire)


        let ice = document.createElement("button");
        ice.innerHTML = "ice attack";

        ice.addEventListener("click", function () {
            let ele = document.createElement("h2");
            dragon = dragon + 2;
            ele.innerHTML = dragon;
            document.body.appendChild(ele);
            if(dragon > 9)
            {
                damageDealer("dragon has been slayed!");
            }
        })
        document.body.appendChild(ice)


        let poison = document.createElement("button");
        poison.innerHTML = "poison attack";

        poison.addEventListener("click", function () {
            let ele = document.createElement("h3");
            dragon = dragon + 4;
            ele.innerHTML = dragon;
            document.body.appendChild(ele);
            if(dragon > 9)
            {
                damageDealer("dragon has been slayed!");
            }
        })
        document.body.appendChild(poison)





function damageDealer(mess)
{
    let ele = document.createElement("div");
    let damageEle = document.createElement("h1");
    damageEle.innerHTML = mess;
    ele.appendChild(damageEle);
    document.body.appendChild(ele);
}

