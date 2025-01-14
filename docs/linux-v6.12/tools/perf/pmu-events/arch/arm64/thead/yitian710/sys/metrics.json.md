---
sidebar_position: 2
---
# metrics.json

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/arm64/thead/yitian710/sys/metrics.json`

### コンテンツ

```json
[
	{
		"MetricName": "ddr_read_bandwidth.all",
		"BriefDescription": "The ddr read bandwidth(MB/s).",
		"MetricGroup": "ali_drw",
		"MetricExpr": "hif_rd * 64 / 1e6 / duration_time",
		"ScaleUnit": "1MB/s",
		"Unit": "ali_drw",
		"Compat": "ali_drw_pmu"
	},
	{
		"MetricName": "ddr_write_bandwidth.all",
		"BriefDescription": "The ddr write bandwidth(MB/s).",
		"MetricGroup": "ali_drw",
		"MetricExpr": "(hif_wr + hif_rmw) * 64 / 1e6 / duration_time",
		"ScaleUnit": "1MB/s",
		"Unit": "ali_drw",
		"Compat": "ali_drw_pmu"
	}
]

```
