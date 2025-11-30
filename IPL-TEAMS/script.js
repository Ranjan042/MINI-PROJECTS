const teams = [
    {
        name: "RCB",
        primary: "Black",
        secondary: "Red",
        trophies: 1
    },
    {
        name: "CSK",
        primary: "Yellow",
        secondary: "Blue",
        trophies: 5
    },
    {
        name: "MI",
        primary: "Blue",
        secondary: "Golden",
        trophies: 5
    },
    {
        name: "KKR",
        primary: "Purple",
        secondary: "Golden",
        trophies: 2
    },
    {
        name: "RR",
        primary: "Pink",
        secondary: "Blue",
        trophies: 1
    },
    {
        name: "SRH",
        primary: "Orange",
        secondary: "Black",
        trophies: 1
    },
    {
        name: "DC",
        primary: "Blue",
        secondary: "Red",
        trophies: 0
    },
    {
        name: "PBKS",
        primary: "Red",
        secondary: "Silver",
        trophies: 0
    },
    {
        name: "GT",
        primary: "Dark Blue",
        secondary: "Golden",
        trophies: 2
    },
    {
        name: "LSG",
        primary: "Light Blue",
        secondary: "Orange",
        trophies: 0
    }
];

document.querySelector('button').addEventListener('click',()=>{
    // console.log("Working")
    var randomTeam=teams[Math.floor(Math.random()*10)];
    var box=document.querySelector(".box");
    var trophyBox=document.querySelector(".trophy");
    trophyBox.innerText=`${randomTeam.trophies}T`
    box.innerText=randomTeam.name;
    box.style.backgroundColor=randomTeam.primary;
    box.style.color=randomTeam.secondary;
})

