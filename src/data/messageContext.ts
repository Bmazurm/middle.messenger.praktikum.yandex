import message from "../components/blocks/message";

export const messageContext = [
  {
    view: message, 
    context: {
      type: '',
      containerType: 'message__container_from',
      // eslint-disable-next-line max-len
      content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      time: '11:56',
      read: ''
    }
  },
  {
    view: message, 
    context: {
      type: 'message_to',
      containerType: 'message__container_to',
      content: 'Круто!',
      time: '12:00',
      read: 'message__time_read'
    }
  },
  
];
