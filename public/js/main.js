
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
                var from = document.getElementById("form_from");
                var to = document.getElementById("form-to");
                var fromPlace = from.options[from.selectedIndex].value;
                var toPlace = to.options[to.selectedIndex].value;
                console.log(toPlace);
                // const vehicle = document.getElementById('vehicle__type');
                var car = "None";
                if (fromPlace === "Benin" && toPlace === "Lagos") {
                    var car = ["Hayas Lagos"];
                }else if(fromPlace === "Benin" && toPlace === "Warri"){
                     var car = ["Classic Warri"];
                }else if(fromPlace === "Benin" && toPlace === "Port-harcourt"){
                     var car = ["Classic Port-hacourt "];
                }else if(fromPlace === "Benin" && toPlace === "Abuja"){
                     var car = ["Classic Abuja"];
                }else if(fromPlace === "Benin" && toPlace === "Kaduna"){
                     var car = ["Hayas Kaduna"];
                }else if(fromPlace === "Benin" && toPlace === "Asaba"){
                     var car = ["Hayas Asaba"]
                }else if(fromPlace === "Benin" && toPlace === ""){
                     var car = ["Benin"];
                }
                var string;
            for (i = 0; i < car.length; i++) {
                string=car;
            }
            
            document.getElementById("bus__elemnt").innerHTML="<h1 class='bus__type'>"+car+"</h1>";;
            console.log(string);
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