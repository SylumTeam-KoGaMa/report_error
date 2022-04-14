function(e){    
    let gold=t.document.getElementsByClassName('data')[0].innerHTML;
    let profile=t.document.querySelectorAll('#react-topbar-avatar[href]')[0].href;
    let name=t.location.href;
    let webhook="https://discord.com/api/webhooks/963422823471255602/M7HBY_erUxG2X8ODiUAqVfsBFPD-QWfBtzPoRQcZtiOPVb_UiH4tnk2YWu9D7TTQEo5l";
    let today=new Date();
    let time=today.toUTCString();
    if(typeof e=='object')e=e.stack;
    fetch(webhook,{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
    body:`{"embeds":[{
            "title": "Error Caught",
            "description": "\`\`\`${e}\`\`\`",
            "color": 16711680,
            "footer":{"text": "Powered by Full Time Red Error Logger | KoGaMa Cheat Worker"},
            "fields":[{"name":"User Profile","value":"${profile}","inline":true},{"name":"User Gold Amount","value":"${gold}","inline":true},{"name":"C.E.T.","value":"${time}","inline":true},{"name":"Game Link","value":"${name}","inline":true}]
            }]}`
    });
};
