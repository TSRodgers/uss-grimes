import React, { useCallback, useRef, useState } from "react";
import HTMLFlipBook from 'react-pageflip';
import PageCover from "../JournalCover";
import Page from "../JournalPage";

const JournalItem = (props) => {
  const book = useRef();
  const [currentPage, setCurrentPage] = useState('');

  const nextPage = () => {
    book.current.pageFlip().flipNext();
  }

  const prevPage = () => {
    book.current.pageFlip().flipPrev();
  }

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  return (
    <>
      <HTMLFlipBook width={550}
      height={733}
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      showCover={true}
      onFlip={onFlip}
      ref={book}
     >
        <PageCover>Sea Stories</PageCover>
        <Page number="1">
        Sea Stories
  	      by Robt. E Bowman GM 3/c
  	
        November 28, 1944-0100
  
        Arrived in Astoria, Ore after a long 4 day trip up from San Diego. Got my first glimpse of the USS Grimes at the wee hour of one A.M. She sure is a nice slick looking ship all right. I went aboard her this night which began a long adventursome voyage we will spend together.
  
        December 4, 1944
  
        Just started our first run on the Grimes. We headed this morning for Seattle, Wash. Boy is it rough. Our ship is empty and bobbing around like a cork. I wonder what all those fellows see in the water that they
        </Page>
        <Page number="2">
        are hanging over the rail all the time. I didn't get too sick. My head got plenty woozie though.
  
        Dec. 6, 44
  
        I sure didn't know what a job it was going to be loading ammunition aboard when the barge pulled along side in Bremington. We loaded the high explosive from ten in the morning til 5 the next morning. Being a Gunners Mate (striker) I had to be on hand most of the time. Was about dead. Would have died maybe if they wouldn't have let us sleep in till 9:30 A.M. that morn.
  
        Dec. 7
  
        Pulled into Seattle about noon. Started loading stores. I can forsee another sleepless
        </Page>
        <Page number="3">
        night. Boy this is rugged. When does a guy breathe around here.
  
        Dec. 10, 44
  
        Took us two days to get here to San Francisco from Seattle. Got a big kick out of going under the Golden Gate and seeing Alcatraz and all in the bay. We picked up our 24 LCVP boats here and spent another night up, getting them aboard and properly secured down for sea. Hardly had the job finished and we were off at 0430 for San Pedro.
  
        Dec 11, 44
  
        Docked in San Pedro harbor to commence a week of shake down maneuvers.
        </Page>
        <Page number="4">
        Dec 24, 44
  
        My first Xmas away from home. Still in San Pedro. I was lucky enough to get the weekend off and went to spend Christmas and Christmas eve at Uncle Wills in Van Nuys. Had a swell time.
  
        Dec 27,
  
        Docked in San Diego bay ready to start several days of boat operations and ect off the shores of Coronado island. What days these are. Putting the boats in the water, then bringing them aboard almost any time of the day or night. We got so we could get all 26 boats off into the water in less than 20 minutes. A job much
        </Page>
        <Page number="5">
        harder than it appears to be.
  
        Jan 11, 45
  
        This day marks my first complete year in the navy. Only two more days till my 19th birthday.
  
        Jan 18
  
        Pulled into the repair base at San Diego to get a few days of construction and repair.
  
        Jan 24, 45
  
        Shoved off for Seattle again. Had drills all day long the whole way up there. Fire drills, collision drills, battle stations and others.
        </Page>
        <Page number="6">
        Jan 27, 45
  
        Pulled into pier 42 at Seattle to load up for overseas. Had half the days off for liberty since it is our last days in the U.S. Had steavadoors (stevedores) load our cargo so we were not so busy.
  
        Jan 30.
  
        Went to Port Angles and docked to wait for our convoy to form. Loaded on about 600 Army fliers for transportation to Honolulu.
  
        Feb 1, 45
  
        A big day. Took our last glimpse of the good old U.S. off the fantail. Started on our
        </Page>
        <Page number="7">
        first overseas cruise to Honolulu. Also the good news came through that I was advanced to GM 3/c. Yes, the day was full and exciting. A storm started around evening and the water got very rough. This lasted for 5 days. Most of the trip to Honolulu.
  
        Feb 9, 45
  
        Spotted the hills of the island of Oahu early in the morning. Pulled into Honolulu pier 28 at 1000. Got a few hours liberty at noon till 1830 to look over the town. Had to dig out my whites. When I put them away in Sept I surely did not
        </Page>
        <Page number="8">
        think I would be getting them out in Feb.
  
        Feb 11, 45
  
        Today, Sunday, I had all day off so started out looking for Ruth Barns. Found her and Bill around 1100. Had lots to talk about. Bill having a day off too, we went to the famous Wakiki beach for a swim which is only a block from where they live. I ate at their house and got back to the ship by 1830.
  
        Feb 12, 45
  
        This morning we left the Honolulu pier and went down to Pearl Harbor.
        </Page>
        <Page number="9">
        Had a good look at the famous harbor as we went in. Got our flag aboard in preparation for 5 days operations there on the islands.
  
        Feb 13, 45
  
        Got up our task force and started on landing operations on Maui for 5 days. Just continous putting the boats in the water, then back aboard.
  
        Feb 18
  
        Got back to Pearl Harbor this afternoon. Will go into availability here for a few days.
  
        Feb 19. 
  
        Sent most of our crew to different 5 day schools at Pearl but brought them back in the evening
        </Page>
        <Page number="10">
        because of a sudden change of order. Stayed up all night loading ship with stores and ammunition.
  
        Feb 20, 45
  
        Off for Eniwetok(Marshals Island). Sure was sudden. We are not really prepared for a war zone either. Lost several life rafts in the storm from the U.S. and a few other things.
  
        Feb 28, 45
  
        Arrived at the Marshalls and anchored at Eniwetok. First Jap mandated island I ever saw. All the trees were shot off and etc.
  
        March 1, 45
  
        Went to a recreational party
        </Page>
        <Page number="11">
        on Eniwetok today as an S.P. Glad I got over on the island anyhow. Had a movie on deck that night.
  
        March 2, 45
  
        Had revelille (reveille ) at 4 o'clock and shoved off before daylight. Did not know where we were going until the Captain announced that we were going to Iwo Jima. An island where the marines were engaged in heavy fighting. Sure surprised most of us and surely were on the alert. We had a 8 ship convoy and four destroyer escorts. One chased down a submarine and sunk it the 5th day we were out.
        </Page>
        <Page number="12">
        March 13, 45
  
        Have been circling about 100 miles from Iwo Jima the past few days. One of the destroyers lost a man over the side last night. Endangered the whole convoy by playing spot lights on the water. Was glad they were that interested in getting one man back. Dumped off a life raft last night for him but came back to the spot today and picked it up. Empty.
  
        March 14, 45
  
        Went into Iwo Jima this morning. The stagr(?) shells had it lit up like a Xmas tree. We docked about a mile off the northern end
        </Page>
        <Page number="13">
        of the island where all the fighting was still going on. I sat on deck and watched the marines on the island roust out the Japs from their caves through a pair of binoculars. Was fun to watch, from a mile away.
  
        March 15
  
        Machine gun bullets hit our deck this morning and we had to move to the other side of the island. We started to debark marines and equipment. I like to listen to the marines tell their story of their battle but it was not funny and they left a lot of buddies dead on the island.
        </Page>
        <Page number="14">
        March 17, 45
  
        Took aboard about 1500 more marines. Boy is it crowded now. These boys sure looked ragged. They are what is left of the first bunch to hit the beach. Haven't had the chance to shave or wash for 3 weeks. They are happy now. We are taking them to Maui, on of the Hawaiian islands.
  
        March 18
  
        Tonight the unconditional surrender of Germany was reported in by radio. The marines and sailors went wild with happiness. Some news for the marines after they just finished taking Iwo Jima. All organized resistance is gone on the island
        </Page>
        <Page number="15">
        but marines will be working for some time getting snipers out of their caves in the volcano and the northern end of the island.
  
        March 19
  
        What a disappointment when they announced this morning that last nights report was false. We are hoping every minute we will hear the real thing. The false report came from the island (Iwo Jima).
  
        March 20, 45
  
        Shoved off from Iwo Jima this morning bound for Guam. The marines were sure glad to leave that place but they were thinking of the fellows
        </Page>
        <Page number="16">
        who wasn't leaving too.
  	    I spent most of the day in the captains cabin at a hearing. Seems Lt.(JG) Buzan, assistant gunnery officer is accused of stealing a marine Lts. Jap rifle. The rifle was checked into the armory. When the Lt. came for his rifle Buzan said he gave it to another marine who said the Lt. wanted him to get it for him. After an investigation by the gunners mates the rifle was found hidden very well in the armory. Maybe this is the chance we have been waiting to kick that bird off the ship. Buzan is going to look at all the marines aboard tomorrow and try to identify the marine he said he gave the rifle to. He's got a job. There are 1700 marines aboard.
        </Page>
        <Page number="17">
        I was a witness at the trial because I was in the armory when he said he gave it to the marine. What a day.
  
        March 22, 45
  
        Arrived in Guam at 1600. Left all our boats here but two and received life raft aboard. This island is even prettier than the Hawaiian islands. Saw a movie on deck "The Great Moment". Marine jazz band played this eve. too.
  
        March 23
  
        A big day. First we pulled out of Guam at 1000 this morning with no boats so no machine guns to work with. I went back and helped with the 5" 38. At 1500 the captain called us to his cabin and he read off Lt. Buzan.
        </Page>
        <Page number="18">
        The verdict was that he was to be transferred off the Grimes as soon as possible and the Captain recommended him unfit for any advancement for a year. This was the happy part of todays happenings. Sure will be nice without him. My joy was marred at 1700 when I witnessed a funeral and burial at sea. The first one I have ever seen and hope it is the last. One of the marines we have aboard died of wounds inflicted on Iwo Jima.
  	      We are on our way to Eniwetok (Marshalls) Sure hope that a monthsback mail is waiting there.
        </Page>
        <Page number="19">
        March 27, 45
  
        Got into Eniwetok this morning and immediately started refueling. Was disappointed not to get any mail here
  
        March 28
  
        Left Eniwetok this morning and will about a weeks trip to Pearl Harbor. Wish we were there. Its next thing to the States.
  
        April 1 (1st and 2nd) Easter
  
        Well I had two Easter Sundays in a row which I never expect to happen again in my life. You see we crossed the international date line on the 1st which set us back a day. Two Sundays in a row. That's
        </Page>
        <Page number="20">
        something that don't often happen to a person. Since we are enroute from the Marshalls to Pearl Harbor I spent a peaceful two day vacation aboard ship.
  
        April 4, 45 Mom's Birthday (41)I think
  
        At 1200 we pulled into Pearl Harbor. Sure felt good to get a glimpse of women and some autos etc. again. We pulled out right away again for Maui at 1800.
  
        April 5, 45
  
        Well today we lost our Iwo Jima marines at Maui. They are staying on this island for a few months at a rest camp. We got all their equipment unloaded in
        </Page>
        <Page number="21">
        record time and will start back to Pearl Harbor in the morning. Boy, the ship looks deserted after 1700 marines getting off even though there is a crew of 500. I guess this concludes our Iwo Jima run. Got one star now. Where will it be next??
  
        Apr 6, 45
  
        Moored in Pearl Harbor this morning and got a liberty. Spent the afternoon at Ruth's house.
  
        Apr 7.
  
        Took on a lot of boat marines fresh from the states for transportation to Hilo on Hawaii.
        </Page>
        <Page number="22">
        Apr 8, 45
   
        Left for Hilo at 1800.
        
        Apr 9, 45
        
        Arrived at Hilo at 0800 and dumped off marines. Left at 1800.
        
        Apr 10, 45
        
        Into Pearl Harbor again and went to Honolulu on liberty. Bought Hawaii souvenirs for all back home. Are starting an availability period to last at least 10 days. Will get repair work and painting done and get loaded up with stores. Can't tell where it will be next.
        </Page>
        <Page number="23">
        Apr 15, 45
  
        Spent another liberty with Bill and Ruth at Waikiki.
  
        Apr 19, 45
  
        I went on a trip around the island of Oahu. Saw quite a few interesting sights. The blow hole, Mormon Temple, Hula Dancers and the beautiful country. Large pineapple and sugar cane fields. We went swimming and I learned how sharp coral was with a gash on the leg.
  
        Apr 22, 45
  
        Went into Honolulu. Ruth was not home but had a good time
        </Page>
        <Page number="24">
        at the Royal Hawaiian Hotel on the beach of Waikiki and in down town. Honolulu with Lowe and Lane, G.M. strikers.
  
        May 7, 45
  
        Celebrating the surrender of Germany today. All wish it was the Japs too. Still at Pearl Harbor.
  
        May 23, 45
  
        Left Pearl Harbor for San Francisco. Everybody overjoyed at going back to the states. Have a lot of casualties aboard from Iwo Jima and Okinawa.
        </Page>
        <Page number="25">
        May 30, 45
  
        Arrived in Frisco this morning and I left the ship about noon on a 48 hour pass. Called the folks on the phone.
  
        June 1, 45
  
        Returning to the ship at the expiration of my 48 hour pass. I learned that there was a change of plans and we pulled out of San Franscisco Bay around noon for Seattle. Met Bob Genet in town before going back aboard ship. His is on APA 5 and was about to return to Pearl Harbor.
        </Page>
        <Page number="26">
        June 3, 45
  
        Captain really opened up the Grimes and we arrived in Seattle at 1800 tonight. I do not rate liberty until tomorrow.
  
        June 4, 45
  
        Today we learned we are to get a 4 day leave. Not very excited about it for I can't make it home.
  
        June 8, 45
  
        My leave started today but has been cut to 3 days. Due back Monday the 11th.
  
        June 10, 45
  
        Going to church here in Seattle.
        </Page>
        <Page number="27">
        I met some fine folks today and was invited to a picnic.
  
        June 11, 45
  
        Was surprised to see the Grimes high and dry out of the water when I returned to the ship. She has been in dry dock for two days and the Todd shipyard workers have been giving her a real going over.
  
        June 12, 45
  
        We left the dry dock and went over to pier 42 here in Seattle to load up.
  
        June 16, 45
  
        All supplies and cargo loaded
        </Page>
        <Page number="28">
        We received troops aboard and got underway at 2000 tonight. Sure hate to leave the states. Especially Seattle after meating Virginia last night.
  
        June 23, 45
  
        Pulled into a Honolulu pier at noon today and I hot footed it out to Waikiki to see Ruth this afternoon. She already knew I was in the U.S. for she received a letter from Mom and also my card I sent from Frisco.
  
        June 26, 45
  
        What a day. I was sent to Pearl Harbor for some
        </Page>
        <Page number="29">
        ordinance supplies and it took me all day to make the transaction and transportation back to the ship. Then it took a long time to load it aboard because they secured all booms for getting underway tomorrow.
  
        June 27, 45
  
        We are off to Eniwetok (Marshalls). Haul most of the troops we brought from the States and picked up a few more at Honolulu
  
        June 3, 45
  
        Tonight we cross the International date line so I
        </Page>
        <Page number="30">
        will see nothing of July 1st this year. Tomorrow will be July 2nd.
  
        July 4th 1945
  
        We celebrated the 4th by pulling into Eniwetok. We had a big turkey dinner today. Are refueling tonight already so probably won't stay here long.
  
        July 8, 45
  
        Today we left Eniwetok for Ulithi. It is 4 days west of the Marshalls.
  
        July 12
  
        Got into Ulithi Went over to the island of MogMog
        </Page>
        <Page number="31">
        for a recreation party. These small islands are similiar to the Marshalls. Seems though we are going to stay here with all these troops aboard for awhile.
  
        July 20, 45
  
        Left Ulithi today for Le Shima, a small island 8 mi off Okinawa. We were the flagship of a 47 ship convoy.
  
        Jul 24, 45
  
        Arrived at Le Shima and started unloading passengers and cargo. Had an air raid tonight.
        </Page>
        <Page number="32">
        July 27
  
        Left Le Shima, the island where Ernie Pyle was killed. Seen a memorial for him built there. We anchored in a harbor at Okinawa. Had three air raids tonight.
  
        Aug 1, 45
  
        Had to get out of the harbor today because of an approaching tornado.
  
        Aug 3, 45
  
        Got back into Okinawa harbor. Storm was not as bad as we expected but was rough.
        </Page>
        <Page number="33">
        Aug 6, 1945
  
        Left Okinawa today. Sure am glad to get out of there. In the 13 days at Le Shima and Okinawa we had a total of 10 air raids. As many as 3 in one night. 5 ships were damaged and one destroyer sunk by bombs and suicide planes during our stay here. As yet we do not know where our next port will be.
  
        Aug 10, 45
  
        Arrived in Ulithi again.
  
        Aug 20, 45 (approx)
  
        Left Ulithi for Siapan today. We should get there by tomorrow.
        </Page>
        <Page number="34">
        Aug 21, 45 (approx)
  
        Looks as if the war is about over. A new atomic bomb has killed several thousand people in Japan and they are considering our surrender terms. Our orders were changed from changed from Siapan to Guam. We will arrive in Guam this afternoon.
  
        Aug 22, 45 (approx)
  
        Well it was reported by Admiral Nimitz here today that the Japs have accepted our surrender terms. I guess we knew they would for we have been loading for the landing and will leave
        </Page>
        <Page number="35">
        for Japan tommorrow.
  
        Aug 25, 45 (approx)
  
        We met the third fleet today just off Japan. Having a busy time transferring personnel aboard our ship for a conference.
  
        Aug 27(approx)
  
        A Japanese naval officer cme aboard with charts etc. Today he is to take us into Tokoyo Bay past the mine fields.
  
        Aug 28 (approx)
  
        Anchored in Sagami Bay for the night. Got my first look at the great Mt. Fuji.
        </Page>
        <Page number="36">
        Aug 31, 45
  
        Today was the big day. We went into Tokyo Bay this morning and made a landing at the Yokusuka Navel Base just outside of Yokahama. I was in the first wave of boats to hit the beach to get some good pictures. I traveled all over the Navel base and got some good pictures and souvenirs.
  
        Sept 2. VJ DAY
  
        We left Japan today to go to Siapan. Its hard to tell what we will do now.
        </Page>
        <Page number="37">
        Sept 5, 45
  
        Today we got our first look at the island of Siapan but nothing seems exciting anymore after being at Japan itself.
        </Page>
        <PageCover>The End</PageCover>
      </HTMLFlipBook>
      <div>
        <div>
        <button onClick={prevPage}>
                Previous page
              </button>

              [<span>{currentPage}</span> of 
               <span> 37</span>]

              <button onClick={nextPage}>
                Next page
              </button>
        </div>
      </div>
    </>
  );
}

export default JournalItem;