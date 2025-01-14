---
sidebar_position: 5
---
# pct.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arc/pct.txt`

### コンテンツ

```txt
* ARC Performance Counters

The ARC700 can be configured with a pipeline performance monitor for counting
CPU and cache events like cache misses and hits. Like conventional PCT there
are 100+ hardware conditions dynamically mapped to up to 32 counters

Note that:
 * The ARC 700 PCT does not support interrupts; although HW events may be
   counted, the HW events themselves cannot serve as a trigger for a sample.

Required properties:

- compatible : should contain
	"snps,arc700-pct"

Example:

pmu {
        compatible = "snps,arc700-pct";
};

```
