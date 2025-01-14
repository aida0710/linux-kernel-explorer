---
sidebar_position: 2
---
# marvell,berlin-smp

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/cpu-enable-method/marvell,berlin-smp`

### コンテンツ

```txt
========================================================
Secondary CPU enable-method "marvell,berlin-smp" binding
========================================================

This document describes the "marvell,berlin-smp" method for enabling secondary
CPUs. To apply to all CPUs, a single "marvell,berlin-smp" enable method should
be defined in the "cpus" node.

Enable method name:	"marvell,berlin-smp"
Compatible machines:	"marvell,berlin2" and "marvell,berlin2q"
Compatible CPUs:	"marvell,pj4b" and "arm,cortex-a9"
Related properties:	(none)

Note:
This enable method needs valid nodes compatible with "arm,cortex-a9-scu" and
"marvell,berlin-cpu-ctrl"[1].

Example:

	cpus {
		#address-cells = <1>;
		#size-cells = <0>;
		enable-method = "marvell,berlin-smp";

		cpu@0 {
			compatible = "marvell,pj4b";
			device_type = "cpu";
			next-level-cache = <&l2>;
			reg = <0>;
		};

		cpu@1 {
			compatible = "marvell,pj4b";
			device_type = "cpu";
			next-level-cache = <&l2>;
			reg = <1>;
		};
	};

--
[1] arm/marvell,berlin.txt

```
