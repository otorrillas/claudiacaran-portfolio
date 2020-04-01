import { types } from "../../constants/project-types";

const data = {
  title: "Botikarium",
  hero: "/Projects/Botikarium/ClaudiaAran-Botikarium-07.jpg",
  styles: {
    background: "#AFB8B3",
    color: "#333333"
  },
  sections: [
    [
      {
        type: types.text,
        text: `
        <p><b>Client</b>: Botikarium</p>
        <p><b>Services</b>: Art Direction, Brand Identity, Logo Design, Packaging, Social Media, Web Design.</p>
        <p><b>Year</b>: 2015</p>
        `
      },
      {
        type: types.html,
        text: `
        <h2>Introduction.</h2>
        <p>Botikarium takes shape with a collection of sustainable and ethical glass bottles filled of positive values from the fight for an ethical market that cares for our planet and show a commitment to change. The aim of the brand was not only to create a functional and quality product in order to reduce plastic consumption, but also to beautifully design it to tidy and unify the interior design of each space.</p>
        `
      }
    ],
    [
      {},
      {
        type: types.html,
        text: `
        <h2>Creative Concept.</h2>
        <p>The naming Botikarium (from the name Boticario in Spanish –Apothecary–) took the creative concept from its origins. The visual identity is a contemporary interpretation of the products of the apothecaries of that time, with a minimalist design that suits to a variety of different spaces and interiors. To embody this approach, the brand imagery is based on the main elements found on our planet –such as water, soil and nature–,  expanded on the soft hues of the color palette and a graphic style in the most delicate manner.</p>
        `
      }
    ],
    [
      {
        type: types.image,
        alt: "alt text",
        src: "/Projects/Botikarium/ClaudiaAran-Botikarium-06.jpg"
      },
      {
        type: types.image,
        alt: "alt text",
        src: "/Projects/Botikarium/ClaudiaAran-Botikarium-05.jpg"
      }
    ],
    [
      {},
      {
        type: types.html,
        text: `
        <h2>Graphic elements.</h2>
        <p>The labels, waterproof and resistant to sunlight, are complemented by a handwritten added to bring a personal tone of voice like the pharmacist would give at that time. On the other side, the packaging and website amplify the natural, organic, and neutral tones, with a presence that shapes with a stronger voice the claim of the brand.</p>
        `
      }
    ],
    [
      {
        type: types.image,
        alt: "alt text",
        src: "/Projects/Botikarium/ClaudiaAran-botikarium-web-01.jpg"
      }
    ],
    [
      {
        type: types.image,
        alt: "some text",
        src: "/Projects/Botikarium/ClaudiaAran-Botikarium-04.jpg"
      }
    ]
  ]
};

export default data;
