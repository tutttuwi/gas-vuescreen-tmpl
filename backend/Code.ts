global.echo = () => {
  Logger.log("Hello");
};

global.doGet = (e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent) => {
  const evalFunc = e.parameters.func;
  // TODO: 文字列チェック [evalFunc] 不正な文字列が含まれていたら弾く必要がある
  if (evalFunc) {
    try {
      const response: Object = eval(evalFunc + "()");
      return global.createResponse(response, e.parameter.callback);
    } catch (error) {
      console.log(error);
      return global.responseError();
    }
  } else {
    return HtmlService.createTemplateFromFile("index")
      .evaluate()
      .setTitle("vue-gas-app")
      .setFaviconUrl(
        "https://drive.google.com/uc?id=1HOlf2gOMPAS6IECjttZmzQDqkzpV9GBC&.png",
      )
      .addMetaTag("viewport", "width=device-width, initial-scale=1");
  }
};

global.responseError = () => {
  const response = {
    msg: "存在しない関数が指定されました。",
  };
  const payload = JSON.stringify(response);
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(payload);
  return output;
};

global.getUserEmail = () => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "3600",
  };

  const userData = Session.getActiveUser();
  const response = {
    email: userData.getEmail(),
  };

  return response;
};

global.createResponse = (response: Object, callback: Function) => {
  const payload = JSON.stringify(response);

  // @ts-ignore
  const output = ContentService.createTextOutput({
    stauts: 200,
    message: "success",
    header: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  if (callback) {
    output.setMimeType(ContentService.MimeType.JAVASCRIPT);
    output.setContent(payload);
  } else {
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(payload);
  }
  return output;
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
