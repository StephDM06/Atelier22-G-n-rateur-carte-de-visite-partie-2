const Component = {
  data() {
    return {
      nom: "Doe",
      prenom: "John",
      entreprise: "Space W",
      poste: "pilote intergalactique",
      mail: "doe.john@spacew.br",
      tel: "01-23-45-67-89",
      id: "",
      classFont: "",
      name: "",
      modif: "",
    };
  },

  methods: {
    formatName(nom) {
      return nom.charAt(0).toUpperCase() + nom.slice(1);
    },

    changeNom(e) {
      this.nom = e.target.value;
    },
    changePrenom(e) {
      this.prenom = e.target.value;
    },
    changePoste(e) {
      this.poste = e.target.value;
    },
    changeEntreprise(e) {
      this.entreprise = e.target.value;
    },
    changeMail(e) {
      this.mail = e.target.value;
    },
    changeTel(e) {
      this.tel = e.target.value;
    },
  },
  template: `
  <section id="affichage">
  <div id="title">
  <h1> Générateur de carte de visite</h1>
  <div id="essai">
    <div :class="'carte ' + classFont">
          <h1> {{formatName(nom)}} {{formatName(prenom)}}</h1>
          <h2>Poste: {{formatName(poste)}}</h2>
          <h2>Ets: {{formatName(entreprise)}}</h2> 
          </br>
          </br>
          <p>Tel : {{tel}}  </p>
          </br>
          <p>Courriel: {{mail}}</p>
    </div>
    </div>
    <div class="bascarte">
      <div id="sectionfont">
        <div class="fond">
          <button @click="classFont='fontRouge'">Fond rouge</button>
          <button @click="classFont='fontBleu'">Fond bleu</button>
        </div>
      </div>   
    <div class="modif">
        <h1>Vos nouvelles données</h1>
        <div id="content">
          <label>Nom :  <input @input="changeNom" placeholder="Entrez le nouveau nom: "/></label>        
          <br/>
          <label>Prenom :  <input @input="changePrenom" placeholder="Entrez le nouveau prénom: "/></label>        
           <br/>
          <label>Poste :  <input @input="changePoste" placeholder="Entrez le nouveau poste: "/></label>
           <br/>
          <label>Entreprise :  <input @input="changeEntreprise" placeholder="Entrez la nouvelle entreprise: "/></label>
           <br/>
          <label>Mail :  <input @input="changeMail" placeholder="Entrez le nouveau courriel: "/></label>
           <br/>
          <label>Téléphone :  <input @input="changeTel" placeholder="Entrez le nouveau téléphone: "/></label>  
        </div>
    </div>
  </div> 
    
  </section>`,
};
Vue.createApp(Component).mount("#root");
