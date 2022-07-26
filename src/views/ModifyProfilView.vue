<template>
  <div>
    <h1>Modifier votre profil</h1>
    <form @submit.prevent="ModifyProfil">
      <div>
        <label for="firstname">Prénom : </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="{{Prénom}}"
          v-model="firstname"
        />
      </div>
      <br />
      <div>
        <label for="lastname">Nom : </label>
        <input
          type="text"
          name="lasttname"
          id="lastname"
          placeholder={{lastname}}
          v-model="lastname"
        />
      </div>
      <br />
      <div>
        <label for="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder= {{email}}
          v-model="email"
        />
      </div>
      <br />
      <div>
        <label for="password">Mot de passe : </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder= {{password}} 
          v-model="password"
        />
      </div>
      <br />
      <div>
        <label for="firstname">linkedIn : </label>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          placeholder={{linkedIn}} 
          v-model="linkedin"
        />
      </div>
      <br />
      <div>
        <label for="firstname">Github </label>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          placeholder="{{github}}"
          v-model="github"
        />
      </div>
      <br />
      <div>
        <label for="firstname">Website :</label>
        <input
          type="text"
          name="website"
          id="website"
          placeholder= {{website}}
          v-model="website"
        />
      </div>
      <br />
      <div>
        <label for="firstname">Portfolio :</label>
        <input
          type="text"
          name="portfolio"
          id="portfolio"
          placeholder= {{portfolio}} 
          v-model="portfolio"
        />
      </div>
      <br />
      <div>
        <label for="firstname">Bio :</label>
          <textarea name="bio" id="bio" placeholder= {{bio}} 
          v-model="bio"></textarea>
      </div>
      <br />
      <div>
        <label for="firstname">Photo :</label>
        <input
          type="image"
          name="picture"
          id="picture"
          placehol= {{picture}}
          v-model="picture"
        />
        <FileUploadView></FileUploadView>
      </div>

      <input type="submit" value="Valider les modifications" />
    </form>

    <p>{{ feedBackmessage }}</p>
  </div>
</template>

<script>
// import FileUpload from './FileUploadView.vue';
import FileUploadView from './FileUploadView.vue';
export default {
    data() {
        return {
            users: [],
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            linkedin:"",
            github:"",
            website:"",
            portfolio:"",
            bio:"",
            picture:"",
            feedBackmessage: "",
        };
    },
    methods: {
        /* Récupération */
        async getModifyProfil() {
            const response = await fetch("http://127.0.0.1:8000/api/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            // const data = await response.json();
            // this.events = data.events;
        },
        /* Création des modifs */
        async createModifyProfil() {
            const body = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password,
                linkedin: this.linkedin,
                github: this.github,
                website: this.website,
                portfolio: this.portfolio,
                bio: this.bio,
                picture: this.picture,
            };
            const response = await fetch("http://127.0.0.1:8000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            this.feedbackMessage = data.message;
            this.getModifyProfil();
            // firstname: this.firstname,
            // lastname: this.lastname,
            // email: this.email,
            // password: this.password,
        },
    },
    mounted() {
        this.getModifyProfil();
    },
    components: { FileUploadView }
};
</script>
