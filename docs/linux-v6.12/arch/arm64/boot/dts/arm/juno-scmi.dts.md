---
sidebar_position: 22
---
# juno-scmi.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/arm/juno-scmi.dts`

### コンテンツ

```dts
#include "juno.dts"
#include "juno-scmi.dtsi"

&A57_0 {
	clocks = <&scmi_dvfs 0>;
};
&A57_1 {
	clocks = <&scmi_dvfs 0>;
};

```
