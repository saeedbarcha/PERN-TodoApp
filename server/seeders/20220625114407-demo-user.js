'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * 
     * 
     * Example:
     *  */
      await queryInterface.bulkInsert('user', [
      {
        id:1,
        name:"user1",
        email:"user1@gail.com",
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id:2,
        name:"user2",
        email:"user2@gail.com",
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id:3,
        name:"user3",
        email:"user3@gail.com",
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id:4,
        name:"user4",
        email:"user4@gail.com",
        created_at:new Date(),
        updated_at:new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('channel', [
      {
        id:1,
        name:"channel1",
        user_id:1,
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id:2,
        name:"channel2",
        user_id:2,
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id:3,
        name:"channel3",
        user_id:3,
        created_at:new Date(),
        updated_at:new Date(),
      },     
    ], {});

    
    await queryInterface.bulkInsert('video', [
      {
        id:1,
        title:"videoBy User1",
        channel_id:1,
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id:2,
        title:"videoBy User2",
        channel_id:2,
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id:3,
        title:"videoBy User3",
        channel_id:3,
        created_at:new Date(),
        updated_at:new Date(),
      },
     
    ], {});
   
  },



  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
