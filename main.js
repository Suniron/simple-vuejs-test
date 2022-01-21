const app = Vue.createApp({
  data() {
    return {
      title: "This is my first Vue.js app 🦸",
      myHead: {
        urls: ["./assets/images/myhead_1.jpg", "./assets/images/myhead_2.jpg"],
        selected: {
          leftHeadUrlIndex: 0,
          rightHeadUrlIndex: 1,
        },
      },
      isLightOn: false,
      isAvailable: true,
      myChildren: [
        {
          name: "Noé",
          age: "8",
          color: "blue"
        },
        {
          name: "Leïla",
          age: "1",
          color: "pink"
        },
      ],
      switchCount: 0,
      electricityCost: 0.1,
      nickName: "Suniron",
      totalSkillsScore: 0,
    };
  },
  methods: {
    switchLight() {
      this.lightOn = !this.lightOn;
      this.switchCount++;
      console.log("The light is switched!");
    },
    switchMyHeadImages() {
      this.myHead.selected.leftHeadUrlIndex =
        this.myHead.selected.leftHeadUrlIndex === 0 ? 1 : 0;
      this.myHead.selected.rightHeadUrlIndex =
        this.myHead.selected.rightHeadUrlIndex === 0 ? 1 : 0;
      console.log("The head images is switched!");
    },
    totalSkillsScoreAdd(scoreToAdd) {
      this.totalSkillsScore += scoreToAdd;
      console.log("The total skills score is updated!", scoreToAdd);
    },
  },
  computed: {
    electricityTotalCost() {
        console.log("The electricity cost is computed!");
        return (this.switchCount * this.electricityCost).toFixed(2);
    } 
  }
});
