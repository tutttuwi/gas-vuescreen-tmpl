global.echo = () => {
  Logger.log("Hello");
};

global.doGet = () => {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("vue-gas-app")
    .setFaviconUrl(
      "https://drive.google.com/uc?id=1HOlf2gOMPAS6IECjttZmzQDqkzpV9GBC&.png",
    )
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
};

/**
 * @version 1.0.0
 */
interface Person {
  name: string;
  age: number;
}

global.someFunction = (msg: string, person: Person) => {
  // do something ...
};
