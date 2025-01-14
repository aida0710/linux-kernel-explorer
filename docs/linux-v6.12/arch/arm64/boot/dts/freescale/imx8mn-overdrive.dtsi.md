---
sidebar_position: 200
---
# imx8mn-overdrive.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mn-overdrive.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)

&gpu {
	assigned-clocks = <&clk IMX8MN_CLK_GPU_CORE>,
			  <&clk IMX8MN_CLK_GPU_SHADER>,
			  <&clk IMX8MN_CLK_GPU_AXI>,
			  <&clk IMX8MN_CLK_GPU_AHB>,
			  <&clk IMX8MN_GPU_PLL>;
	assigned-clock-parents = <&clk IMX8MN_GPU_PLL_OUT>,
				  <&clk IMX8MN_GPU_PLL_OUT>,
				  <&clk IMX8MN_SYS_PLL1_800M>,
				  <&clk IMX8MN_SYS_PLL1_800M>;
	assigned-clock-rates = <600000000>,
			       <600000000>,
			       <800000000>,
			       <400000000>,
			       <1200000000>;
};

```
