---
sidebar_position: 15
---
# zynq-zturn-v5.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/xilinx/zynq-zturn-v5.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0

/dts-v1/;
/include/ "zynq-zturn-common.dtsi"

/ {
	model = "Zynq Z-Turn MYIR Board V5";
	compatible = "myir,zynq-zturn-v5", "xlnx,zynq-7000";
};

&gem0 {
	ethernet_phy: ethernet-phy@0 {
		reg = <0x3>;
	};
};

```
