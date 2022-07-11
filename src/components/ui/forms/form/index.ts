import Block from '../../../../core/block';
import { Button } from '../../button';
import { tmp } from './index.tpl';
import { IForm } from './IForm';

export class Form extends Block<IForm> {
  constructor() {
    super('div', {
      submitButton: new Button({
        class: 'button popup__button',
        type: 'submit',
        text: 'Поменять',
      }),
      events: {
        click: (e: Event) => this._handleClick(e),
      },
    });
  }

  private _handleClick() {
    alert('!');
  }

  render() {
    const {submitButton} = this.props;
    return tmp({
      submitButton: submitButton.render(),
    })
  }
}
