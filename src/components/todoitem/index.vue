<template src="./template.html"></template>

<script>
export default {
  data() {
    return {
      edit: null,
    };
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    todo() {
      return this.$store.state.todos[this.index];
    },
    complete: {
      get() {
        return this.todo.complete;
      },
      set(val) {
        this.$store.commit("UPDATE_TODO", {
          index: this.index,
          data: {
            content: this.todo.content,
            complete: val,
          },
        });
      },
    },
  },
  methods: {
    removeHandler() {
      if (confirm(`是否確認刪除${this.todo.content}?`))
        this.$store.commit("REMOVE_TODO", this.index);
    },
    editHandler() {
      this.edit = this.todo.content;
    },
    enterHandler() {
      if(this.edit==="") return this.removeHandler();
      this.$store.commit("UPDATE_TODO",{
        index: this.index,
          data: {
            content: this.edit,
            complete: this.todo.complete,
          },
      });
      this.edit=null
    },
    cancelHandler() {
      return this.edit=null
    },
  },
};
</script>
<style lang="scss">
.todoitem {
  text-align: center;
  .check:checked ~ {
    label {
      color: red;
      text-decoration: line-through;
    }
  }
}
</style>