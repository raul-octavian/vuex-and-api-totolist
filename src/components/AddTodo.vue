<template>
  <div>
    <h3>Add todo</h3>
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="Add to do..." />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
//call the action map from vuex
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      //title is bound to the imput fild with v-model bild
      title: ""
    };
  },
  methods: {
    //call the method of intrerest from the action map
    ...mapActions(["addTodo"]),
    // create a function to be called when the form is submitted
    onSubmit(e) {
      //prevent the default form delivery becouse the form hase no action attached
      e.preventDefault();
      //call this addTodo method and pass it the value in this title atribute
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  color: #fff;
  cursor: pointer;
  background: #41b883;
}
</style>