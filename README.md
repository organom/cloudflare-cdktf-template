# cloudflare-cdktf
A cdktf template for cloudflare


## Was Initialized as

```bash
$ cdktf init --template="typescript"

Welcome to CDK for Terraform!

By default, cdktf allows you to manage the state of your stacks using Terraform Cloud for free.
cdktf will request an API token for app.terraform.io using your browser.

If login is successful, cdktf will store the token in plain text in
the following file for use by subsequent Terraform commands:
    /Users/ricardo/.terraform.d/credentials.tfrc.json

Note: The local storage mode isn't recommended for storing the state of your stacks.

? Do you want to continue with Terraform Cloud remote state management? no
? Project Name cloudflare-cdktf
? Project Description A cdktf template project for cloudflare
? Do you want to start from an existing Terraform project? no
? Do you want to send crash reports to the CDKTF team? Refer to https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/configuration-file#enable-crash-reporting-for-the-cli for more information no
Note: You can always add providers using 'cdktf provider add' later on
? What providers do you want to use? cloudflare
```

Add to `cdktf.json`
```
  (...)
  "terraformProviders": [
    "cloudflare/cloudflare@~> 4"
  ],
  (...)
```

Change `main.ts` with:
```diff
diff --git a/main.ts b/main.ts
index 5eed92c..172f1d1 100644
--- a/main.ts
+++ b/main.ts
@@ -1,12 +1,17 @@
 import { Construct } from "constructs";
 import { App, TerraformStack } from "cdktf";
 
+import { CloudflareProvider } from "./.gen/providers/cloudflare/provider";
+
 class MyStack extends TerraformStack {
   constructor(scope: Construct, id: string) {
     super(scope, id);
+
+		new CloudflareProvider(this, "cloudflare", {
+			apiToken: "API_TOKEN_HERE",
+		});

-    // define resources here
   }
 }
 
 const app = new App();
```

## Changes After Using from Template
* Rename `cloudflare-cdktf` into `your_project_name`
* Cleanup this readme


## Run as
```bash
npm i
npm run get
npm run build

export API_TOKEN="your_token_here" # or add to .env file
cdktf deploy
```
