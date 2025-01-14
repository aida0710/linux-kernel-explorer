---
sidebar_position: 39
---
# moxa,moxart-watchdog.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/watchdog/moxa,moxart-watchdog.txt`

### コンテンツ

```txt
MOXA ART Watchdog timer

Required properties:

- compatible : Must be "moxa,moxart-watchdog"
- reg : Should contain registers location and length
- clocks : Should contain phandle for the clock that drives the counter

Example:

	watchdog: watchdog@98500000 {
		compatible = "moxa,moxart-watchdog";
		reg = <0x98500000 0x10>;
		clocks = <&coreclk>;
	};

```
