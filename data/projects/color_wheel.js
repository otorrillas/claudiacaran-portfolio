import { types } from '../../constants/project-types'

const data = {
  title: 'Color Wheel Tool',
  hero: '',
  styles: {
    background: '#F1F0EC',
    color: '#181818',
  },
  sections: [
    [
      {
        type: types.text,
        text: `Personal project,
        by Hayk with my help and Jeremias‘
        
        Try it here!
        Date: 2018
        `,
      },
      {
        type: types.text,
        text: `The color wheel is a personal project we did at Typeform to experiment with generative design techniques.

        It came up while we were working at Typeform on the design system. When I was generating the new brand colors, we realized that, as designers, it was difficult to generate a color palette to play and experiment in a product design perspective. Having consistency in the colors, regarding the same saturation and lightness, was quite time-consuming, especially in a work environment where we had to test a lot until delivering the final design.
        
        This is was the first approach of the generative tool Hayk designed and developed in order to make this process more efficient and fun. The tool helped us to come up with the new Typeform’s product colors in a much easier, faster, and creative way.`,
      },
    ],

    [
      {
        type: types.image,
        alt: 'some text',
        src: '/Projects/Botikarium/ClaudiaAran-Botikarium-03.jpg',
      },
    ],

    [
      {
        type: types.image,
        alt: 'alt text',
        src: '/Projects/Botikarium/ClaudiaAran-Botikarium-04.jpg',
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
        alt: 'alt text',
        src: '/Projects/Botikarium/ClaudiaAran-Botikarium-06.jpg',
      },
      {
        type: types.image,
        alt: 'alt text',
        src: '/Projects/Botikarium/ClaudiaAran-Botikarium-05.jpg',
      },
    ],
  ],
}

export default data
