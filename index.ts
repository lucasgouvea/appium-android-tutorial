const wdio = require("webdriverio");
const path = require("path");
const app = path.join(__dirname, "app-release.apk");
const opts = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "Android Emulator",
    app,
    appPackage: "com.dooboo",
    automationName: "UiAutomator2"
  }
};

const permitirButton = "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]";
const matriculaInput = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText[1]";
const senhaInput = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText[2]";
const acessar = "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[6]/android.widget.Button";




async function main() {
  const client = await wdio.remote(opts);


  /*   const b = await client.$(permitirButton);
    console.log("aaaaaa")
    console.log(b.elementId) */
  /* await client.acceptAlert(); */
  /*   await client.waitUntil(async () => {
      const a = await client.$(permitirButton);
      console.log("bbbbb")
      console.log(a)
      return a;
    }); */

  /*   setTimeout(async () => {
      const a = await client.$(permitirButton);
      console.log("bbbbb")
      console.log(a.elementId)
    }, 20000)
   */
  await client.waitUntil(async () => (await client.$(permitirButton)).elementId !== undefined, 10000);
  await client.acceptAlert();

  /* await client.waitUntil(() => false, 600000); */
  await client.waitUntil(async () => (await client.$(matriculaInput)).elementId === 123, 6000000);
  /* (await client.$(matriculaInput)).setValue("ABC"); */

  /*  */
  /*   await client.waitUntil(() => , 10000); */

}

main();