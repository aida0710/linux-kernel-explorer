---
sidebar_position: 2
---
# metrics.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/freescale/imx8mm/sys/metrics.json`

### コンテンツ

```json
[
   {
	    "BriefDescription": "bytes all masters read from ddr based on read-cycles event",
	    "MetricName": "imx8mm_ddr_read.all",
	    "MetricExpr": "imx8mm_ddr.read_cycles * 4 * 4",
	    "ScaleUnit": "9.765625e-4KB",
	    "Unit": "imx8_ddr",
	    "Compat": "i.MX8MM"
   },
   {
	    "BriefDescription": "bytes all masters write to ddr based on write-cycles event",
	    "MetricName": "imx8mm_ddr_write.all",
	    "MetricExpr": "imx8mm_ddr.write_cycles * 4 * 4",
	    "ScaleUnit": "9.765625e-4KB",
	    "Unit": "imx8_ddr",
	    "Compat": "i.MX8MM"
   }
]

```
