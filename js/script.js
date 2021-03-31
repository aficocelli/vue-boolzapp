// vue js

var app = new Vue ({

  el: '#root',

  data: {

    contacts: [

      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },

          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },

          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          }
        ],

      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [

          {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
          },

          {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },

          {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'received'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [

          {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
          },

          {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },

          {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [

          {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },

          {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      }

    ],

    indexContact: 0,

    newText: null,

    search:"",

  },

  methods: {

    enterText: function(){

      var myThis = this;

      if(this.newText != null ){

        this.contacts[this.indexContact]
          .messages
          .push({
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message: this.newText,
            status: 'sent'
          });

        this.newText = null;

        setTimeout (function(){

          myThis.contacts[myThis.indexContact]
            .messages
            .push({
              date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
              message: 'ok',
              status: 'received'
            });

        }, 1000);

      }

    },


  },

  computed:{

    filterMex: function(){

      return this.contacts.filter((item, index)=>{



        return item.name.toLowerCase().match(this.search.toLowerCase());

        
      });


    },

    // filterText: function(){
    //
    //   return this.contacts[this.indexContact].messages.filter((item)=>{
    //
    //     return item.message.toLowerCase().match(this.search.toLowerCase());
    //
    //   });
    //
    //
    // }


  }























});

// vue js
