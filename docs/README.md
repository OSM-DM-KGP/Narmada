# Current website - http://165.227.12.176/

During a disaster event, two types of information that are especially useful for coordinating relief operations are needs and availability of resources (e.g., food, water, medicines) in the affected region. Information posted on micro-blogging sites such as Twitter is increasingly being used to assist such post-disaster relief operations.  The two major practical challenges faced in this regard are 

* to identify tweets that inform about resource needs and availabilities (termed as need-tweets and availability-tweets respectively),  and 
* to automatically match needs with appropriate availabilities. 

Our project deals with the second challenge wherein we develop a methodology to understand five important aspects of need-tweets and availability-tweets, including
- what resource and what quantity is needed/available,
- the geographical location of the need/availability,
-  who needs / is providing the resource.

We leverage not only the common resources mentioned in the needs and availabilities but also the geographical proximity of the locations to provide a real-time and practical solution to the matching problem. 

We propose **Narmada (Need and Available Resource Managing Assistant for Disasters and Adversities)**, a “semi-automated system” developed on the  aforementioned proposed methodology. The main objective of our project is to assist and facilitate the coordination of post-disaster relief operations. It achieves thus by automating the task of extracting resources and other vital information from micro-blogs and subsequently matching the potential needs and availabilities. However, the final decision of resource matching lies with the sys-admin. 

Narmada simply displays possible matches by considering any combination of resource similarity, location proximity and temporal relevance. The administrative control has the sole authority to choose a valid match as the situation deems necessary. This enables us to account for unforeseen events which are known only to the higher authorities and justifies the semi-automated approach proposed here.

Similarly, Narmada enables off-site volunteers to verify the information extracted and permits them to make the necessary modifications. It is crucial since the methodology might not account for covert information or certain details due to the convoluted manner in which tweets are written. This necessitates manual intervention in the form of editing extracted information or adding new information. The provision of manually inserting new information  enables Narmada to incorporate information from varied sources like phone calls, SMS, Facebook posts and the like in addition to Twitter stream.

Narmada has other additional features, such as visualising the relevant information on a map-based interface, searching specific information between the need and available tweets and manually assigning the status of a need or availability (new, verified, assigned or completed). The system is designed to have different authentication levels such as modification and insertion of resources  is permitted by remote offsite-volunteers, matching a relevant need and availability is determined by the administrator, assigning status is governed by on-site volunteers and administrator while the system is view-able by everyone. 

With Narmada, we hope to make disaster mitigation much easier by assisting volunteers in their relief coordination efforts. 