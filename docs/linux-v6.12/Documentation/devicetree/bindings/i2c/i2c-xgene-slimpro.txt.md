---
sidebar_position: 50
---
# i2c-xgene-slimpro.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/i2c/i2c-xgene-slimpro.txt`

### コンテンツ

```txt
APM X-Gene SLIMpro Mailbox I2C Driver

An I2C controller accessed over the "SLIMpro" mailbox.

Required properties :

 - compatible : should be "apm,xgene-slimpro-i2c"
 - mboxes : use the label reference for the mailbox as the first parameter.
	    The second parameter is the channel number.

Example :
	i2cslimpro {
		compatible = "apm,xgene-slimpro-i2c";
		mboxes = <&mailbox 0>;
	};

```
