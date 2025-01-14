---
sidebar_position: 9
---
# foundation-v8-psci.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/arm/foundation-v8-psci.dtsi`

### コンテンツ

```dtsi
/*
 * ARM Ltd.
 *
 * ARMv8 Foundation model DTS (PSCI configuration)
 */

/ {
	psci {
		compatible = "arm,psci-1.0";
		method = "smc";
	};
};

&cpu0 {
	enable-method = "psci";
};

&cpu1 {
	enable-method = "psci";
};

&cpu2 {
	enable-method = "psci";
};

&cpu3 {
	enable-method = "psci";
};

```
