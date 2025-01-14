---
sidebar_position: 10
---
# foundation-v8-spin-table.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/arm/foundation-v8-spin-table.dtsi`

### コンテンツ

```dtsi
/*
 * ARM Ltd.
 *
 * ARMv8 Foundation model DTS (spin table configuration)
 */

&cpu0 {
	enable-method = "spin-table";
	cpu-release-addr = <0x0 0x8000fff8>;
};

&cpu1 {
	enable-method = "spin-table";
	cpu-release-addr = <0x0 0x8000fff8>;
};

&cpu2 {
	enable-method = "spin-table";
	cpu-release-addr = <0x0 0x8000fff8>;
};

&cpu3 {
	enable-method = "spin-table";
	cpu-release-addr = <0x0 0x8000fff8>;
};

```
