import React from "react"
import shortid from "shortid"
import ContactForm from "../ContactForm/ContactForm"
import Filter from "../Filter/Filter"
import ContactList from "../ContactList/ContactList"
import style from "../PhoneBook/PhoneBook.module.css"

export default class PhoneBook extends React.Component {
  state = {
    contacts: [],
    filter: "",
  }

  inputIds = {
    nameId: shortid.generate(),
    numberId: shortid.generate(),
    finedId: shortid.generate(),
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts")
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  hasContacts = (name) => {
    return this.state.contacts.find((contact) => {
      return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    })
  }

  handleSubmit = (newContact) => {
    const { contacts } = this.state

    if (contacts.some((contact) => contact.name?.toLowerCase() === newContact.name?.toLowerCase())) {
      alert(`${newContact.name} already in the contacts.`)
      return
    }
    this.setState({
      contacts: [...contacts, newContact],
    })
  }

  deleteContact = (e) => {
    const { id } = e.target
    const { contacts } = this.state
    this.setState({ contacts: contacts.filter((contact) => contact.id !== id) })
  }

  render() {
    const { contacts, filter } = this.state
    const { nameId, numberId, finedId } = this.inputIds
    const filterContacts = contacts.filter((contact) => {
      const nameContact = contact.name
      return nameContact.toLowerCase().includes(filter.toLowerCase())
    })
    return (
      <section className={style.section}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} htmlFor={{ nameId, numberId }} />
        <h2 className={style.subTitle}>Contacts</h2>
        <Filter onChange={this.handleChange} htmlFor={finedId} value={filter} />
        <ContactList filterContacts={filterContacts} onClickDelete={this.deleteContact} />
      </section>
    )
  }
}
