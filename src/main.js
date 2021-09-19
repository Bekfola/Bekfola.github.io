import React from 'react';
import ReactDOM from 'react-dom';
import Msg from './msg';
import Form from './form';
import './styles.css';



class CommApp extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [
        {id: 1, date: '14.09.2021, 00:25:06', author: 'Артём Марков', text: 'А есть примеры ваших работ не на перфокартах?'},
        {id: 2, date: '14.09.2021, 00:25:06', author: 'Алиса Круглова', text: 'Найдите оптимальное решение данной задачи не более чем за три запроса в Google.'},
        {id: 3, date: '14.09.2021, 00:25:06', author: 'Вероника Черкасова', text: 'Покупаете ли вы страховку на случай падения вашего кода на продакшне?'},
        {id: 4, date: '14.09.2021, 00:25:06', author: 'Полина Воронина', text: 'Объектно-ориентированый CSS… А какие еще проявления шизофрении вам известны?'},
        {id: 5, date: '14.09.2021, 00:25:06', author: 'Дмитрий Карпов', text: 'Вы ранее привлекались за хранение данных в глобальных переменных?'},
        {id: 6, date: '14.09.2021, 00:25:06', author: 'Дарья Кириллова', text: 'Перед вами кисть, холст и мольберт. Напишите компилятор.'},
        {id: 7, date: '14.09.2021, 00:25:06', author: 'Иван Власов', text: 'Ну признайтесь уже — джаваскрипт алертами дебажили?'},
        {id: 8, date: '14.09.2021, 00:25:06', author: 'Никита Герасимов', text: 'Что, по-вашему мнению, более эффективно: скопипастить код из примеров или убедить заказчика, что ему не нужна эта фича?'},
        {id: 9, date: '14.09.2021, 00:25:06', author: 'Кирилл Смирнов', text: 'Согласны ли вы, что каждый девелопер должен посадить зрение, построить велосипед и вырастить репозиторий?'},
        {id: 10, date: '14.09.2021, 00:25:06', author: 'Александр Орлов', text: 'Скажите, вы когда-нибудь симулировали ООП?'},
        {id: 11, date: '14.09.2021, 00:25:06', author: 'Даниил Жуков', text: 'Как вы относитесь к легализации курения мануалов?'}
      ],
      newAuthor: '',
      newText: '',
      errorText: ''
    };

//    this.delComment = this.delComment.bind(this)

  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      let oldState = JSON.parse(localStorage.getItem('state'));

      this.setState({
        messages: oldState.messages,
        newAuthor: oldState.newAuthor,
        newText: oldState.newText
      });
    }
  }

  delComment(msgId) {
    const index = this.state.messages.findIndex(ind => ind.id == msgId);
    this.state.messages.splice(index, 1);
    const messages = this.state.messages;

    this.setState(
      {messages}
    );

    localStorage.setItem('state', JSON.stringify(this.state));
  }

  addComment() {
    if ((this.state.newAuthor.trim() != '') && (this.state.newText.trim() != '')) {
      const messages = this.state.messages;

      let now = new Date();
      now = now.toLocaleString();

      let testId = Math.max.apply(Math, [].map.call(messages, msg => msg.id));
      if (testId == -Infinity) {testId = 0}

      messages.push({
        id: testId + 1,
        author: this.state.newAuthor,
        text: this.state.newText,
        date: now
      });

      this.setState({
        messages: messages,
        newAuthor: '',
        newText: '',
        errorText: ''
      })

      localStorage.setItem('state', JSON.stringify(this.state));
    }
    else {
      this.setState({
        errorText: 'Оба поля должны быть заполнены!'
      })

      localStorage.setItem('state', JSON.stringify(this.state));
    }
  }


  render() {
    return (
      <div>
      <h2>А какие вопросы Вы получали на собеседовании?</h2>
      <img src="https://i2.wp.com/bosshunt.ru/wp-content/uploads/2019/02/%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5-%D1%81%D0%BE%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.jpg?w=855&ssl=1" />


      <div>
        {
        this.state.messages.map((msg, i) => {
          return(
            <Msg
              i={i}
              id={msg.id}
              date={msg.date}
              author={msg.author}
              text={msg.text}
              delComment={this.delComment.bind(this, msg.id)}
            />
          )
        })
        }
      </div>

      <div>
        <Form
          newAuthor={this.state.newAuthor}
          onChangeAuthor={ev => {
            this.setState({newAuthor: ev.target.value});
            localStorage.setItem('state', JSON.stringify(this.state));
          }}
          newText={this.state.newText}
          onChangeText={ev => {
            this.setState({newText: ev.target.value});
            localStorage.setItem('state', JSON.stringify(this.state));
          }}
          onSubmit={this.addComment.bind(this)}
          errorText={this.state.errorText}
        />
      </div>

      </div>
    );

  }

}

ReactDOM.render(
  <CommApp />,
  document.querySelector('#app')
)
