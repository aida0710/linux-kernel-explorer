---
sidebar_position: 16
---
# zynq-zturn.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/xilinx/zynq-zturn.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0

/dts-v1/;
/include/ "zynq-zturn-common.dtsi"

/ {
	model = "Zynq Z-Turn MYIR Board";
	compatible = "myir,zynq-zturn", "xlnx,zynq-7000";
};

&gem0 {
	ethernet_phy: ethernet-phy@0 {
		reg = <0x0>;
	};
};

```
