var requestOptions={
    method:'POST'
}
fetch("https://sfrs-j75dy.ondigitalocean.app/api/listDistricts",requestOptions)
          .then(function (response){
              return response.json();
          })
          .then(function (json){
              var obj = json 
              var Display = " District Name          Province\n";
              var table = document.getElementById("DataTable");
              table.innerHTML = '<tr><th>District Name</th><th>Province</th></tr>';
              for ( var i = 0;i < obj.data.length; i++){

                Display += obj.data[i].name+ "          " + obj.data[i].province.code + "        \n";
                table.innerHTML += '<tr><td>'+obj.data[i].name+'</td><td>'+obj.data[i].province.code+'</td></tr>';
             
              console.log(Display) }});
