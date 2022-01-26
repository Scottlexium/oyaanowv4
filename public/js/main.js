
        // for the dynamic changing

        function dynamic(){
            var from = document.getElementById('form_from').value;
            if (from === "Benin") {
                var to = ["To where","Lagos", "Warri", "Port-harcourt", "Abuja", "Kaduna", "Asaba"];
            }else if(a === "Lagos"){
                var to = ["Benin"];
            }else if(a === "Warri"){
                var to = ["Benin"];
            }else if(a === "Port-Harcourt"){
                var to = ["Benin"];
            }else if(a === "Abuja"){
                var to = ["Benin"];
            }else if(a === "Kaduna"){
                var to = ["Benin"]
            }else if(a === "Asaba"){
                var to = ["Benin"];
            }
            var string = "";
            for (i = 0; i < to.length; i++) {
                string=string+"<option>" + to[i] + "</option>";
            }
            string="<select id='form-to' name='new-to' >"+string+"</select>";
            document.getElementById("form-to-div").innerHTML=string;
        }

            const form = document.getElementById('sc-form');
            form.addEventListener('change', ()=>{
                var from = document.getElementById("form_from").selectedIndex;
                var to = document.getElementById("form-to").selectedIndex;
                var fromPlace = document.getElementsByTagName("option")[from].value;
                var toPlace = document.getElementsByTagName("option")[to].value;
                // const vehicle = document.getElementById('vehicle__type');
                var car = "";
                if (fromPlace === "Benin" && toPlace === "Lagos") {
                    var car = ["","Classic"];
                }else if(fromPlace === "Benin" && toPlace === "Abuja"){
                     var car = ["Hayas"];
                }else if(fromPlace === "Benin" && toPlace === "Kaduna"){
                     var car = ["Classic","Hayas"];
                }else if(fromPlace === "Benin" && toPlace === ""){
                     var car = ["Benin"];
                }else if(fromPlace === "Benin" && toPlace === ""){
                     var car = ["Benin"];
                }else if(fromPlace === "Benin" && toPlace === ""){
                     var car = ["Benin"]
                }else if(fromPlace === "Benin" && toPlace === ""){
                     var car = ["Benin"];
                }
                var string = "";
            for (i = 0; i < car.length; i++) {
                string=string+"<option>" + car[i]+ "</option>";
            }
            string="<select id='form-to' name='new-to'>"+string+"</select>";
            document.getElementById("vehicle").innerHTML=string;
            console.log(car[i]);
            });


                    // function select_change(){
        //         var from = document.getElementById("form_from").selectedIndex;
        //         var to = document.getElementById("form-to").selectedIndex;
        //         var fromPlace = document.getElementsByTagName("option")[from].value;
        //         var toPlace = document.getElementsByTagName("option")[to].value;
        //         from = fromPlace;
        //         to = toPlace;
        //         direction = from + "" +"-" + "" + to;
        //         alert(`traveling from ${from} to ${to}`); 
        //         document.querySelector('form').action = direction;
        //     }