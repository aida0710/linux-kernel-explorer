---
sidebar_position: 1
---
# mapfile.csv

### ファイル情報

- パス: `linux-v6.12/tools/perf/pmu-events/arch/nds32/mapfile.csv`

### コンテンツ

```csv
# Format:
#	MIDR,Version,JSON/file/pathname,Type
#
# where
#	MIDR	Processor version
#		Variant[23:20] and Revision [3:0] should be zero.
#	Version could be used to track version of JSON file
#		but currently unused.
#	JSON/file/pathname is the path to JSON file, relative
#		to tools/perf/pmu-events/arch/arm64/.
#	Type is core, uncore etc
#
#
#Family-model,Version,Filename,EventType
0x0,v3,n13,core

```
