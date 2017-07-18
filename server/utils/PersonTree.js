class PersonNode {
  constructor(inObj) {
    this.children = []
    this.name = inObj.name || ''
    this.imageUrl = inObj.imageUrl || ''
    this.email = inObj.email || ''
    this.address = inObj.address || ''
    this.notes = inObj.notes || ''
    this.links = inObj.links || {}
  }

  getAllChildren(){
    let out = [this]
    this.children.forEach(person => out.push(...person.getAllChildren()))
    return out
  }
}

module.exports = PersonNode
