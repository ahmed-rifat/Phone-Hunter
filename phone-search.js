const loadPhone= () =>{
    document.getElementById('phone-list-container').innerHTML="";
    const inputValue = document.getElementById('inputValue').value;
    if(inputValue != "oppo" && inputValue != "iphone" && inputValue != "huawei"){
        alert('Phone not found');
    } else{
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data));
  
    // inputValue.data.slice(0,19);
    // if(inputValue==data){
    //     alert('phone not found');
   
       }
    

}

const displayPhone = (phones)=>{
    const slice =phones.slice(0,20);
    for (const phone of slice){
        const phoneListContainer = document.getElementById('phone-list-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="row  mt-5">
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${phone.image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">Name: ${phone.phone_name}</h5>
                <p class="card-title"> Brand: ${phone.brand}<p>
                <p class="card-title"> Model: ${phone.slug}<p>
                <button onclick="detailsShow('${phone.slug}')" class="btn btn-success" >Specification</button>

                </div>
              </div>
        </div>
        
        `
        phoneListContainer.appendChild(div);     
    }
}

 const detailsShow = (slugId) =>{
     document.getElementById('collapse-id-info').innerHTML= "";
    const url = `
    https://openapi.programming-hero.com/api/phone/${slugId}
    `;
    fetch(url)
    .then(res => res.json())
    .then( data => features(data.data))
 }

 const features = info =>{
    //  console.log(info.releaseDate)
   const collapseIdInfo = document.getElementById('collapse-id-info');
   const collapseDiv = document.createElement('div');
   collapseDiv.innerHTML=`
   <div class="card card-body" id="close-btn" style="width: 300px;">
   <p>${info.mainFeatures.storage},${info.mainFeatures.memory},${info.mainFeatures.displaySize},${info.mainFeatures.chipSet} </p>
   <p>Sensor: ${info.mainFeatures.sensors}</p>
   <p> Others: ${info.others.WLAN},${info.others.Bluetooth},${info.others.GPS},${info.others.USB}</p>
   <p> ${info.releaseDate ? info.releaseDate:'Coming soon' }</p>
 
 <button onclick ="closeButton()" type="button" class="btn btn-secondary" id="close-btn">Close</button>

 </div>
   `
   collapseIdInfo.appendChild(collapseDiv);

   
 }

 const closeButton = ()=>{
    const closeBtn = document.getElementById('close-btn');

    closeBtn.style.display = 'none';
    
 }
 