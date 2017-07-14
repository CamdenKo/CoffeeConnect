const Company = require('./company.model')
const Meeting = require('./meeting.model')
const Person = require('./person.model')
const User = require('./user.model')

User.hasMany(Person, {
  onDelete: 'cascade',
  hooks: true,
})
Person.belongsTo(User)

Person.belongsTo(Person, {
  as: 'parent',
})

User.hasMany(Meeting, {
  onDelete: 'cascade',
  hooks: true,
})
Meeting.belongsTo(User)

Company.hasMany(Person, {

})
Person.belongsTo(Company)

Person.belongsToMany(Meeting, {
  through: 'PeopleMeeting',
})
Meeting.belongsToMany(Person, {
  through: 'PeopleMeeting',
})

Company.hasMany(Meeting, {

})
Meeting.belongsTo(Company)

module.exports = {Company, Meeting, Person, User}
