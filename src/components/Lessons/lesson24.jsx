import LessonRow from "./LessonRow/LessonRow";
import classes from "./lessons.module.scss";

//24
// word order - порядок слов
//always/often/usually - ставим только в середине
//also ставится в середине, too ставится на конце
// sometimes может быть в начале, в середине и в конце
// article - артикль
// I have a car - I have got a car - I've got a car - у меня есть машина
// He has a car - He has got a car - He's got a car - у него есть ташина
// a/an ajective + noun(one) - артикль прилагательное существительное в единственном числе
//let's - давай
let phrases = [
  {id: 1, phraseRu: "Я очень хорошо знаю это", phraseEn: "I know it very well"},
  {id: 2, phraseRu: "Часто она меня спрашивает об этом", phraseEn: "He often ask me abut it"},
  {id: 3, phraseRu: "Что нравится твоему другу?", phraseEn: "What does your friend like?"},
  {id: 4, phraseRu: "Он очень усердно работает", phraseEn: "He works wery hard"},
  {id: 5, phraseRu: "Мне также нравится это", phraseEn: "I also like it"},
  {id: 6, phraseRu: "Мне нравится это тоже", phraseEn: "I like it too"},
  {id: 7, phraseRu: "Иногда он смотрит тот канал", phraseEn: "Sometimes he watch that channel"},
  {id: 8, phraseRu: "Ходить на работу", phraseEn: "Go to work"},
  {id: 9, phraseRu: "Ходить в школу", phraseEn: "Go to school"},
  {id: 10, phraseRu: "Ходить в театр", phraseEn: "Go to the theater"},
  {id: 11, phraseRu: "Ходить в парк", phraseEn: "Go to the park"},
  {id: 12, phraseRu: "Ходить в зоопарк", phraseEn: "Go to the zoo"},
  {id: 13, phraseRu: "Идти домой", phraseEn: "Go home"},
  {id: 14, phraseRu: "Приходить на работу", phraseEn: "Come to work"},
  {id: 15, phraseRu: "Приходить домой", phraseEn: "Come home"},
  {id: 16, phraseRu: "Добираться на работу", phraseEn: "Get to work"},
  {id: 17, phraseRu: "Добираться в школу", phraseEn: "Get to school"},
  {id: 18, phraseRu: "Добираться сюда", phraseEn: "Get here"},
  {id: 19, phraseRu: "Добираться туда", phraseEn: "Get there"},
  {id: 20, phraseRu: "Добираться домой", phraseEn: "Get home"},
  {id: 21, phraseRu: "В какое время она обычно приходит домой?", phraseEn: "What time does she usually come to work?"},
  {id: 22, phraseRu: "Сколько по времени у тебя занимает добраться туда?", phraseEn: "How long does it take tou to get there?"},
  {id: 23, phraseRu: "Как часть ты ходишь в кино?", phraseEn: "How often do you go to the cinema?"},
  {id: 24, phraseRu: "У меня есть сестра", phraseEn: "I have a sister"},
  {id: 25, phraseRu: "У меня есть машина", phraseEn: "I have a car"},
  {id: 26, phraseRu: "У меня есть идея", phraseEn: "I have an adea"},
  {id: 27, phraseRu: "Он хочет купить новую машину", phraseEn: "He wants to buy a new car"},
  {id: 28, phraseRu: "Она хочет найти хорошую работу", phraseEn: "He wants to look for a good job"},
  {id: 29, phraseRu: "Мне нужно проверить все документы", phraseEn: "I need to check all the documents"},
  {id: 30, phraseRu: "Она все знает", phraseEn: "She knows everything"},
  {id: 31, phraseRu: "Все люди думают так", phraseEn: "All persons think so"},
  {id: 32, phraseRu: "Я хочу говорить по-английски", phraseEn: "I want to speak English"},
  {id: 33, phraseRu: "Давай сделаем это", phraseEn: "Let's do it"},
  {id: 34, phraseRu: "Давай поговорим об этом", phraseEn: "Let's speak about it"},
  {id: 35, phraseRu: "Давай обсудим это", phraseEn: "Let's discuss it"},
  {id: 36, phraseRu: "Я хочу сказать это", phraseEn: "I want to say it"},
  {id: 37, phraseRu: "Я хочу сказать тебе эту вещь", phraseEn: "I want to tell you this thing"},
  {id: 38, phraseRu: "Я знаю это", phraseEn: "I know it"},
  {id: 39, phraseRu: "Я знаю эту вещь", phraseEn: "I know this thing"},
  {id: 40, phraseRu: "Этот", phraseEn: "This"},
  {id: 41, phraseRu: "Тот", phraseEn: "That"},
  {id: 42, phraseRu: "Эти", phraseEn: "These"},
  {id: 43, phraseRu: "Те", phraseEn: "Those"},
  {id: 44, phraseRu: "Я часто слушаю музыку", phraseEn: "I often listen to music"},
  {id: 45, phraseRu: "Это зависит от тебя", phraseEn: "It depend on you"},
  {id: 46, phraseRu: "Я хочу сделать это", phraseEn: "I want to do it"},
  {id: 47, phraseRu: "Делать ошибки/деньги", phraseEn: "Make mistakes/money"},
  {id: 48, phraseRu: "Делать домашнюю работу/работу по дому/бизнес", phraseEn: "Make a homework/housework/business"},
]

let row = phrases.map(p => <LessonRow phraseRu={p.phraseRu} phraseEn={p.phraseEn} />)

const Lesson24 = () => {
  return (
    <>
    <div className={classes.container}>
      <h2 className={classes.lessonTitle}>Урок 24</h2>
      <ul className={classes.list}>
        {row}
      </ul>
    </div>
    </>
  )
}

export default Lesson24;