const loadPhone= () =>{
    const inputValue = document.getElementById('inputValue').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data));

}

