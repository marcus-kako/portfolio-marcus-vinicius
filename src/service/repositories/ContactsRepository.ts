import { contacts } from "./IContactsRepository";
import gmail from '../../imgs/gmail.png'
import whatsapp from '../../imgs/whatsapp.png'
import linkedin from '../../imgs/linkedin.png'
import github from '../../imgs/github.png'

const contactsRepository: Array<contacts> = [
  {contactName: 'Gmail', contactImage: gmail, contactCardColor: 'red', contactUrl: 'mailto:markosf.dev@gmail.com'},
  {contactName: 'LinkedIn', contactImage: linkedin, contactCardColor: 'blue', contactUrl: 'https://www.linkedin.com/in/marcus-kako/'},
  {contactName: 'WhatsApp', contactImage: whatsapp, contactCardColor: 'green', contactUrl: 'https://wa.me/5575988273988?text=Ol%C3%A1%21+Vim+pelo+seu+portf%C3%B3lio%21'},
  {contactName: 'GitHub', contactImage: github, contactCardColor: 'black', contactUrl: 'https://github.com/marcus-kako'},
]

export default contactsRepository;