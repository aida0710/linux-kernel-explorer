---
sidebar_position: 40
---
# moxa,moxart-rtc.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/rtc/moxa,moxart-rtc.txt`

### コンテンツ

```txt
MOXA ART real-time clock

Required properties:

- compatible : Should be "moxa,moxart-rtc"
- rtc-sclk-gpios : RTC sclk gpio, with zero flags
- rtc-data-gpios : RTC data gpio, with zero flags
- rtc-reset-gpios : RTC reset gpio, with zero flags

Example:

	rtc: rtc {
		compatible = "moxa,moxart-rtc";
		rtc-sclk-gpios = <&gpio 5 0>;
		rtc-data-gpios = <&gpio 6 0>;
		rtc-reset-gpios = <&gpio 7 0>;
	};

```
