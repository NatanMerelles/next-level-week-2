const db = require('../database/connection.js');

const convertHoursToMinutes = require('../utils/convertHourToMinutes.js');

module.exports = class {
  async create(req, res) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx('users').insert({
        name, avatar, whatsapp, bio
      });

      const users_id = insertedUsersIds[0];

      const insertedClassesIds = await trx('classes').insert({
        subject, cost, users_id
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursToMinutes(scheduleItem.from),
          to: convertHoursToMinutes(scheduleItem.to)
        }
      });

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return res.status(201).send()
    } catch (err) {
      await trx.rollback()

      return res.status(400).json({
        error: 'unexpected error while creating new class'
      })
    }
  }
}