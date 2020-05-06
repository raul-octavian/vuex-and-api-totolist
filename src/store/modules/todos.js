import axios from 'axios'
// step one, declare a state, something ot hold the data
const state = {

    todos: [

    ]
};

//getters call on the data in the state object 
// getters are used to propell the data in the componets, it is called in the component with an import and computed proprety
//import { mapGetters } from "vuex";

//computed: mapGetters(["allTodos"]), must be inside the exposrt default and the value called hse the name given to the getter
const getters = {
    allTodos: state => state.todos
};

// to calllon an API fistr import the lobrary used(axios) import axios from 'axios'
//then use async and give a name that takes a parameter, allwais a commit, then inside the funtion call on the Api
//const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
//the action is called in the compoenntet within the methods object like this
//...mapActions(["fetchTodos"]) and imported jus like getters as mapActions
//call the fucntion on the eent hook created in the component
const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

        commit('setTodos', response.data);
    },

    //send the added todos to the json placeolder 
    //title is loading the data pased in by the the form and this.title-atribute
    async addTodo({ commit }, title) {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed: false });

        commit('newTodo', response.data);
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {
        //get selected number

        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

        commit('setTodos', response.data);

    },
    async updateTodo({ commit }, update) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${update.id}`, update);

        commit('updateTodo', response.data);
    }

};

const mutations = {
    //change the state with the pulled Api
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, update) => {
        const index = state.todos.findIndex(todo => todo.id === update.id);
        if (index !== -1) {
            state.todos.splice(index, 1, update);
        }
    }

};


export default {
    state,
    getters,
    actions,
    mutations,
}