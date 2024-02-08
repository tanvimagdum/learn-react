function Item({person, size=100}) {

  return (
    <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={person.image}
          alt={person.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards} </b>
            ({person.awardName})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
  )

}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Item 
        person = {{ name: "Maria Skłodowska-Curie", 
                    image: 'https://i.imgur.com/szV5sdGs.jpg', 
                    profession: 'physicist and chemist',
                    awards: 4,
                    awardName: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
                    discovered: 'polonium (element)'}}
        size={70}/>

      <Item 
        person = {{ name: "Katsuko Saruhashi", 
                    image: 'https://i.imgur.com/YfeOqp2s.jpg', 
                    profession: 'geochemist',
                    awards: 2,
                    awardName: 'Miyake Prize for geochemistry, Tanaka Prize',
                    discovered: 'a method for measuring carbon dioxide in seawater'}}
        size={70}/>
    </div>
  );
}
