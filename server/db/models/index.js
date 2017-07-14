const Company = require('./company.model')
const Meeting = require('./meeting.model')
const Person = require('./person.model')
const User = require('./user.model')

User.hasMany(Person, {
  onDelete: 'cascade',
  hooks: true,
  as: 'people',
})
Person.belongsTo(User)

Person.belongsTo(Person, {
  as: 'parent',
})

User.hasMany(Meeting, {
  onDelete: 'cascade',
  hooks: true,
  as: 'meetings',
})
Meeting.belongsTo(User)

Company.hasMany(Person, {
  as: 'people',
})
Person.belongsTo(Company)

Person.belongsToMany(Meeting, {
  as: 'people',
  through: 'PeopleMeeting',
})
Meeting.belongsToMany(Person, {
  as: 'meetings',
  through: 'PeopleMeeting',
})

Company.hasMany(Meeting, {
  as: 'meetings',
})
Meeting.belongsTo(Company)

module.exports = {Company, Meeting, Person, User}
