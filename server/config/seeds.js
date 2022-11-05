const db = require('./connection');
const { User, Category, Photo } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Japan' },
    { name: 'Saipan' },
    { name: 'Iwo Jima' }
  ]);

  console.log('categories seeded');

  await Photo.deleteMany();

  const photos = await Photo.insertMany([
    {
      name: 'Saipan Grave',
      category: categories[1]._id,
      description: 'I took this photo for a boy aboard ship. The grave in center is his cousin. It was taken on Saipan where the fellow was killed. On the invasion in June 1944',
      photo: 's0.jpg'
    },
    {
      name: 'Artillery',
      category: categories[1]._id,
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
      photo: 's1.jpg'
    },
    {
      name: 'Saipan Storm',
      category: categories[1]._id,
      description: 'It was about to storm as we pulled into Saipan two days ago. Taken on September 5, 1945',
      photo: 's2.jpg'
    },
    {
      name: 'USS-Grimes docked in Saipan',
      category: categories[1]._id,
      description: 'At the loading pier in Saipan.',
      photo: 's3.jpg'
    },
    {
      name: 'Unnamed men in Saipan',
      category: categories[1]._id,
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
      photo: 's4.jpg'
    },
    {
      name: 'Captain Inspection',
      category: categories[1]._id,
      description: 'USS Grimes crew standing captain inspection.',
      photo: 's5.jpg'
    },
    {
      name: 'Mountain in Saipan',
      category: categories[1]._id,
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
      photo: 's6.jpg'
    },
    {
      name: 'USS Grimes Hospital force',
      category: categories[1]._id,
      description: 'The hospital force aboard the Grimes.',
      photo: 's7.jpg'
    },
    {
      name: 'Habor of Saipan',
      category: categories[1]._id,
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
      photo: 's8.jpg'
    },
    {
      name: 'Military funeral',
      category: categories[1]._id,
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
      photo: 's9.jpg'
    },
    {
      name: 'Basket Weaving',
      category: categories[1]._id,
      description: 'A basket weaving shop. Saipan.',
      photo: 's10.jpg'
    },
    {
      name: 'Village in Saipan',
      category: categories[1]._id,
      description: 'A native village. Saipan.',
      photo: 's11.jpg'
    },
    {
      name: 'Children in Saipan',
      category: categories[1]._id,
      description: 'Native children of Saipan.',
      photo: 's12.jpg'
    },
    {
      name: 'Victory over Japan',
      category: categories[1]._id,
      description: 'V.J. Day on Saipan.',
      photo: 's13.jpg'
    },
    {
      name: 'Wedding in Saipan',
      category: categories[1]._id,
      description: 'A native wedding dinner. Bride and groom at end of table.',
      photo: 's14.jpg'
    },
    {
      name: 'Military funeral',
      category: categories[1]._id,
      description: 'No description is provided for this image. Taken in September 1945, on Saipan.',
      photo: 's15.jpg'
    },
    {
      name: 'Girls in Saipan',
      category: categories[1]._id,
      description: 'The pretty native girls are not all in Hollywood. These are natives of Saipan.',
      photo: 's16.jpg'
    },
    {
      name: 'Japanse Navy Lt. Commander',
      category: categories[0]._id,
      description: 'Jap Navy Lt. Commander aboard as our pilot into Tokyo Bay.',
      photo: 'j0.jpg'
    },
    {
      name: 'USS Grimes LCVP',
      category: categories[0]._id,
      description: 'An LCVP going over the side, Japan bound.',
      photo: 'j1.jpg'
    },
    {
      name: 'USS Grimes LCM',
      category: categories[0]._id,
      description: 'An LCM (Landing Craft Mechanized) going over the side.',
      photo: 'j2.jpg'
    },
    {
      name: 'USS Grimes boats',
      category: categories[0]._id,
      description: 'When boats are lowered off the ships, they go into this rendezvous circle.',
      photo: 'j3.jpg'
    },
    {
      name: 'USS Grimes Soldiers',
      category: categories[0]._id,
      description: 'Having a wonderful time wish you were here.',
      photo: 'j4.jpg'
    },
    {
      name: 'Yokosuka Naval Base',
      category: categories[0]._id,
      description: 'No description is provided for this image. Taken August 1945, in Japan.',
      photo: 'j5.jpg'
    },
    {
      name: 'USS Grimes Soldiers',
      category: categories[0]._id,
      description: 'Right half, 1st wave, line abrest',
      photo: 'j6.jpg'
    },
    {
      name: 'Yokosuka Naval Base',
      category: categories[0]._id,
      description: 'View of Yokosuka Naval Base before we hit.',
      photo: 'j7.jpg'
    },
    {
      name: 'Yokosuka Naval Base',
      category: categories[0]._id,
      description: 'Almost there.',
      photo: 'j8.jpg'
    },
    {
      name: 'USS Grimes Soldiers',
      category: categories[0]._id,
      description: 'No description is provided for this image. Taken August 30, 1945, in Japan.',
      photo: 'j9.jpg'
    },
    {
      name: 'USS Grimes Breach Party',
      category: categories[0]._id,
      description: 'Our breach party hitting the first wave.',
      photo: 'j10.jpg'
    },
    {
      name: 'USS Grimes Second Wave',
      category: categories[0]._id,
      description: 'Second wave hitting the beach.',
      photo: 'j11.jpg'
    },
    {
      name: 'USS Grimes Second Wave',
      category: categories[0]._id,
      description: 'No description is provided for this image. Taken August 30, 1945, in Japan.',
      photo: 'j12.jpg'
    },
    {
      name: 'USS Grimes Naval Invasion',
      category: categories[0]._id,
      description: 'The boat I hit the beach in.',
      photo: 'j13.jpg'
    },
    {
      name: 'Yokosuka Naval Base',
      category: categories[0]._id,
      description: 'No description is provided for this image. Taken August 30, 1945, in Japan.',
      photo: 'j14.jpg'
    },
    {
      name: 'Sunken Ship at Yokosuka',
      category: categories[0]._id,
      description: 'No description is provided for this image. Taken August 1945, in Japan.',
      photo: 'j15.jpg'
    },
    {
      name: 'Japanese Submarine',
      category: categories[0]._id,
      description: 'One of the SNs on a jap two man sub.',
      photo: 'j16.jpg'
    },
    {
      name: 'Japanese AA Gun',
      category: categories[0]._id,
      description: 'No description is provided for this image. Taken August 30, 1945, in Japan.',
      photo: 'j17.jpg'
    },
    {
      name: 'Japanese Navy',
      category: categories[0]._id,
      description: 'The Jap navy as they met us.',
      photo: 'j18.jpg'
    },
    {
      name: 'Japanese Navy',
      category: categories[0]._id,
      description: 'The Japs fell all over themselves trying to be helpful to us.',
      photo: 'j19.jpg'
    },
    {
      name: 'Japanese Navy',
      category: categories[0]._id,
      description: 'I wonder if they were calling us any worse names than we were calling them.',
      photo: 'j20.jpg'
    },
    {
      name: 'Japanese Navy',
      category: categories[0]._id,
      description: 'More Jap navy.',
      photo: 'j21.jpg'
    },
    {
      name: 'Bob with Japanese Navy',
      category: categories[0]._id,
      description: 'Yours truly with Japanese Navy.',
      photo: 'j22.jpg'
    },
    {
      name: 'Unnamed man with Bob',
      category: categories[0]._id,
      description: 'Guess Who',
      photo: 'j23.jpg'
    },
    {
      name: 'Ship Convoy',
      category: categories[0]._id,
      description: 'Our 47 ship convoy in single file just as we made a turn following us into Ulithi',
      photo: 'j24.jpg'
    },
    {
      name: 'Building in Japan',
      category: categories[0]._id,
      description: 'Most of the modern buildings were in the industry area which was leveled of by the atomic bomb. This building is a movie theater that survived except for the windows.',
      photo: 'j25.jpg'
    },
    {
      name: 'Mt. Suribachi',
      category: categories[2]._id,
      description: 'Mt. Suribachi',
      photo: 'ij0.jpg'
    },
    {
      name: '3rd and 4th division cemetary',
      category: categories[2]._id,
      description: 'The 3rd and 4th division cemetary',
      photo: 'ij1.jpg'
    },
    {
      name: 'Iwo Jima',
      category: categories[2]._id,
      description: 'Iwo Jima from the top of the mt.',
      photo: 'ij2.jpg'
    },
    {
      name: 'Mt. Suribachi Road',
      category: categories[2]._id,
      description: 'No description is provideed for this image. Taken on Iwo Jima.',
      photo: 'ij3.jpg'
    },
    {
      name: 'Bob with Mt. Suribachi',
      category: categories[2]._id,
      description: 'Yours truly posing with beatiful Mt. Suribachi.',
      photo: 'ij4.jpg'
    },
    {
      name: 'Mt. Suribachi Crater',
      category: categories[2]._id,
      description: 'Volcanic crater of Mt. Suribachi, Iwo Jima',
      photo: 'ij5.jpg'
    },
    {
      name: '5th divison Memorial',
      category: categories[2]._id,
      description: 'At the 5th division cemetary, this memorial given by the navy C.Bs',
      photo: 'ij6.jpg'
    },
    {
      name: 'USS Grimes Soldiers',
      category: categories[2]._id,
      description: 'This is the bunch of us from the Grimes that toured the island of Iwo Jima during our 4 hr. stay.',
      photo: 'ij7.jpg'
    },
    {
      name: '5th divison cemetary',
      category: categories[2]._id,
      description: 'at the 5th division cemetary.',
      photo: 'ij8.jpg'
    },
    {
      name: '3rd division cemetary',
      category: categories[2]._id,
      description: 'These men and others from the Grimes have a relative in this cemetary.',
      photo: 'ij9.jpg'
    },
    {
      name: 'Mt. Suribachi Monument',
      category: categories[2]._id,
      description: 'Our group from the Grimes at the monument on top of Mt. Suribachi.',
      photo: 'ij10.jpg'
    },
    {
      name: '5th division cemetary',
      category: categories[2]._id,
      description: 'The 5th division cemetary. The straight stake in the foreground is an unknown grave.',
      photo: 'ij11.jpg'
    },
    {
      name: 'Mt. Suribachi Monument',
      category: categories[2]._id,
      description: 'This monument now stands where the marines raised the flag on Iwo Jima.',
      photo: 'ij12.jpg'
    },
    {
      name: 'Iwo Jima',
      category: categories[2]._id,
      description: 'iwo Jima broadside.',
      photo: 'ij13.jpg'
    },
    {
      name: 'Japanese Planes',
      category: categories[2]._id,
      description: 'A pile of Japanese Planes.',
      photo: 'ij14.jpg'
    },
  ]);

  console.log('photos seeded');

  await User.deleteMany();

  await User.create({
    username: 'tester',
    email: 'test@test.com',
    password: 'test12345'
  });

  await User.create({
    username: 'tester2',
    email: 'test2@test.com',
    password: 'test12345'
  });

  console.log('users seeded');

  process.exit();
});

