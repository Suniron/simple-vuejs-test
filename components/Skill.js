app.component("skill", {
  template: `<div class="border-2">
                <p class="text-lg">{{name}}</p>
                <p>My level is {{level}} ({{score}})</p>
                <button class="w-4 border-2 active:bg-gray-200" @click="levelUp()">+</button>
                <button class="w-4 border-2 active:bg-gray-200" @click="levelDown()">-</button>
            </div>`,
  data() {
    return {
      score: 0,
    };
  },
  props: ["name"],
  methods: {
    levelUp() {
      this.$emit("level-up");
      this.score++;
    },
    levelDown() {
      this.$emit("level-down");
      this.score--;
    },
  },
  computed: {
    level() {
        console.log(this.name);
      if (this.score < 3) {
        return "bad";
      } else if (this.score < 5) {
        return "normal";
      } else if (this.score < 10) {
        return "good";
      }

      return "godlike";
    },
  },
});
