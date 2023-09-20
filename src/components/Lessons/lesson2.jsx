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
  {id: 3, phraseRu: "Что нравится твоему другу?", phraseEn: ""},
  {id: 4, phraseRu: "Он очень усердно работает", phraseEn: ""},
  {id: 5, phraseRu: "Мне также нравится это", phraseEn: ""},
  {id: 6, phraseRu: "Мне нравится это тоже", phraseEn: ""},
  {id: 7, phraseRu: "Иногда он смотрит тот канал", phraseEn: ""},
  {id: 8, phraseRu: "Ходить на работу", phraseEn: ""},
  {id: 9, phraseRu: "Ходить в школу", phraseEn: ""},
  {id: 10, phraseRu: "Ходить в театр", phraseEn: ""},
  {id: 11, phraseRu: "Ходить в парк", phraseEn: ""},
  {id: 12, phraseRu: "Ходить в зоопарк", phraseEn: ""},
  {id: 13, phraseRu: "Идти домой", phraseEn: ""},
  {id: 14, phraseRu: "Приходить на работу", phraseEn: ""},
  {id: 15, phraseRu: "Приходить домой", phraseEn: ""},
  {id: 16, phraseRu: "Добираться на работу", phraseEn: ""},
  {id: 17, phraseRu: "Добираться в школу", phraseEn: ""},
  {id: 18, phraseRu: "Добираться сюда", phraseEn: ""},
  {id: 19, phraseRu: "Добираться туда", phraseEn: ""},
  {id: 20, phraseRu: "Добираться домой", phraseEn: ""},
  {id: 21, phraseRu: "В какое время она обычно приходит домой?", phraseEn: ""},
  {id: 22, phraseRu: "Сколько по времени у тебя занимает добраться туда?", phraseEn: ""},
  {id: 23, phraseRu: "Как часть ты ходишь в кино?", phraseEn: ""},
  {id: 24, phraseRu: "У меня есть сестра", phraseEn: ""},
  {id: 25, phraseRu: "У меня есть машина", phraseEn: ""},
  {id: 26, phraseRu: "У меня есть идея", phraseEn: ""},
  {id: 27, phraseRu: "Он хочет купить новую машину", phraseEn: ""},
  {id: 28, phraseRu: "Она хочет найти хорошую работу", phraseEn: ""},
  {id: 29, phraseRu: "Мне нужно проверить все документы", phraseEn: ""},
  {id: 30, phraseRu: "Она все знает", phraseEn: ""},
  {id: 31, phraseRu: "Все люди думают так", phraseEn: ""},
  {id: 32, phraseRu: "Я хочу говорить по-английски", phraseEn: ""},
  {id: 33, phraseRu: "Давай сделаем это", phraseEn: ""},
  {id: 34, phraseRu: "Давай поговорим об этом", phraseEn: ""},
  {id: 35, phraseRu: "Давай обсудим это", phraseEn: ""},
  {id: 36, phraseRu: "Я хочу сказать это", phraseEn: ""},
  {id: 37, phraseRu: "Я хочу сказать тебе эту вещь", phraseEn: ""},
  {id: 38, phraseRu: "Я знаю это", phraseEn: ""},
  {id: 39, phraseRu: "Я знаю эту вещь", phraseEn: ""},
  {id: 40, phraseRu: "Этот", phraseEn: ""},
  {id: 41, phraseRu: "Тот", phraseEn: ""},
  {id: 42, phraseRu: "Эти", phraseEn: ""},
  {id: 43, phraseRu: "Те", phraseEn: ""},
  {id: 44, phraseRu: "Я часто слушаю музыку", phraseEn: ""},
  {id: 45, phraseRu: "Это зависит от тебя", phraseEn: ""},
  {id: 46, phraseRu: "Я хочу сделать это", phraseEn: ""},
  {id: 47, phraseRu: "Делать ошибки/деньги", phraseEn: ""},
  {id: 48, phraseRu: "Делать домашнюю работу/работу по дому/бизнес", phraseEn: ""},
]

let row = phrases.map(p => <LessonRow phraseRu={p.phraseRu} phraseEn={p.phraseEn} />)

const Lesson2 = () => {
  return (
    <div className="container">
      <h2 className={classes.lessonTitle}>Урок 1</h2>
      <ul className={classes.list}>
        {row}
      </ul>
    </div>
  )
}

export default Lesson2;