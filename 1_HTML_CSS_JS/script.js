function addPerson() {
                
                let tRow = document.createElement("tr");

                let cNume = document.createElement("td");
                cNume.innerHTML = document.getElementById("lastName").value;
                tRow.appendChild(cNume);

                let cPrenume = document.createElement("td");
                cPrenume.innerHTML = document.getElementById("firstName").value;
                tRow.appendChild(cPrenume);

                let cTelefon = document.createElement("td");
                cTelefon.innerHTML = document.getElementById("phone").value;
                tRow.appendChild(cTelefon);
                
                let tBody = document.getElementById("tableBody");
                tBody.appendChild(tRow);

                let tfoot =  document.getElementsByTagName("tfoot")[0]; 
                let trInsideTfoot = tfoot.children[0]; 
                let tdInsideTrInsideTfoot = trInsideTfoot.children[0]; 
                tdInsideTrInsideTfoot.innerHTML = "Number of persons: " + tBody.children.length.toString();
            }        