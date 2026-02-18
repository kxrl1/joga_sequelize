'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
      name: 'Introduction to Ashtanga',
      slug: 'introduction-to-ashtanga',
      image: 'ashtanga.jpg',
      body: '<p>Ashtanga yoga is a dynamic and physically demanding practice that synchronizes breath with movement. It consists of a set sequence of postures, including standing poses, seated poses, backbends, and inversions. Ashtanga is known for its emphasis on strength, flexibility, and endurance, making it a popular choice for those seeking a challenging and transformative yoga practice.<p>',
      published: '2020-01-08 15:02:30',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('Articles', [{
      name: 'Morning Vinyasa Flow routine',
      slug: 'morning-vinyasa-flow-routine',
      image: 'vinyasa.jpg',
      body: '<p>Start your day with a refreshing Vinyasa Flow routine that energizes your body and calms your mind. This sequence includes sun salutations, standing poses, and gentle backbends to awaken your muscles and boost circulation. Flow through each movement with mindful breath, allowing yourself to find balance and focus for the day ahead.<p>',
      published: '2020-02-15 10:30:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('Articles', [{
      name: 'Secrets of a yoga teacher',
      slug: 'secrets-of-a-yoga-teacher',
      image: 'yoga_teacher.jpg',
      body: '<p>Discover the secrets of a successful yoga teacher, from cultivating a deep personal practice to developing effective teaching skills. A great yoga teacher is not only knowledgeable about the poses but also empathetic, patient, and able to create a supportive environment for students. Learn how to connect with your students, adapt your teaching style, and inspire others on their yoga journey.<p>',
      published: '2020-03-20 18:45:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
   ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
