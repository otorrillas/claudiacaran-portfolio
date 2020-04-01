import { types } from "../../constants/project-types";

const data = {
  title: "La Farandula",
  hero: "",
  styles: {
    background: "#F1F0EC",
    color: "#181818",
  },
  sections: [
    [
      {
        type: types.text,
        text: `Client: La Farándula
        Services: Branding, Consulting, Logotype
        Year: January, 2017
        `,
      },
      {
        type: types.text,
        text: `La Farándula is an actors’ agency based in Barcelona with an outstanding presence in the entertainment business. It has been representing actors for over 10 years together with a symbol of a big red carnation used to give the company its own identity.

        After a long time, they decided they needed a change and asked me to redesign their logotype without losing their particular identity that highlights and typifies passion, admiration, pride and temper.`,
      },
    ],

    [
      {
        type: types.image,
        alt: "some text",
        src: "/Projects/Botikarium/ClaudiaAran-Botikarium-03.jpg",
      },
    ],

    [
      {
        type: types.image,
        alt: "alt text",
        src: "/Projects/Botikarium/ClaudiaAran-Botikarium-04.jpg",
      },
    ],

    [
      {},
      {
        type: types.text,
        text: `It is known that in Japan people put their own seal with red ink on documents, in addition to their own signature, in order to verify their identity. They are called Hankos and everybody has one. It’s a symbol, known as Kamon that refers to a crest used to indicate one’s origins; and it’s said that there are more than 20,000 distinct individual Kamons in Japan.

        For this reason, I decided to create a Hanko with the carnation in order to create a seal just like Japanese people do in Japan, to keep the “farándula” identity to its strongest level.`,
      },
    ],

    [
      {
        type: types.image,
        alt: "alt text",
        src: "/Projects/Botikarium/ClaudiaAran-Botikarium-06.jpg",
      },
      {
        type: types.image,
        alt: "alt text",
        src: "/Projects/Botikarium/ClaudiaAran-Botikarium-05.jpg",
      },
    ],
  ],
};

export default data;
