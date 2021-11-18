import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    welcome: true,
    tickets: [
      {
        airline: 'Airline1',
        description: 'Lorem ipsum is the text commonly used in graphic design in demos of typographies or design drafts to test the visual design before inserting the final text. Although he does not currently have sources to justify his hypotheses, the professor of philology',
        price: '$2000',
        duration: '55 min',
        discount: '2%',
        classFly: 'first',
        stopover: 90
      },
      {
        airline: 'Latam',
        description: 'Lorem ipsum is the text commonly useds or design drafts to test the visual design before iessor of philology',
        price: '$3000',
        duration: '57 min',
        discount: '2%',
        classFly: 'first',
        stopover: 30
      },
      {
        airline: 'Airline2',
        description: 'Lorem ipsum is ic des or design drafts to test the visual design before inserting the final text. Although he does not currently have sources to justify his hypotheses, the professor of philology',
        price: '$4000',
        duration: '444 min',
        discount: '2%',
        classFly: 'first',
        stopover: 90
      },
      {
        airline: 'Qtar',
        description: 'Lorem ipsum is theesign in demos of typographies or design draesign before inserting the final text. Although he does not currently have sources to justify his hypotheses, the professor of philology',
        price: '$5000',
        duration: '100 min',
        discount: '2%',
        classFly: 'first',
        stopover: 89
      },
      {
        airline: 'Smms',
        description: 'Lorem f typographies or design drafts to tesgn before inserting the final text.rrently have sources to justify his hypotheses, the professor of philology',
        price: '$6000',
        duration: '57 min',
        discount: '2%',
        classFly: 'first',
        stopover: 1
      },
      {
        airline: 'Rails',
        description: 'phic design in demos of typographies or design drafts to test typotheses, the professor of philology',
        price: '$7000',
        duration: '23 min',
        discount: '2%',
        classFly: 'first',
        stopover: 9
      },
      {
        airline: 'VueAir',
        description: 'Lorem ipsum is theraphic design in demos of typographies or design drafts to test the visual design before inserting the final text. Although he does not currently have sources to justify his hypotheses, the professor of philology',
        price: '$8000',
        duration: '54 min',
        discount: '2%',
        classFly: 'first',
        stopover: 904
      },
      {
        airline: 'AngularAir',
        description: 'Lorem ipsum is the text commonlhies or design drafts to test the visual de justify his hypotheses, the professor of philology',
        price: '$9000',
        duration: '55 min',
        discount: '2%',
        classFly: 'first',
        stopover: 905
      },
      {
        airline: 'RestAirline',
        description: 'Lorem ipsum is the s to test the visual design before inserting the fily have sources to justify his hypotheses, the professor of philology',
        price: '$0000',
        duration: '55 min',
        discount: '2%',
        classFly: 'first',
        stopover: 904
      },
      {
        airline: 'Airline67',
        description: 'Lorem ipsum is the text commonly used in graphic design in demos of typographies or des visual design before inserting the final text. Although he does not currently have sources to justify his hypotheses, the professor of philology',
        price: '$2000',
        duration: '55 min',
        discount: '2%',
        classFly: 'first',
        stopover: 908
      },
      {
        airline: 'GotLess',
        description: 'Lorem ipsum is the text commonly used in graphic design in demos ofurrently have sources to justify his hypotheses, the professor of philology',
        price: '$2000',
        duration: '55 min',
        discount: '2%',
        classFly: 'first',
        stopover: 900
      },
      {
        airline: 'FreshLine',
        description: 'Lorem ipsum is the f typographies or design drafts to test the visual design before inserting the final text. Although he does not currently have sources to justify his hypotheses, the professor of philology',
        price: '$2000',
        duration: '55 min',
        discount: '2%',
        classFly: 'first',
        stopover: 9
      },
    ]
  },
  mutations: {
    disappear: state => {
      state.welcome = false;
    }
  },
  actions: {},
  modules: {},
  getters: {
    findTickets: (state) => {
      //here it is supposed to do searching method
      return state.tickets;
    }
  },

})

