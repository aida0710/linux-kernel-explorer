---
sidebar_position: 74
---
# vexpress.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/hwmon/vexpress.txt`

### コンテンツ

```txt
Versatile Express hwmon sensors
-------------------------------

Requires node properties:
- "compatible" value : one of
	"arm,vexpress-volt"
	"arm,vexpress-amp"
	"arm,vexpress-temp"
	"arm,vexpress-power"
	"arm,vexpress-energy"
- "arm,vexpress-sysreg,func" when controlled via vexpress-sysreg
  (see Documentation/devicetree/bindings/arm/vexpress-config.yaml
  for more details)

Optional node properties:
- label : string describing the monitored value

Example:
	energy@0 {
		compatible = "arm,vexpress-energy";
		arm,vexpress-sysreg,func = <13 0>;
		label = "A15 Jcore";
	};

```
