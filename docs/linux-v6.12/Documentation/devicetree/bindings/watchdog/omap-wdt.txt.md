---
sidebar_position: 45
---
# omap-wdt.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/watchdog/omap-wdt.txt`

### コンテンツ

```txt
TI Watchdog Timer (WDT) Controller for OMAP

Required properties:
- compatible : "ti,omap3-wdt" for OMAP3 or "ti,omap4-wdt" for OMAP4
- ti,hwmods : Name of the hwmod associated to the WDT

Optional properties:
- timeout-sec : default watchdog timeout in seconds

Examples:

wdt2: wdt@4a314000 {
	compatible = "ti,omap4-wdt", "ti,omap3-wdt";
	ti,hwmods = "wd_timer2";
};

```
