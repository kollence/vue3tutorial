<template>
  <form class="form" @submit.prevent="submitThisForm">
    <label for="email">Email</label>
    <input type="email" name="email" v-model="email" />
    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" />
    <label for="role">Role</label>
    <select v-model="role" name="role">
      <option value="izaberi">Izaberi</option>

      <option value="developer">Web Dev</option>
      <option value="designer">Web Designer</option>
    </select>
    <div class="terms">
      <input type="checkbox" v-model="terms" name="terms" />
      <label for="terms">Terms</label>
    </div>
    <small style="color: green">1.single checkbox: v-modal=boolean</small>
    <div v-for="item in vrednosti" :key="item">
      <input type="checkbox" :value="item" name="names" v-model="names" /><label
        for="names"
        >{{ item }}</label
      >
    </div>
    <small style="color: green">2.multy checkboxs: v-modal=array</small>
    <hr />
    <label for="skills">Skils:</label> <small>(Alt + z) - to add skill</small>
    <input
      type="text"
      name="skills"
      v-model="tempSkills"
      @keyup.alt="separateByComa"
    />
    <div>
      <div class="pill" v-for="skill in pickedSkills" :key="skill">
        {{ skill }} <a @click="removeSkill(skill)">&times;</a>
      </div>
    </div>
    <div class="submit">
      <button>Submit</button>
    </div>
  </form>
  <div>
    <div>email {{ email }}</div>
    <div>password {{ password }}</div>
    <div>role {{ role }}</div>
    <div v-if="names.length > 0">odabrana imena {{ names }}</div>
    <div v-if="terms">Privatio si uslove...</div>
    <div v-if="pickedSkills.length > 0">odabrana imena {{ pickedSkills }}</div>
  </div>
</template>

<script>
export default {
  name: "userform",
  data() {
    return {
      email: "",
      password: "",
      role: "izaberi",
      terms: false,
      vrednosti: ["za", "protiv", "izmedju"],
      names: [],
      tempSkills: "",
      pickedSkills: [],
    };
  },
  methods: {
    separateByComa(e) {
      console.log();
      if (e.key === "z" && this.tempSkills) {
        // let str = this.tempSkills.replace(",", "");
        if (!this.pickedSkills.includes(this.tempSkills)) {
          this.pickedSkills.push(this.tempSkills);
        }
        this.tempSkills = "";
      }
    },
    removeSkill(skill) {
      this.pickedSkills.splice(this.pickedSkills.indexOf(skill), 1);
    },
    submitThisForm() {
        //validate password
        console.log(this.$data);
    },
  },
};
</script>

<style>

</style>