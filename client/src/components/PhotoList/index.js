import React, { useState } from 'react'

const PhotoList = () => {
  const [photos] = useState([
    {
      name: 'Saipan Grave',
      category: 'saipan',
      description: 'I took this photo for a boy aboard ship. The grave in center is his cousin. It was taken on Saipan where the fellow was killed. On the invasion in June 1944',
    },
    {
      name: 'Artillery',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'Saipan Storm',
      category: 'saipan',
      description: 'It was about to storm as we pulled into Saipan two days ago. Taken on September 5, 1945',
    },
    {
      name: 'USS-Grimes docked in Saipan',
      category: 'saipan',
      description: 'At the loading pier in Saipan.',
    },
    {
      name: 'Unnamed men in Saipan',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'Captain Inspection',
      category: 'saipan',
      description: 'USS Grimes crew standing captain inspection.',
    },
    {
      name: 'Mountain in Saipan',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'Unnamed men in Saipan',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'USS Grimes Hospital force',
      category: 'saipan',
      description: 'The hospital force aboard the Grimes.',
    },
    {
      name: 'Habor of Saipan',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'Military funeral',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'Basket Weaving',
      category: 'saipan',
      description: 'A basket weaving shop. Saipan.',
    },
    {
      name: 'Unnamed men in Saipan',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'Village in Saipan',
      category: 'saipan',
      description: 'A native village. Saipan.',
    },
    {
      name: 'Unnamed men in Saipan',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'Children in Saipan',
      category: 'saipan',
      description: 'Native children of Saipan.',
    },
    {
      name: 'Unnamed men in Saipan',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'Victory over Japan',
      category: 'saipan',
      description: 'V.J. Day on Saipan.',
    },
    {
      name: 'Wedding in Saipan',
      category: 'saipan',
      description: 'A native wedding dinner. Bride and groom at end of table.',
    },
    {
      name: 'Military funeral',
      category: 'saipan',
      description: 'No description is provided for this image.',
    },
    {
      name: 'Military funeral',
      category: 'saipan',
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
    },
    {
      name: 'Girls in Saipan',
      category: 'saipan',
      description: 'The pretty native girls are not all in Hollywood. These are natives of Saipan.',
    },
    {
      name: 'Japanse Navy Lt. Commander',
      category: 'japan',
      description: 'Jap Navy Lt. Commander aboard as our pilot into Tokyo Bay.'
    },
    {
      name: 'USS Grimes LCVP',
      category: 'japan',
      description: 'An LCVP going over the side, Japan bound.'
    },
    {
      name: 'USS Grimes LCM',
      category: 'japan',
      description: 'An LCM (Landing Craft Mechanized) going over the side.'
    },
    {
      name: 'USS Grimes boats',
      category: 'japan',
      description: 'When boats are lowered off the ships, they go into this rendezvous circle.'
    },
    {
      name: 'USS Grimes Soldiers',
      category: 'japan',
      description: 'Having a wonderful time wish you were here.'
    },
    {
      name: 'Yokosuka Naval Base',
      category: 'japan',
      description: 'No description is provided for this image. Taken August 1945, in Japan.'
    },
    {
      name: 'USS Grimes Soldiers',
      category: 'japan',
      description: 'Right half, 1st wave, line abrest'
    },
    {
      name: 'Yokosuka Naval Base',
      category: 'japan',
      description: 'View of Yokosuka Naval Base before we hit.'
    },
    {
      name: 'Yokosuka Naval Base',
      category: 'japan',
      description: 'Almost there.'
    },
    {
      name: 'USS Grimes Soldiers',
      category: 'japan',
      description: 'No description is provided for this image. Taken August 30, 1945, in Japan.'
    },
    {
      name: 'USS Grimes Breach Party',
      category: 'japan',
      description: 'Our breach party hitting the first wave.'
    },
    {
      name: 'USS Grimes Second Wave',
      category: 'japan',
      description: 'Second wave hitting the beach.'
    },
    {
      name: 'USS Grimes Second Wave',
      category: 'japan',
      description: 'No description is provided for this image. Taken August 30, 1945, in Japan.'
    },
    {
      name: 'USS Grimes Naval Invasion',
      category: 'japan',
      description: 'The boat I hit the beach in.'
    },
    {
      name: 'Yokosuka Naval Base',
      category: 'japan',
      description: 'No description is provided for this image. Taken August 30, 1945, in Japan.'
    },
    {
      name: 'Sunken Ship at Yokosuka',
      category: 'japan',
      description: 'No description is provided for this image. Taken August 1945, in Japan.'
    },
    {
      name: 'Japanese Submarine',
      category: 'japan',
      description: 'One of the SNs on a jap two man sub.'
    },
    {
      name: 'Japanese AA Gun',
      category: 'japan',
      description: 'No description is provided for this image. Taken August 30, 1945, in Japan.'
    },
    {
      name: 'Japanese Navy',
      category: 'japan',
      description: 'The Jap navy as they met us.'
    },
    {
      name: 'Japanese Navy',
      category: 'japan',
      description: 'The Japs fell all over themselves trying to be helpful to us.'
    },
    {
      name: 'Japanese Navy',
      category: 'japan',
      description: 'I wonder if they were calling us any worse names than we were calling them.'
    },
    {
      name: 'Japanese Navy',
      category: 'japan',
      description: 'More Jap navy.'
    },
    {
      name: 'Bob with Japanese Navy',
      category: 'japan',
      description: 'Yours truly with Japanese Navy.'
    },
    {
      name: 'Unnamed man with Bob',
      category: 'japan',
      description: 'Guess Who'
    },
    {
      name: 'Ship Convoy',
      category: 'japan',
      description: 'Our 47 ship convoy in single file just as we made a turn following us into Ulithi'
    },
    {
      name: 'Building in Japan',
      category: 'japan',
      description: 'Most of the modern buildings were in the industry area which was leveled of by the atomic bomb. This building is a movie theater that survived except for the windows.'
    },
    {
      name: 'Mt. Suribachi',
      category: 'iwo-jima',
      description: 'Mt. Suribachi'
    },
    {
      name: '3rd and 4th division cemetary',
      category: 'iwo-jima',
      description: 'The 3rd and 4th division cemetary'
    },
    {
      name: 'Iwo Jima',
      category: 'iwo-jima',
      description: 'Iwo Jima from the top of the mt.'
    },
    {
      name: 'Mt. Suribachi Road',
      category: 'iwo-jima',
      description: 'No description is provideed for this image. Taken on Iwo Jima.'
    },
    {
      name: 'Bob with Mt. Suribachi',
      category: 'iwo-jima',
      description: 'Yours truly posing with beatiful Mt. Suribachi.'
    },
    {
      name: 'Mt. Suribachi Crater',
      category: 'iwo-jima',
      description: 'Volcanic crater of Mt. Suribachi, Iwo Jima'
    },
    {
      name: '5th divison Memorial',
      category: 'iwo-jima',
      description: 'At the 5th division cemetary, this memorial given by the navy C.Bs'
    },
    {
      name: 'USS Grimes Soldiers',
      category: 'iwo-jima',
      description: 'This is the bunch of us from the Grimes that toured the island of Iwo Jima during our 4 hr. stay.'
    },
    {
      name: '5th divison cemetary',
      category: 'iwo-jima',
      description: 'at the 5th division cemetary.'
    },
    {
      name: '3rd division cemetary',
      category: 'iwo-jima',
      description: 'These men and others from the Grimes have a relative in this cemetary.'
    },
    {
      name: 'Mt. Suribachi Monument',
      category: 'iwo-jima',
      description: 'Our group from the Grimes at the monument on top of Mt. Suribachi.'
    },
    {
      name: '5th division cemetary',
      category: 'iwo-jima',
      description: 'The 5th division cemetary. The straight stake in the foreground is an unknown grave.'
    },
    {
      name: 'Mt. Suribachi Monument',
      category: 'iwo-jima',
      description: 'This monument now stands where the marines raised the flag on Iwo Jima.'
    },
    {
      name: 'Iwo Jima',
      category: 'iwo-jima',
      description: 'iwo Jima broadside.'
    },
    {
      name: 'Japanese Planes',
      category: 'iwo-jima',
      description: 'A pile of Japanese Planes.'
    },
    {
      name: '',
      category: 'iwo-jima',
      description: ''
    },
    {
      name: '',
      category: 'iwo-jima',
      description: ''
    },
    
  ])
  return (
    <div>PhotoList</div>
  )
}

export default PhotoList