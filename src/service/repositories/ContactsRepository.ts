import {contacts} from './IContactsRepository';
import gmail from '../../imgs/gmail.png';
import whatsapp from '../../imgs/whatsapp.png';
import linkedin from '../../imgs/linkedin.png';
import github from '../../imgs/github.png';

const contactsRepository: Array<contacts> = [
  {
    contactName: 'Gmail',
    contactImage: gmail,
    contactUrl: 'mailto:markosf.dev@gmail.com',
  },
  {
    contactName: 'LinkedIn',
    contactImage: linkedin,
    contactUrl: 'https://www.linkedin.com/in/marcus-kako/',
  },
  {
    contactName: 'WhatsApp',
    contactImage: whatsapp,
    contactUrl:
      'https://contate.me/marcuskakodev',
  },
  {
    contactName: 'GitHub',
    contactImage: github,
    contactUrl: 'https://github.com/marcus-kako',
  },
];

export default contactsRepository;
