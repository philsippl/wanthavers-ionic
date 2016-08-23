wanthaver.constant('CloudMessageSubject', {
   'NEWMESSAGE': 'NewMessage',
   'NEWMESSAGE_SENDER': 'sender',
   'NEWMESSAGE_SENDERID': 'senderId',
   'NEWMESSAGE_CHATID': 'chatId',

   'DESIREUPDATE': 'DesireUpdate',

   'DESIRECOMPLETE': 'DesireComplete',
   'DESIRECOMPLETE_DESIREID': 'desireId',
   'DESIRECOMPLETE_DESIRETITLE': 'desireTitle',

   'HAVERACCEPTED': 'HaverAccepted',
   'HAVERACCEPTED_DESIREID': this.DESIRECOMPLETE_DESIREID,
   'HAVERACCEPTED_DESIRETITLE': this.DESIRECOMPLETE_DESIRETITLE,

   'HAVERREJECTED': 'HaverRejected',
   'HAVERREJECTED_DESIREID': this.DESIRECOMPLETE_DESIREID,
   'HAVERREJECTED_DESIRETITLE': this.DESIRECOMPLETE_DESIRETITLE,

   'NEWHAVER': 'NewHaver',
   'NEWHAVER_DESIREID': this.DESIRECOMPLETE_DESIREID,
   'NEWHAVER_DESIRETITLE': this.DESIRECOMPLETE_DESIRETITLE,
});