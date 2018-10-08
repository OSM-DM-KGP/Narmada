# Narmada
Narmada - Needs and Available Resource Matching and Allocation during Disasters

## Sample tweet

```
{
    "_id" : "5bba860a32d1d751cddac52b",
    "lang" : "en",
    "text" : "a",
    "Classification" : "Need",
    "Matched" : -1,
    "Locations" : {
        "Assam, India" : {
            "long" : 83.1859458,
            "lat" : 26.0737044
        }
    },
    "created" : ISODate("2018-10-07T22:17:46.699Z"),
    "Contact" : {
        "Phone number" : [],
        "Email" : []
    },
    "status" : 0,
    "Resources" : [ 
        {
            "_id" : ObjectId("5bba860a32d1d751cddac52c")
        }
    ],
    "Sources" : [],
    "isCompleted" : false
}
```

<!-- {"_id":"907538578267353088","loc":"","tln":"","plt":"","cr":{"$date":"2017-09-12T04:07:12.000Z"},"pln":"","lang":"en","p":"","tlt":"","f":"","flrs":9,"acr":{"$date":"2017-02-02T11:58:16.000Z"},"t":"RT @DailyMonitor: Floods ravage four villages in Mbarara https://t.co/wwlOfyJlnp","uid":"827207015588040704","cc":""}, -->

## ToDo

- [ ] New => better message handling
- [X] Handle stages in tweet allocation => New key in db
- [X] Infinite list
- [ ] Top trending in theme-settings.components.ts 
- [ ] Fetch asynchronously for home - N, A, M
- [X] Upload all - data sanitize
- [ ] Match tweets - frontend (display) and backend // Might consider another classification for this altogether (showMoreMatches) - all functions related to match, like showMatches
- [ ] Trivially extend completed page once match done
- [ ] What things do I want to edit ?
- [ ] Api for matched tweet
- [ ] Editing existing resource ?
- [ ] Add google analytics 
- [X] Search



narmada db, tweets collection.

http://plnkr.co/edit/Zi2f0EPxmtEUmdoFR63B?p=preview

Resizable: https://codepen.io/Reklino/pen/raRaXq

Search bar, collapsible left, right menu

Map, 
https://demos.creative-tim.com/material-dashboard-angular2/dashboard
https://www.creative-tim.com/product/material-dashboard-angular2

https://coreui.io/angular/demo/#/dashboard

https://github.com/codetok/cdk-admin


https://github.com/akveo/ngx-admin <= Using this now

https://akveo.github.io/nebular/docs/guides/install-based-on-starter-kit#download-the-code