---
sidebar_position: 18
---
# juno-r1-scmi.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/arm/juno-r1-scmi.dts`

### コンテンツ

```dts
#include "juno-r1.dts"
#include "juno-scmi.dtsi"

/ {
	funnel@20130000 {
		power-domains = <&scmi_devpd 8>;
	};

	etf@20140000 {
		power-domains = <&scmi_devpd 8>;
	};

	funnel@20150000 {
		power-domains = <&scmi_devpd 8>;
	};
};

&cti_sys2 {
	power-domains = <&scmi_devpd 8>;
};

&A57_0 {
	clocks = <&scmi_dvfs 0>;
};
&A57_1 {
	clocks = <&scmi_dvfs 0>;
};

```
