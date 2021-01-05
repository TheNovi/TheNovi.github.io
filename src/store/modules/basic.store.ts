import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Basic extends VuexModule {
  footer = "";
  age = "";

  @Mutation
  SET_FOOTER(footer: string) {
    this.footer = footer;
  }

  @Mutation
  SET_AGE(age: string) {
    this.age = age;
  }

  @Action
  init() {
    let y = new Date().getFullYear();
    const a = [
      y,
      y - 1,
      y + " - until your death",
      "1997",
      "NaN",
      "Null",
      true,
      false,
      "42",
      "1337",
      "0x1a4"
    ];
    this.context.commit("SET_FOOTER", a[Math.floor(Math.random() * a.length)]);

    y = new Date().getFullYear() - 1997;
    if (new Date().getMonth() - 5 < 0) y--;
    this.context.commit(
      "SET_AGE",
      `I am just an ${y} years old programmer, gamer, geek and otaku from Czech Republic.`
    );
  }
}
