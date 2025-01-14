---
sidebar_position: 7
---
# foundation-v8-gicv3.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/arm/foundation-v8-gicv3.dtsi`

### コンテンツ

```dtsi
/*
 * ARM Ltd.
 *
 * ARMv8 Foundation model DTS (GICv3 configuration)
 */

/ {
	gic: interrupt-controller@2f000000 {
		compatible = "arm,gic-v3";
		#interrupt-cells = <3>;
		#address-cells = <1>;
		#size-cells = <1>;
		ranges = <0x0 0x0 0x2f000000 0x100000>;
		interrupt-controller;
		reg = <0x0 0x2f000000 0x0 0x10000>,
		      <0x0 0x2f100000 0x0 0x200000>,
		      <0x0 0x2c000000 0x0 0x2000>,
		      <0x0 0x2c010000 0x0 0x2000>,
		      <0x0 0x2c02f000 0x0 0x2000>;
		interrupts = <GIC_PPI 9 IRQ_TYPE_LEVEL_HIGH>;

		its: msi-controller@2f020000 {
			compatible = "arm,gic-v3-its";
			msi-controller;
			#msi-cells = <1>;
			reg = <0x20000 0x20000>;
		};
	};
};

```
