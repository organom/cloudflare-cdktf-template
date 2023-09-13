import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { CloudflareProvider } from "./.gen/providers/cloudflare/provider";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new CloudflareProvider(this, "cloudflare", {
      apiToken: process.env.API_TOKEN,
    });

  }
}

const app = new App();
new MyStack(app, "cloudflare-cdktf");
app.synth();
