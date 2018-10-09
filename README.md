# Narmada
Narmada - Needs and Available Resource Matching and Allocation during Disasters

## Description

During a disaster event, two types of information that are especially useful for coordinating relief operations are needs and availability of resources (e.g., food, water, medicines) in the affected region. Information posted on micro-blogging sites such as Twitter is increasingly being used to assist such post-disaster relief operations.  The two major practical challenges faced in this regard are (i) - to identify tweets that inform about resource needs and availabilities (termed as need-tweets and availability-tweets respectively),  and (ii) - to automatically match needs with appropriate availabilities. 

Our project deals with the second challenge wherein we develop a methodology to understand five important aspects of need-tweets and availability-tweets, including what resource and what quantity is needed/available, the geographical location of the need/availability, and who needs / is providing the resource.  We leverage not only the common resources mentioned in the needs and availabilities but also the geographical proximity of the locations to provide a real-time and practical solution to the matching problem. 

We propose Narmada (Need and Available Resource Matching Assistant for Disasters and Adversities.), a “semi-automated system” developed on the  aforementioned proposed methodology. The main objective of our project is to assist and facilitate the coordination of post-disaster relief operations. It achieves thus by automating the task of extracting resources and other vital information from micro-blogs and subsequently matching the potential needs and availabilities. However, the final decision of resource matching lies with the sys-admin. Narmada simply displays possible matches by considering any combination of resource similarity, location proximity and temporal relevance. The administrative control has the sole authority to choose a valid match as the situation deems necessary. This enables us to account for unforeseen events which are known only to the higher authorities and justifies the semi-automated approach proposed here.
Similarly, Narmada enables off-site volunteers to verify the information extracted and permits them to make the necessary modifications. It is crucial since the methodology might not account for covert information or certain details due to the convoluted manner in which tweets are written. This necessitates manual intervention in the form of editing extracted information or adding new information. The provision of manually inserting new information  enables Narmada to incorporate information from varied sources like phone calls, SMS, Facebook posts and the like in addition to Twitter stream.

Narmada has other additional features, such as visualising the relevant information on a map-based interface, searching specific information between the need and available tweets and manually assigning the status of a need or availability (new, verified, assigned or completed). The system is designed to have different authentication levels such as modification and insertion of resources  is permitted by remote offsite-volunteers, matching a relevant need and availability is determined by the administrator, assigning status is governed by on-site volunteers and administrator while the system is view-able by everyone. 

With Narmada, we hope to make disaster mitigation much easier by assisting volunteers in their relief coordination efforts. 






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
